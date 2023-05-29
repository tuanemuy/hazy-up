import { useState, useEffect } from "react";
import { Node, Component, Template, Image } from "@/document";
import { Theme } from "@/theme";
import { useEditorStateContext } from "@/editor/contexts";

import {
  Flex,
  Stack,
  Box,
  Text,
  Image as Img,
  Button,
  FormLabel,
  InputGroup,
  Input,
  InputRightElement,
  Textarea,
  Switch,
  IconButton,
  Drawer,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";
import { EditIcon, SearchIcon } from "@chakra-ui/icons";
import { SelectTemplateModal } from "./SelectTemplateModal";
import { SelectImageDrawer } from "./SelectImageDrawer";

type Props = {
  node: Node;
};

export function ComponentConfig({ node }: Props) {
  const { updateNode, updateNodeTemporarily, setDraftNodeMap } =
    useEditorStateContext();

  const settingsDisclousure = useDisclosure();
  const selectTemplateDisclousure = useDisclosure();
  const selectImageDisclousure = useDisclosure();

  const attrs = node.role.attributes;
  const [template, setTemplate] = useState(attrs.template);
  const [props, setProps] = useState(attrs.props);
  const [propsDef, setPropsDef] = useState<
    | {
        type: string;
        key: string;
        name: string;
      }[]
    | null
  >(null);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setProps(attrs.props);
  }, [attrs.props]);

  const onEdited = (key: string, value: string | boolean | Image) => {
    const newProps = { ...props };
    newProps[key] = value;
    setProps(newProps);
    updateNodeTemporarily(
      node.id,
      Node.generate({
        ...node,
        role: Component.generate({
          template,
          props: newProps,
        }),
      })
    );

    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }

    const id = setTimeout(() => {
      updateNode(
        node.id,
        Node.generate({
          ...node,
          role: Component.generate({
            template,
            props: newProps,
          }),
        })
      );
      setDraftNodeMap(null);

      if (timeoutId) {
        clearTimeout(timeoutId);
        setTimeoutId(null);
      }
    }, 3000);
    setTimeoutId(id);
  };

  const onCloseDrawer = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
      updateNode(
        node.id,
        Node.generate({
          ...node,
          role: Component.generate({
            template,
            props,
          }),
        })
      );
    }
    setDraftNodeMap(null);
    settingsDisclousure.onClose();
  };

  const onFocus = (key: string, value: Image) => {
    const newProps = { ...props };
    newProps[key] = value;
    updateNodeTemporarily(
      node.id,
      Node.generate({
        ...node,
        role: Component.generate({
          template,
          props: newProps,
        }),
      })
    );
  };

  const closeSelectTemplate = () => {
    setDraftNodeMap(null);
    selectTemplateDisclousure.onClose();
  };

  const closeSelectImage = () => {
    setDraftNodeMap(null);
    selectImageDisclousure.onClose();
  };

  const onSubmit = (key: string, value: string | boolean | Image) => {
    const newProps = { ...props };
    newProps[key] = value;
    setProps(newProps);
    updateNode(
      node.id,
      Node.generate({
        ...node,
        role: Component.generate({
          template,
          props: newProps,
        }),
      })
    );

    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  };

  const onSubmitTemplate = (template: Template) => {
    setTemplate(template);
    updateNode(
      node.id,
      Node.generate({
        ...node,
        role: Component.generate({
          template,
          props,
        }),
      })
    );
  };

  useEffect(() => {
    (async () => {
      try {
        const mod = await template.transpile();
        setPropsDef(mod.props || null);
      } catch (e) {
        setPropsDef(null);
      }
    })();
  }, [attrs.template]);

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <>
      <Flex alignItems="center" gap={`${Theme.sizes.grid}px`}>
        <Flex
          flexDirection="column"
          alignItems="center"
          width={`${Theme.sizes.grid * 10}px`}
        >
          <InputGroup size="sm">
            <Input type="text" value={template.name} readOnly />
            <InputRightElement>
              <IconButton
                aria-label="Select Template"
                onClick={selectTemplateDisclousure.onOpen}
                icon={<SearchIcon />}
                size="sm"
              />
            </InputRightElement>
            <SelectTemplateModal
              isOpen={selectTemplateDisclousure.isOpen}
              onClose={() => closeSelectTemplate()}
              onSubmit={(template) => {
                onSubmitTemplate(template);
                closeSelectTemplate();
              }}
            />
          </InputGroup>
          <Text fontSize=".5rem">Template</Text>
        </Flex>

        {propsDef && (
          <Flex flexDirection="column" alignItems="center">
            <IconButton
              aria-label="Open component settings"
              icon={<EditIcon />}
              variant="outline"
              onClick={settingsDisclousure.onOpen}
            />
          </Flex>
        )}
      </Flex>

      <Drawer
        isOpen={settingsDisclousure.isOpen}
        placement="right"
        onClose={onCloseDrawer}
        blockScrollOnMount={false}
      >
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader borderBottomWidth="1px">
            Component Settings
          </DrawerHeader>

          <DrawerBody>
            <Stack
              spacing={`${Theme.sizes.grid * 1}px`}
              padding={`${Theme.sizes.grid * 1}px 0px`}
            >
              {propsDef &&
                propsDef.map((p) => {
                  const value = props[p.key];
                  return (
                    <Box key={p.key}>
                      <FormLabel htmlFor={p.key}>
                        <Text as="b">{p.name}</Text>
                      </FormLabel>
                      {p.type === "text" &&
                        (typeof value === "string" || value === undefined) && (
                          <Input
                            id={p.key}
                            type="text"
                            value={value}
                            onChange={(e) => onEdited(p.key, e.target.value)}
                          />
                        )}

                      {p.type === "textarea" &&
                        (typeof value === "string" || value === undefined) && (
                          <Textarea
                            id={p.key}
                            value={value}
                            onChange={(e) => onEdited(p.key, e.target.value)}
                          />
                        )}

                      {p.type === "boolean" &&
                        (typeof value === "boolean" || value === undefined) && (
                          <Switch
                            id={p.key}
                            isChecked={value}
                            onChange={(e) => onEdited(p.key, e.target.checked)}
                          />
                        )}

                      {p.type === "image" &&
                        (value instanceof Image || value === undefined) && (
                          <>
                            <Stack spacing={`${Theme.sizes.grid * 0.5}px`}>
                              <Img
                                width="100%"
                                height="auto"
                                src={value.src}
                                alt=""
                                borderRadius={`${Theme.sizes.grid * 0.5}px`}
                              />

                              <Button
                                width="100%"
                                onClick={selectImageDisclousure.onOpen}
                              >
                                Select image
                              </Button>
                            </Stack>

                            <SelectImageDrawer
                              isOpen={selectImageDisclousure.isOpen}
                              onClose={() => closeSelectImage()}
                              onFocus={(image) => {
                                onFocus(p.key, image);
                              }}
                              onSubmit={(image) => {
                                onSubmit(p.key, image);
                                closeSelectImage();
                              }}
                            />
                          </>
                        )}
                    </Box>
                  );
                })}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
