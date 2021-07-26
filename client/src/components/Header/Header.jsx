import { Flex, Text, Box, Link } from "rebass";
import { createUseStyles } from "react-jss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = createUseStyles({
  header: {
    borderBottom: `1px solid #fdfdfd`,
    boxShadow: '0 0 4px 4px rgba(0, 0, 0, 0.1)',
    '&& a': {
      textDecoration: 'none'
    }
  },
});

const Header = () => {
  const styles = useStyles();
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <Flex
      p={3}
      px={2}
      color="#fff"
      backgroundColor="#fff"
      alignItems="center"
      as="header"
      className={styles.header}
    >
      <Link href="/" variant="nav">
        <Text p={2} fontWeight="700">
          Home
        </Text>
      </Link>

      <Box mx="auto" />
      {!isLoggedIn ? (
        <>
          <Link variant="nav" href="/login" px={3}>
            Login
          </Link>
          <Link variant="nav" href="/register">
            Register
          </Link>
        </>
      ) : (
        <NavLink to="/login" px={3}>
          Logout
        </NavLink>
      )}
    </Flex>
  );
};

export default Header;
