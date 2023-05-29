import { css as emotion } from "@emotion/css";
import { Image } from "./media";
import { Screen, ScreenKind } from "./screen";

export type GenerateTemplateArgs = {
  name: string;
  url: string;
  thumbnail?: Image;
};

export class Template {
  constructor(
    public readonly name: string,
    public readonly url: string,
    public readonly thumbnail: Image | null
  ) {}

  static generate({ name, url, thumbnail }: GenerateTemplateArgs): Template {
    return new Template(name, url, thumbnail || null);
  }

  getThumbnailUrl(label: string): string | null {
    if (!this.thumbnail) {
      return null;
    }

    return (
      this.thumbnail.assets.filter((asset) => asset.label === label)[0]?.url ||
      this.thumbnail.src
    );
  }

  async transpile(): Promise<TemplateModule> {
    try {
      const res = await fetch(this.url, {
        method: "GET",
        headers: {
          "Content-Type": "text/javascript",
        },
      });
      const text = await res.text();
      const code = await transpile(text);
      const args: GenerateTemplateModuleArgs = await import(
        `data:text/javascript,${encodeURIComponent(code)}`
      );
      return TemplateModule.generate(args);
    } catch (e: any) {
      throw new Error(`Failed to transpile: ${e.message}`);
    }
  }
}

export type PropsType = "text" | "textarea" | "image" | "boolean";

export type GenerateTemplatePropsArgs = {
  type: PropsType;
  key: string;
  name: string;
};

export class TemplateProps {
  constructor(
    public readonly type: PropsType,
    public readonly key: string,
    public readonly name: string
  ) {}

  static generate({
    type,
    key,
    name,
  }: GenerateTemplatePropsArgs): TemplateProps {
    return new TemplateProps(type, key, name);
  }
}

export type GenerateTemplateModuleArgs = {
  Template: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  styles: { [key: string]: string };
  props: TemplateProps;
  defaultProps: { [key: string]: any };
  description: string;
};

export class TemplateModule {
  constructor(
    public readonly Template: React.FC<React.HTMLAttributes<HTMLDivElement>>,
    public readonly styles: { [key: string]: string },
    public readonly props: TemplateProps,
    public readonly defaultProps: { [key: string]: any },
    public readonly description: string
  ) {}

  getStyle(screen: Screen): string {
    let style = this.styles.base;

    if (screen.kind === ScreenKind.Base) {
      return style;
    }

    style = `${style} ${this.styles.sm}`;
    if (screen.kind === ScreenKind.Sm) {
      return style;
    }

    style = `${style} ${this.styles.md}`;
    if (screen.kind === ScreenKind.Md) {
      return style;
    }

    style = `${style} ${this.styles.lg}`;
    if (screen.kind === ScreenKind.Lg) {
      return style;
    }

    style = `${style}\n${this.styles.xl}`;
    if (screen.kind === ScreenKind.Xl) {
      return style;
    }

    style = `${style}\n${this.styles.xxl}`;

    return style;
  }

  static generate({
    Template,
    styles,
    props,
    defaultProps,
    description,
  }: GenerateTemplateModuleArgs): TemplateModule {
    if (!Template || !styles || !props || !defaultProps || !description) {
      throw new Error("Invalid argument");
    }

    return new TemplateModule(
      Template,
      styles,
      props,
      defaultProps,
      description
    );
  }
}

export type GenerateTemplateCollectionArgs = {
  slug: string;
  name: string;
  templates: Template[];
};

export class TemplateCollection {
  constructor(
    public readonly slug: string,
    public readonly name: string,
    public readonly templates: Template[]
  ) {}

  static generate({
    slug,
    name,
    templates,
  }: GenerateTemplateCollectionArgs): TemplateCollection {
    return new TemplateCollection(slug, name, templates);
  }
}

export const css = emotion;

import {
  CompilerOptions,
  JsxEmit,
  ModuleKind,
  ScriptTarget,
  transpileModule,
} from "typescript";

const defaultCompilerOptions: CompilerOptions = {
  jsx: JsxEmit.React,
  target: ScriptTarget.ESNext,
  module: ModuleKind.ESNext,
};

// @ts-ignore
window.process = {
  // @ts-ignore
  versions: {
    pnp: "undefined",
  },
};

const transpile = async (code: string): Promise<string> => {
  const opt = { ...defaultCompilerOptions };
  const { outputText } = transpileModule(code, {
    compilerOptions: opt,
  });

  const importReactRegex = /import\s+React\s+from\s+['"]react['"];?/g;
  const importAllRegex = /import\s+.*\s+from\s+['"].*['"];?/g;
  const importRegex = /import\s+.*\s+from\s+['"][^.].*['"];?/g;
  const matches = code.replace(importReactRegex, "").match(importRegex);

  const imports =
    matches?.reduce((acc, current) => {
      const converted = current.replace(
        /from\s*['"]([^'"]*)['"]/g,
        function (_match, p1) {
          return `from "https://esm.sh/${p1}"`;
        }
      );
      return `${acc}${converted}\n`;
    }, "") || "";

  const withoutImports = outputText.replace(importAllRegex, "");

  return `import React from "https://esm.sh/react";\n${imports}${withoutImports}`;
};
