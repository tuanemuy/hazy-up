import React from "react";
import ReactDOM from "react-dom/client";
import {
  Tree,
  Page,
  Section,
  Columns,
  Component,
  Responsive,
  Image,
  ImageAsset,
  Template,
  Theme,
} from "@/document";

import { ChakraProvider } from "@chakra-ui/react";
import { Editor } from "@/editor/components/Editor";

const tree = Tree.generate({
  role: Page.generate({ name: "ホーム", path: "" }),
  children: [
    Tree.generate({
      role: Section.generate({
        padding: new Responsive([[0, 0]]),
        isWrapped: false,
        background: null,
        backgroundImage: null,
        isSemantic: true,
      }),
      children: [
        Tree.generate({
          role: Columns.generate({
            spacing: new Responsive([0]),
            repeat: new Responsive([1]),
            justifyContent: "stretch",
            alignItems: "stretch",
            gap: new Responsive([1]),
            flexWrap: true,
          }),
          children: [
            Tree.generate({
              role: Component.generate({
                template: Template.generate({
                  name: "MainVisual",
                  url: "https://github.com/tuanemuy/hazy-up/blob/main/packages/templates/src/SimpleMainVisual.tsx",
                  thumbnail: Image.generate({
                    src: "http://localhost:5173/images/thumbnail_mv_sample.jpg",
                    assets: [
                      ImageAsset.generate({
                        label: "750w",
                        mimeType: "image/jpeg",
                        path: "images/thumbnail_mv_sample.jpg",
                        url: "http://localhost:5173/images/thumbnail_mv_sample.jpg",
                      }),
                    ],
                  }),
                }),
                props: {
                  title:
                    "Building a Platform in Space to Benefit Life on Earth",
                  subtitle:
                    "Space stations that open the next chapter of human space exploration and development",
                  backgroundImage: Image.generate({
                    src: "https://source.unsplash.com/1600x900/?astronaut",
                  }),
                },
              }),
              children: [],
            }),
          ],
        }),
      ],
    }),
  ]
});

/*
const tree = Tree.generate({
  role: Page.generate({ name: "ホーム", path: "" }),
  children: [
    Tree.generate({
      role: Section.generate({
        padding: new Responsive([[0, 0]]),
        isWrapped: false,
        background: null,
        backgroundImage: null,
        isSemantic: true,
      }),
      children: [
        Tree.generate({
          role: Columns.generate({
            spacing: new Responsive([0]),
            repeat: new Responsive([1]),
            justifyContent: "stretch",
            alignItems: "stretch",
            gap: new Responsive([1]),
            flexWrap: true,
          }),
          children: [
            Tree.generate({
              role: Component.generate({
                template: Template.generate({
                  name: "MainVisual",
                  url: "http://localhost:5173/simple-main-visual.js",
                  thumbnail: Image.generate({
                    src: "http://localhost:5173/images/thumbnail_mv_sample.jpg",
                    assets: [
                      ImageAsset.generate({
                        label: "750w",
                        mimeType: "image/jpeg",
                        path: "images/thumbnail_mv_sample.jpg",
                        url: "http://localhost:5173/images/thumbnail_mv_sample.jpg",
                      }),
                    ],
                  }),
                }),
                props: {
                  title:
                    "Building a Platform in Space to Benefit Life on Earth",
                  subtitle:
                    "Space stations that open the next chapter of human space exploration and development",
                  backgroundImage: Image.generate({
                    src: "https://source.unsplash.com/1600x900/?astronaut",
                  }),
                },
              }),
              children: [],
            }),
          ],
        }),
      ],
    }),
    Tree.generate({
      role: Section.generate({
        padding: new Responsive([[2, 2]]),
        isWrapped: true,
        background: "rgba(0, 0, 0, 0.1)",
        backgroundImage: null,
        isSemantic: true,
      }),
      children: [
        Tree.generate({
          role: Columns.generate({
            spacing: new Responsive([0]),
            repeat: new Responsive([1]),
            justifyContent: "center",
            alignItems: "stretch",
            gap: new Responsive([1]),
            flexWrap: true,
          }),
          children: [
            Tree.generate({
              role: Component.generate({
                template: Template.generate({
                  name: "SectionTitle",
                  url: "./SectionTitleTemplateSample.tsx",
                  thumbnail: Image.generate({
                    src: "http://localhost:5173/images/thumbnail_title_sample.jpg",
                    assets: [
                      ImageAsset.generate({
                        label: "750w",
                        mimeType: "image/jpeg",
                        path: "images/thumbnail_title_sample.jpg",
                        url: "http://localhost:5173/images/thumbnail_title_sample.jpg",
                      }),
                    ],
                  }),
                }),
                props: {
                  title: "Section Title",
                  subtitle: "セクションタイトル",
                },
              }),
              children: [],
            }),
          ],
        }),
        Tree.generate({
          role: Columns.generate({
            spacing: new Responsive([1]),
            justifyContent: "space-between",
            alignItems: "center",
            repeat: new Responsive([1, 1, -1]),
            gap: new Responsive([2]),
            flexWrap: true,
          }),
          children: [
            Tree.generate({
              role: Component.generate({
                template: Template.generate({
                  name: "Sample",
                  url: "./TemplateSample.tsx",
                  thumbnail: Image.generate({
                    src: "http://localhost:5173/images/thumbnail_sample.jpg",
                    assets: [
                      ImageAsset.generate({
                        label: "750w",
                        mimeType: "image/jpeg",
                        path: "images/thumbnail_sample.jpg",
                        url: "http://localhost:5173/images/thumbnail_sample.jpg",
                      }),
                    ],
                  }),
                }),
                props: {
                  name: "リスト1",
                  description: "説明です。",
                },
              }),
              children: [],
            }),
            Tree.generate({
              role: Columns.generate({
                spacing: new Responsive([0]),
                gap: new Responsive([2]),
                repeat: new Responsive([1, 1, -1]),
                flexWrap: true,
                justifyContent: "stretch",
                alignItems: "stretch",
              }),
              children: [
                Tree.generate({
                  role: Component.generate({
                    template: Template.generate({
                      name: "Sample",
                      url: "./TemplateSample.tsx",
                      thumbnail: Image.generate({
                        src: "http://localhost:5173/images/thumbnail_sample.jpg",
                        assets: [
                          ImageAsset.generate({
                            label: "750w",
                            mimeType: "image/jpeg",
                            path: "images/thumbnail_sample.jpg",
                            url: "http://localhost:5173/images/thumbnail_sample.jpg",
                          }),
                        ],
                      }),
                    }),
                    props: {
                      name: "リスト1",
                      description: "説明です。",
                    },
                  }),
                  children: [],
                }),
                Tree.generate({
                  role: Component.generate({
                    template: Template.generate({
                      name: "Sample",
                      url: "./TemplateSample.tsx",
                      thumbnail: Image.generate({
                        src: "http://localhost:5173/images/thumbnail_sample.jpg",
                        assets: [
                          ImageAsset.generate({
                            label: "750w",
                            mimeType: "image/jpeg",
                            path: "images/thumbnail_sample.jpg",
                            url: "http://localhost:5173/images/thumbnail_sample.jpg",
                          }),
                        ],
                      }),
                    }),
                    props: {
                      name: "リスト2",
                      description: "説明です。",
                    },
                  }),
                  children: [],
                }),
                Tree.generate({
                  role: Component.generate({
                    template: Template.generate({
                      name: "Sample",
                      url: "./TemplateSample.tsx",
                      thumbnail: Image.generate({
                        src: "http://localhost:5173/images/thumbnail_sample.jpg",
                        assets: [
                          ImageAsset.generate({
                            label: "750w",
                            mimeType: "image/jpeg",
                            path: "images/thumbnail_sample.jpg",
                            url: "http://localhost:5173/images/thumbnail_sample.jpg",
                          }),
                        ],
                      }),
                    }),
                    props: {
                      name: "リスト3",
                      description: "説明です。",
                    },
                  }),
                  children: [],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    Tree.generate({
      role: Section.generate({
        padding: new Responsive([[2, 2]]),
        isWrapped: true,
        background: "rgba(0, 0, 0, .25)",
        backgroundImage: Image.generate({
          src: "https://source.unsplash.com/1600x900/?astronaut",
        }),
        isSemantic: true,
      }),
      children: [
        Tree.generate({
          role: Columns.generate({
            spacing: new Responsive([0]),
            repeat: new Responsive([0]),
            justifyContent: "center",
            alignItems: "stretch",
            gap: new Responsive([1]),
            flexWrap: true,
          }),
          children: [
            Tree.generate({
              role: Component.generate({
                template: Template.generate({
                  name: "SectionTitle",
                  url: "./SectionTitleTemplatesample.tsx",
                  thumbnail: Image.generate({
                    src: "http://localhost:5173/images/thumbnail_title_sample.jpg",
                    assets: [
                      ImageAsset.generate({
                        label: "750w",
                        mimeType: "image/jpeg",
                        path: "images/thumbnail_title_sample.jpg",
                        url: "http://localhost:5173/images/thumbnail_title_sample.jpg",
                      }),
                    ],
                  }),
                }),
                props: {
                  title: "Section Title",
                  subtitle: "セクションタイトル",
                  reverse: true,
                },
              }),
              children: [],
            }),
          ],
        }),
        Tree.generate({
          role: Columns.generate({
            spacing: new Responsive([1]),
            repeat: new Responsive([1, 1, 2]),
            gap: new Responsive([2]),
            flexWrap: true,
            justifyContent: "start",
            alignItems: "stretch",
          }),
          children: [
            Tree.generate({
              role: Component.generate({
                template: Template.generate({
                  name: "Sample",
                  url: "./TemplateSample.tsx",
                  thumbnail: Image.generate({
                    src: "http://localhost:5173/images/thumbnail_sample.jpg",
                    assets: [
                      ImageAsset.generate({
                        label: "750w",
                        mimeType: "image/jpeg",
                        path: "images/thumbnail_sample.jpg",
                        url: "http://localhost:5173/images/thumbnail_sample.jpg",
                      }),
                    ],
                  }),
                }),
                props: {
                  name: "リスト1",
                  description: "説明です。",
                },
              }),
              children: [],
            }),
            Tree.generate({
              role: Component.generate({
                template: Template.generate({
                  name: "Sample",
                  url: "./TemplateSample.tsx",
                  thumbnail: Image.generate({
                    src: "http://localhost:5173/images/thumbnail_sample.jpg",
                    assets: [
                      ImageAsset.generate({
                        label: "750w",
                        mimeType: "image/jpeg",
                        path: "images/thumbnail_sample.jpg",
                        url: "http://localhost:5173/images/thumbnail_sample.jpg",
                      }),
                    ],
                  }),
                }),
                props: {
                  name: "リスト1",
                  description: "説明です。",
                },
              }),
              children: [],
            }),
            Tree.generate({
              role: Component.generate({
                template: Template.generate({
                  name: "Sample",
                  url: "./TemplateSample.tsx",
                  thumbnail: Image.generate({
                    src: "http://localhost:5173/images/thumbnail_sample.jpg",
                    assets: [
                      ImageAsset.generate({
                        label: "750w",
                        mimeType: "image/jpeg",
                        path: "images/thumbnail_sample.jpg",
                        url: "http://localhost:5173/images/thumbnail_sample.jpg",
                      }),
                    ],
                  }),
                }),
                props: {
                  name: "リスト3",
                  description: "説明です。",
                },
              }),
              children: [],
            }),
          ],
        }),
      ],
    }),
    Tree.generate({
      role: Section.generate({
        padding: new Responsive([[2, 2]]),
        isWrapped: true,
        background: null,
        backgroundImage: null,
        isSemantic: true,
      }),
      children: [
        Tree.generate({
          role: Columns.generateDefault(),
          children: [],
        }),
      ],
    }),
  ],
});
*/

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider resetCSS={true}>
      <Editor
        initialNodeMap={tree.toNodeMap("root")}
        rootId={"root"}
        theme={Theme.generateDefault()}
      />
    </ChakraProvider>
  </React.StrictMode>
);
