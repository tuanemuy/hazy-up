import { useState, useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
import {
  Node,
  Section,
  Image,
  BackgroundColor,
  hexToRgba,
  rgbaToHexOpacity,
} from "@/document";
import { Theme } from "@/theme";
import { useThemeContext, useScreenStateContext } from "@/document/contexts";
import { useEditorStateContext } from "@/editor/contexts";

import {
  Flex,
  Text,
  Button,
  InputGroup,
  Input,
  InputRightAddon,
  Switch,
} from "@chakra-ui/react";
import { SelectImageDrawer } from "./SelectImageDrawer";

type Props = {
  node: Node;
};

export function SectionConfig({ node }: Props) {
  const { colorPalette } = useThemeContext();
  const { screen } = useScreenStateContext();
  const { updateNode, updateNodeTemporarily, setDraftNodeMap } =
    useEditorStateContext();
  const selectImageDisclousure = useDisclosure();

  const attrs = node.role.attributes;
  const initialPadding = attrs.padding.getValueOfScreen(screen);
  const [topPadding, setTopPadding] = useState(initialPadding[0]);
  const [bottomPadding, setBottomPadding] = useState(initialPadding[1]);
  const [isWrapped, setIsWrapped] = useState(attrs.isWrapped);
  const [background, setBackground] = useState<BackgroundColor | null>(
    attrs.background ? rgbaToHexOpacity(attrs.background) : null
  );
  const [backgroundImage, setBackgroundImage] = useState(attrs.backgroundImage);
  const [isSemantic, setIsSemantic] = useState(attrs.isSemantic);

  const onFocus = (image: Image) => {
    updateNodeTemporarily(
      node.id,
      Node.generate({
        ...node,
        role: Section.generate({
          padding: attrs.padding.replaceValueOfScreen(screen, [
            topPadding,
            bottomPadding,
          ]),
          isWrapped,
          background: background
            ? hexToRgba(background.hex, background.opacity)
            : null,
          backgroundImage: image,
          isSemantic,
        }),
      })
    );
  };
  const onCloseSelectImage = () => {
    setDraftNodeMap(null);
    selectImageDisclousure.onClose();
  };
  const onSubmitSelectImage = (image: Image) => {
    setBackgroundImage(image);
    selectImageDisclousure.onClose();
  };

  useEffect(() => {
    const initialPadding = attrs.padding.getValueOfScreen(screen);

    setTopPadding(initialPadding[0]);
    setBottomPadding(initialPadding[1]);
  }, [screen]);

  useEffect(() => {
    updateNode(
      node.id,
      Node.generate({
        ...node,
        role: Section.generate({
          padding: attrs.padding.replaceValueOfScreen(screen, [
            topPadding,
            bottomPadding,
          ]),
          isWrapped,
          background: background
            ? hexToRgba(background.hex, background.opacity)
            : null,
          backgroundImage,
          isSemantic,
        }),
      })
    );
  }, [
    topPadding,
    bottomPadding,
    isWrapped,
    background,
    backgroundImage,
    isSemantic,
  ]);

  return (
    <Flex alignItems="center" gap={`${Theme.sizes.grid}px`}>
      <Flex flexDirection="column" alignItems="center">
        <Switch
          isChecked={isWrapped}
          onChange={(e) => setIsWrapped(e.target.checked)}
        />
        <Text fontSize=".5rem">Wrapped</Text>
      </Flex>

      <Flex flexDirection="column" alignItems="center">
        <Switch
          isChecked={isSemantic}
          onChange={(e) => setIsSemantic(e.target.checked)}
        />
        <Text fontSize=".5rem">Semantic</Text>
      </Flex>

      <Flex
        flexDirection="column"
        alignItems="center"
        width={`${Theme.sizes.grid * 6}px`}
      >
        <InputGroup size="sm">
          <Input
            type="number"
            min="0"
            value={topPadding}
            onChange={(e) => setTopPadding(parseFloat(e.target.value))}
          />
          <InputRightAddon children="box" />
        </InputGroup>
        <Text fontSize=".5rem">Top padding</Text>
      </Flex>

      <Flex
        flexDirection="column"
        alignItems="center"
        width={`${Theme.sizes.grid * 6}px`}
      >
        <InputGroup size="sm">
          <Input
            type="number"
            min="0"
            value={bottomPadding}
            onChange={(e) => setBottomPadding(parseFloat(e.target.value))}
          />
          <InputRightAddon children="box" />
        </InputGroup>
        <Text fontSize=".5rem">Bottom padding</Text>
      </Flex>

      <Flex flexDirection="column" alignItems="center">
        <Flex alignItems="center" gap={`${Theme.sizes.grid * 0.5}px`}>
          <Switch
            isChecked={background !== null}
            onChange={(e) =>
              setBackground(
                e.target.checked
                  ? {
                      hex: colorPalette.theme,
                      opacity: 1,
                    }
                  : null
              )
            }
          />
          <Input
            type="color"
            value={background?.hex || "#ffffff"}
            onChange={(e) =>
              setBackground((v) => {
                return v !== null
                  ? {
                      hex: e.target.value,
                      opacity: v.opacity,
                    }
                  : null;
              })
            }
            disabled={background === null}
            width={`${Theme.sizes.grid * 4}px`}
            size="sm"
            list="user-color"
          />
          <datalist id="user-color">
            <option>{colorPalette.theme}</option>
            <option>{colorPalette.accent}</option>
            <option>{colorPalette.background}</option>
            <option>{colorPalette.black}</option>
            <option>{colorPalette.white}</option>
          </datalist>

          <Input
            type="number"
            min="0"
            max="1"
            step="0.1"
            value={background ? background.opacity : "1"}
            onChange={(e) =>
              setBackground((v) => {
                return v !== null
                  ? {
                      hex: v.hex,
                      opacity: parseFloat(e.target.value),
                    }
                  : null;
              })
            }
            disabled={background === null}
            width={`${Theme.sizes.grid * 4}px`}
            size="sm"
          />
        </Flex>
        <Text fontSize=".5rem">Backgroud color</Text>
      </Flex>

      <Flex
        flexDirection="column"
        alignItems="center"
        width={`${Theme.sizes.grid * 8}px`}
      >
        <Button onClick={selectImageDisclousure.onOpen} size="sm">
          Select image
        </Button>
        <Text fontSize=".5rem">Background image</Text>
      </Flex>

      <SelectImageDrawer
        isOpen={selectImageDisclousure.isOpen}
        onClose={onCloseSelectImage}
        onFocus={onFocus}
        onSubmit={onSubmitSelectImage}
      />
    </Flex>
  );
}
