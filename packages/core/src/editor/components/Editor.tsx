import { Global, css } from "@emotion/react";
import { NodeID, NodeMap, Theme } from "@/document";
import { Theme as HazyUpTheme } from "@/theme";

import { Center, IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { ThemeProvider, ScreenStateContextProvider } from "@/document/contexts";
import { EditableViewer, Toolbar, ZoomableFrame } from "@/editor/components";
import {
  EditorStateContextProvider,
  useEditorStateContext,
} from "@/editor/contexts";

type Props = {
  initialNodeMap: NodeMap;
  rootId: NodeID;
  theme: Theme;
};

export function Editor({ initialNodeMap, rootId, theme }: Props) {
  return (
    <EditorStateContextProvider
      initialNodeMap={initialNodeMap}
      rootId={rootId}
      onUpdate={() => {}}
    >
      <ThemeProvider theme={theme}>
        <ScreenStateContextProvider>
          <Global
            styles={css`
              input[type="color"] {
                appearance: auto !important;
                padding: 0 !important;
              }
            `}
          />

          <Toolbar />

          <InnerEditor rootId={rootId} />
        </ScreenStateContextProvider>
      </ThemeProvider>
    </EditorStateContextProvider>
  );
}

type InnerEditorProps = {
  rootId: NodeID;
};

function InnerEditor({ rootId }: InnerEditorProps) {
  const { focus, addSection } = useEditorStateContext();

  return (
    <ZoomableFrame onBlankClicked={() => focus(rootId)}>
      <EditableViewer id={rootId} />

      <Center paddingY={`${HazyUpTheme.sizes.grid * 2}px`}>
        <IconButton
          aria-label="Add row"
          icon={<AddIcon />}
          onClick={(e) => {
            addSection();
            e.stopPropagation();
          }}
        />
      </Center>
    </ZoomableFrame>
  );
}
