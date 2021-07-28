import { Flex, Text } from 'rebass';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  footer: {
    position: 'absolute',
    width: '100vw',
    bottom: '-6rem',
    borderTop: '1px solid #ddd',
  },
});

const Footer = () => {
  const styles = useStyles();
  return (
    <Flex
      p={2}
      color="#000"
      backgroundColor="#fdfdfd"
      alignItems="center"
      justifyContent="center"
      as="footer"
      className={styles.footer}
    >
      <Text p={3} fontWeight="700" fontSize="2rem">
        &copy; 2021 React Flask City Tours Application
      </Text>
    </Flex>
  );
};

export default Footer;
