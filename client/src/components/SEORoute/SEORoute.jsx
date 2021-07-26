import Head from "../Head";
import PropTypes from "prop-types";

const SEORoute = ({ component: Component, title, ...props }) => {
  return (
    <>
      <Head title={title} />
      <Component {...props} />
    </>
  );
};

SEORoute.propTypes = {
  component: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  props: PropTypes.any,
};

export default SEORoute;
