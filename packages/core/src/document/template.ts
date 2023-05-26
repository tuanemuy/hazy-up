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
