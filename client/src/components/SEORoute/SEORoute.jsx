import PropTypes from 'prop-types';
import Head from '../Head';

const SEORoute = ({ component: Component, title, ...props }) => (
  <>
    <Head title={title} />
    <Component {...props} />
  </>
);

SEORoute.propTypes = {
  component: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
};

export default SEORoute;
