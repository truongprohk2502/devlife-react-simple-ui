import type { Preview } from "@storybook/react";
import "../lib/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
    },
    actions: { argTypesRegex: "^on.*" },
  },
};

export default preview;
