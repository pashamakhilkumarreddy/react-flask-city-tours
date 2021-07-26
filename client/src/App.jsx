import { Box } from "rebass";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./routes";
import ThemeProvider from "./context/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <Box as="main" p={4}>
        <Routes />
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
