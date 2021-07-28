import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Auth = ({ render }) => {
  const auth = useSelector((state) => state.auth);
  return <>{render(auth)}</>;
};

Auth.propTypes = {
  render: PropTypes.func.isRequired,
};

export default Auth;
