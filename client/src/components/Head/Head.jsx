import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const Head = ({ title }) => {
  return (
    <Helmet>
      <title>{`React Flask City Tours Application | ${title}`}</title>
    </Helmet>
  );
};

Head.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Head;
