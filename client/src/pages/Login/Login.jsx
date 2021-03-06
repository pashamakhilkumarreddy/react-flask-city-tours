import { Box, Button, Text } from 'theme-ui';
import { Label, Input } from '@rebass/forms';
import { useReducer } from 'react';
import { loginUser } from '../../store/actions/authActions';
import { authReducer } from '../../utils/helpers';

const initialState = {
  email: '',
  password: '',
};

const Login = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const handleOnChange = (e) => {
    try {
      const { name, value } = e.target;
      const type = name.toUpperCase();
      dispatch({ type, payload: value });
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogin = (e) => {
    try {
      e.preventDefault();
      const { email, password } = state;
      loginUser({ email, password });
    } catch (err) {
      console.error(err);
    }
  };
  const { email, password } = state;
  return (
    <Box as="form">
      <Text
        sx={{
          fontSize: 4,
          fontWeight: 'bold',
        }}
      >
        Login
      </Text>
      <Box>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Please enter an email"
          defaultValue={email}
          onChange={handleOnChange}
          required
        />
      </Box>
      <Box>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Please enter a password"
          defaultValue={password}
          onChange={handleOnChange}
          required
        />
      </Box>
      <Box>
        <Button variant="primary" mr={2} onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
