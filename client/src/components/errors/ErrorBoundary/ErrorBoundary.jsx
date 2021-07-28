import { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  // static defaultProps = {
  //   fallback: 'Something went wrong',
  // };

  static getDerivedStateFromError(err) {
    console.error(err);
    return {
      hasError: true,
    };
  }

  componentDidCatch(err, errInfo) {
    console.error(err, errInfo);
  }

  render() {
    const { hasError } = this.state;
    const { fallback, children } = this.props;
    if (hasError) {
      return <Error msg={fallback} />;
    }
    return children;
  }
}

const Error = ({ msg }) => {
  return <div>{msg}</div>;
};

Error.propTypes = {
  msg: PropTypes.string.isRequired,
};

ErrorBoundary.propTypes = {
  fallback: PropTypes.string,
  children: PropTypes.any,
};

ErrorBoundary.defaultProps = {
  fallback: 'Something went wrong',
};

export default ErrorBoundary;
