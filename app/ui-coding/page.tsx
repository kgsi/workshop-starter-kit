"use client";

import { Button, ThemeProvider, createTheme, IntlProvider } from "smarthr-ui";

const theme = createTheme();

export default function UICodingPage() {
  return (
    <IntlProvider locale="ja">
      <ThemeProvider theme={theme}>
        <Button>Button</Button>
      </ThemeProvider>
    </IntlProvider>
  );
}
