export const ScreenKind = {
  Base: "base",
  Sm: "sm",
  Md: "md",
  Lg: "lg",
  Xl: "xl",
  Xxl: "xxl",
};
export type ScreenKind = typeof ScreenKind[keyof typeof ScreenKind];

export type BreakPoints = { [key: ScreenKind]: number };

export type Wraps = { [key: ScreenKind]: string };

export class Screen {
  constructor(public readonly kind: ScreenKind) {}

  static fromString(label: ScreenKind): Screen {
    return new Screen(label);
  }

  static fromWidth(width: number, breakpoints: BreakPoints): Screen {
    let kind = ScreenKind.Base;

    for (const value of Object.values(ScreenKind)) {
      if (width > breakpoints[value]) {
        kind = value;
      }
    }

    return new Screen(kind);
  }

  getIndex(): number {
    return Object.values(ScreenKind).indexOf(this.kind);
  }

  getWrap(wraps: Wraps): string {
    return wraps[this.kind];
  }
}

export type GenerateWrapsArgs = { [key: ScreenKind]: string };
