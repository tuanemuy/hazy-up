import { useState } from "react";
import { Image, ImageAsset, Template, TemplateCollection } from "@/document";
import { Theme } from "@/theme";

import {
  Flex,
  Box,
  Image as Img,
  Button,
  Modal,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalOverlay,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

const templateCollections = [
  TemplateCollection.generate({
    slug: "Category 1",
    name: "カテゴリー1",
    templates: [
      Template.generate({
        name: "MainVisual",
        url: "http://localhost:5173/SimpleMainVisual/Template.tsx",
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
      Template.generate({
        name: "SectionTitle",
        url: "http://localhost:5173/SimpleSectionTitle/Template.tsx",
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
      Template.generate({
        name: "Sample",
        url: "http://localhost:5173/SimplePanel/Template.tsx",
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
      Template.generate({
        name: "MainVisual",
        url: "http://localhost:5173/templates/MainVisualTemplateSample.tsx",
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
      Template.generate({
        name: "MainVisual",
        url: "http://localhost:5173/templates/MainVisualTemplateSample.tsx",
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
      Template.generate({
        name: "MainVisual",
        url: "http://localhost:5173/templates/MainVisualTemplateSample.tsx",
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
      Template.generate({
        name: "MainVisual",
        url: "http://localhost:5173/templates/MainVisualTemplateSample.tsx",
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
    ],
  }),
  TemplateCollection.generate({
    slug: "Category 2",
    name: "カテゴリー2",
    templates: [
      Template.generate({
        name: "MainVisual",
        url: "http://localhost:5173/templates/MainVisualTemplateSample.tsx",
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
      Template.generate({
        name: "SectionTitle",
        url: "http://localhost:5173/templates/SectionTitleTemplateSample.tsx",
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
      Template.generate({
        name: "Sample",
        url: "http://localhost:5173/templates/TemplateSample.tsx",
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
      Template.generate({
        name: "MainVisual",
        url: "http://localhost:5173/templates/MainVisualTemplateSample.tsx",
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
      Template.generate({
        name: "MainVisual",
        url: "http://localhost:5173/templates/MainVisualTemplateSample.tsx",
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
      Template.generate({
        name: "MainVisual",
        url: "http://localhost:5173/templates/MainVisualTemplateSample.tsx",
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
      Template.generate({
        name: "MainVisual",
        url: "http://localhost:5173/templates/MainVisualTemplateSample.tsx",
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
    ],
  }),
];

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (template: Template, defaultProps: { [key: string]: any }) => void;
};

export function SelectTemplateModal({ isOpen, onClose, onSubmit }: Props) {
  const [focused, setFocused] = useState<[number, number] | null>(null);

  const close = () => {
    setFocused(null);
    onClose();
  };

  const submit = async () => {
    if (!focused) {
      close();
      return;
    }

    setFocused(null);

    try {
      const template = templateCollections[focused[0]].templates[focused[1]];
      const { defaultProps } = await template.transpile();
      onSubmit(
        templateCollections[focused[0]].templates[focused[1]],
        defaultProps
      );
    } catch {}
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={close}
      isCentered
      size="6xl"
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent width="90vw">
        <ModalCloseButton />
        <ModalHeader borderBottomWidth="1px">Select Template</ModalHeader>
        <ModalBody
          padding={`${Theme.sizes.grid * 0.5}px ${Theme.sizes.grid * 0.5}px`}
        >
          <Tabs>
            <TabList>
              {templateCollections.map(
                (category: TemplateCollection, i: number) => {
                  return <Tab key={i.toString()}>{category.name}</Tab>;
                }
              )}
            </TabList>

            <TabPanels>
              {templateCollections.map(
                (category: TemplateCollection, i: number) => {
                  return (
                    <TabPanel key={i.toString()}>
                      <Flex
                        position="relative"
                        flexWrap="wrap"
                        margin={`${-1 * Theme.sizes.grid * 0.25}px`}
                      >
                        {category.templates.map(
                          (template: Template, j: number) => {
                            const thumbnail =
                              template.getThumbnailUrl("750w") || "";

                            return (
                              <Box
                                key={`${i}${j}`}
                                position="relative"
                                width="25%"
                                padding={`${Theme.sizes.grid * 0.5}px`}
                                onClick={() => {
                                  setFocused([i, j]);
                                }}
                              >
                                <Box position="relative" width="100%">
                                  <Img
                                    position="absolute"
                                    top="0"
                                    left="0"
                                    width="100%"
                                    height="100%"
                                    objectFit="cover"
                                    src={thumbnail}
                                    alt=""
                                  />

                                  <Box
                                    position="relative"
                                    zIndex="1"
                                    width="100%"
                                    paddingTop="100%"
                                    border={
                                      JSON.stringify(focused) ===
                                      JSON.stringify([i, j])
                                        ? `3px solid ${Theme.colorPalette.accent}`
                                        : "3px solid transparent"
                                    }
                                  />
                                </Box>
                              </Box>
                            );
                          }
                        )}
                      </Flex>
                    </TabPanel>
                  );
                }
              )}
            </TabPanels>
          </Tabs>
        </ModalBody>

        <ModalFooter borderTopWidth="1px">
          <Button variant="outline" mr={3} onClick={close}>
            Cancel
          </Button>

          <Button
            color={Theme.colorPalette.white}
            backgroundColor={Theme.colorPalette.theme}
            onClick={submit}
          >
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
