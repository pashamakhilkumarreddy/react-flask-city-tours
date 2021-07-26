import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import Auth from "../Auth";

const ProtectedRoute = ({ component, render, ...props }) => {
  const Component = component || render;
  return (
    <Auth
      render={({ isLoggedIn }) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.any,
  render: PropTypes.any,
  props: PropTypes.any,
};

export default ProtectedRoute;
