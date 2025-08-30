"use client"

import { Button, ThemeProvider, createTheme } from "smarthr-ui"

const theme = createTheme()

export default function UICodingPage() {
  return (
    <ThemeProvider theme={theme}>
      <div className="p-6">
        <Button>Button</Button>
      </div>
    </ThemeProvider>
  )
}

