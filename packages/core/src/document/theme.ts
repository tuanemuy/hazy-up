import { BreakPoints, Wraps } from "./screen";

export type GenerateThemeArgs = {
  sizes: Sizes;
  colorPalette: ColorPalette;
  breakPoints: BreakPoints;
  wraps: Wraps;
};

export class Theme {
  constructor(
    public readonly sizes: Sizes,
    public readonly colorPalette: ColorPalette,
    public readonly breakPoints: BreakPoints,
    public readonly wraps: Wraps
  ) {}

  static generate({
    sizes,
    colorPalette,
    breakPoints,
    wraps,
  }: GenerateThemeArgs): Theme {
    return new Theme(sizes, colorPalette, breakPoints, wraps);
  }

  static generateDefault(): Theme {
    return Theme.generate({
      sizes: {
        grid: 16,
        box: 64,
      },
      colorPalette: {
        theme: "#305973",
        accent: "#ef7e56",
        background: "#ded5c4",
        black: "#212121",
        white: "#f9f9f9",
      },
      breakPoints: {
        base: 0,
        sm: 480,
        md: 768,
        lg: 992,
        xl: 1280,
        xxl: 1536,
      },
      wraps: {
        base: "94%",
        sm: "470px",
        md: "758px",
        lg: "972px",
        xl: "1240px",
        xxl: "1356px",
      },
    });
  }
}

export type GenerateSizesArgs = {
  grid: number;
  box: number;
};

export class Sizes {
  constructor(public readonly grid: number, public readonly box: number) {}

  static generate({ grid, box }: GenerateSizesArgs): Sizes {
    return new Sizes(grid, box);
  }
}

export type GenerateColorPaletteArgs = {
  theme: string;
  accent: string;
  black: string;
  white: string;
  background: string;
};

export class ColorPalette {
  constructor(
    public readonly theme: string,
    public readonly accent: string,
    public readonly black: string,
    public readonly white: string,
    public readonly background: string
  ) {}

  static generate({
    theme,
    accent,
    black,
    white,
    background,
  }: GenerateColorPaletteArgs): ColorPalette {
    return new ColorPalette(theme, accent, black, white, background);
  }
}
