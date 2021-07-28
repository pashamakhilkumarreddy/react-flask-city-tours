import { ThemeProvider } from 'theme-ui';
import theme from '@rebass/preset';
import PropTypes from 'prop-types';

export default function TP({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

TP.propTypes = {
  children: PropTypes.node,
};
