import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  colors: {
    dark: "#1a1a1a",
    middlegrey: "#888888",
    lightgrey: "#88888825",
    bright: "#f1f1f1",
  },
  spacing: {
    layout: {
      desktop: 12,
      mobile: 8,
    },
    padding: {
      desktop: 4,
      mobile: 3,
    },
    spacer: {
      desktop: 20,
      mobile: 10,
    },
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
