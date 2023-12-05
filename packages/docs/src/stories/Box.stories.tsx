import type { Meta, StoryObj } from "@storybook/react";
import { type BoxProps, Box, Text } from "@matheusgrigoletto-ignite-ui/react";

export default {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children: (
      <>
        <Text>Testando o elemento Box</Text>,
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
