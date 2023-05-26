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
  Template,
  Theme,
} from "@hazy-up/core/document";

import { ChakraProvider } from "@chakra-ui/react";
import {
  ThemeProvider,
  ScreenStateContextProvider,
  Viewer,
} from "@hazy-up/core/document";

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
                  url: process.env.SIMPLE_MAIN_VISUAL_URL || "",
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
        background: null,
        backgroundImage: null,
        isSemantic: true,
      }),
      children: [
        Tree.generate({
          role: Columns.generate({
            spacing: new Responsive([0]),
            repeat: new Responsive([-1]),
            justifyContent: "center",
            alignItems: "center",
            gap: new Responsive([0]),
            flexWrap: true,
          }),
          children: [
            Tree.generate({
              role: Component.generate({
                template: Template.generate({
                  name: "SectionTitle",
                  url: process.env.SIMPLE_SECTION_TITLE_URL || "",
                }),
                props: {
                  title: "SectionTitle",
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
            repeat: new Responsive([3]),
            justifyContent: "center",
            alignItems: "stretch",
            gap: new Responsive([2]),
            flexWrap: true,
          }),
          children: [
            Tree.generate({
              role: Component.generate({
                template: Template.generate({
                  name: "SimplePanel",
                  url: process.env.SIMPLE_PANEL_URL || "",
                }),
                props: {
                  name: "シンプルなパネル",
                  description:
                    "これはシンプルなパネル型のコンポーネントです。これはシンプルなパネル型のコンポーネントです。これはシンプルなパネル型のコンポーネントです。",
                },
              }),
              children: [],
            }),
            Tree.generate({
              role: Component.generate({
                template: Template.generate({
                  name: "SimplePanel",
                  url: process.env.SIMPLE_PANEL_URL || "",
                }),
                props: {
                  name: "シンプルなパネル",
                  description:
                    "これはシンプルなパネル型のコンポーネントです。これはシンプルなパネル型のコンポーネントです。これはシンプルなパネル型のコンポーネントです。",
                },
              }),
              children: [],
            }),
            Tree.generate({
              role: Component.generate({
                template: Template.generate({
                  name: "SimplePanel",
                  url: process.env.SIMPLE_PANEL_URL || "",
                }),
                props: {
                  name: "シンプルなパネル",
                  description: "これはシンプルなパネル型のコンポーネントです。",
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
        padding: new Responsive([[1, 1]]),
        isWrapped: false,
        background: "#000000",
        backgroundImage: null,
        isSemantic: true,
      }),
      children: [],
    }),
  ],
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider resetCSS={true}>
      <ThemeProvider theme={Theme.generateDefault()}>
        <ScreenStateContextProvider>
          <Viewer nodeMap={tree.toNodeMap("root")} id={"root"} />
        </ScreenStateContextProvider>
      </ThemeProvider>
    </ChakraProvider>
  </React.StrictMode>
);
