import { Component } from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static defaultProps = {
    fallback: "Something went wrong",
  };

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
    if (this.state.hasError) {
      return <Error msg={this.props.fallback} />;
    } else {
      return this.props.children;
    }
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
};

export default ErrorBoundary;
