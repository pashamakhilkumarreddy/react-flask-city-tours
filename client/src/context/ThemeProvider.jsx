import { ThemeProvider } from "theme-ui";
import theme from "@rebass/preset";

export default ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
