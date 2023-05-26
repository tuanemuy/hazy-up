export type GenerateImageArgs = {
  src: string;
  assets?: ImageAsset[];
};

export class Image {
  constructor(
    public readonly src: string,
    public readonly assets: ImageAsset[]
  ) {}

  static generate({ src, assets }: GenerateImageArgs): Image {
    return new Image(src, assets || []);
  }

  getSrcset(): string {
    let srcset = "";

    for (const asset of this.assets) {
      srcset += `${asset.url} ${asset.label},`;
    }

    return srcset;
  }
}

export type GenerateImageAssetArgs = {
  label: string;
  mimeType: string;
  path: string;
  url: string;
};

export class ImageAsset {
  constructor(
    public readonly label: string,
    public readonly mimeType: string,
    public readonly path: string,
    public readonly url: string
  ) {}

  static generate({
    label,
    mimeType,
    path,
    url,
  }: GenerateImageAssetArgs): ImageAsset {
    return new ImageAsset(label, mimeType, path, url);
  }
}
