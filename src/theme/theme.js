import { theme } from "@chakra-ui/core"

export default {
  ...theme,
  colors: {
    ...theme.colors,
    text: "#2D3748",
    primary: theme.colors.orange['600'],
    muted: "#999",
    headings: theme.colors.orange['600'],
    links: theme.colors.orange['600'],
    navLink: "#ffffff",
    headerBg: "#2D3748",
    buttonBg: theme.colors.orange['600'],
    buttonHover: theme.colors.orange['500']
  },
  fonts: {
    body: "Helvetica, sans-serif",
    heading: "Ubuntu, sans-serif",
    mono: "Menlo, monospace",
  },
}