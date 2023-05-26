import { Role } from "./node";
import { Responsive, Padding } from "./attribute";
import { Image } from "./media";
import { Template } from "./template";

export type PageAttributes = {
  name: string;
  path: string;
};

export class Page implements Role {
  constructor(public readonly attributes: PageAttributes) {}

  static generate(attributes: PageAttributes) {
    return new Page(attributes);
  }
}

export type SectionAttributes = {
  padding: Responsive<Padding>;
  isWrapped: boolean;
  background: string | null;
  backgroundImage: Image | null;
  isSemantic: boolean;
};

export class Section implements Role {
  constructor(public readonly attributes: SectionAttributes) {}

  static generate(attributes: SectionAttributes): Section {
    return new Section(attributes);
  }

  static generateDefault(): Section {
    return Section.generate({
      padding: new Responsive([[1, 1]]),
      isWrapped: true,
      background: null,
      backgroundImage: null,
      isSemantic: true,
    });
  }
}

export type ColumnsAttributes = {
  spacing: Responsive<number>;
  justifyContent: "stretch" | "start" | "center" | "end" | "space-between";
  alignItems: "stretch" | "start" | "center" | "end";
  repeat: Responsive<number>;
  gap: Responsive<number>;
  flexWrap: boolean;
};

export class Columns implements Role {
  constructor(public readonly attributes: ColumnsAttributes) {}

  static generate(attributes: ColumnsAttributes): Columns {
    return new Columns(attributes);
  }

  static generateDefault(): Columns {
    return Columns.generate({
      spacing: new Responsive([1]),
      justifyContent: "stretch",
      alignItems: "stretch",
      repeat: new Responsive([-1]),
      gap: new Responsive([1]),
      flexWrap: true,
    });
  }
}

export type ComponentAttributes = {
  template: Template;
  props: { [key: string]: string | boolean | Image };
};

export class Component {
  constructor(public readonly attributes: ComponentAttributes) {}

  static generate(attributes: ComponentAttributes): Component {
    return new Component(attributes);
  }
}
