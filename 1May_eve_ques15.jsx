import React, { createContext, useState, useContext } from 'react';
import { ChakraProvider, Box, Flex, Grid, Button, Stack, Text, useBreakpointValue } from '@chakra-ui/react';

const AuthContext = createContext();
const ThemeContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleAuth = () => setIsLoggedIn(!isLoggedIn);
  return (
    <AuthContext.Provider value={{ isLoggedIn, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function App() {
  const { isLoggedIn, toggleAuth } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const sidebarVisible = useBreakpointValue({ base: false, md: true });
  
  return (
    <ChakraProvider>
      <Flex direction="column" minHeight="100vh" bg={theme === 'light' ? 'gray.100' : 'gray.700'}>
        <Flex as="nav" p="4" bg={theme === 'light' ? 'gray.100' : 'gray.700'} justifyContent="space-between">
          <Text>{isLoggedIn ? 'Logged In' : 'Logged Out'}</Text>
          <Button onClick={toggleAuth}>{isLoggedIn ? 'Log Out' : 'Log In'}</Button>
          <Button onClick={toggleTheme}>Toggle Theme</Button>
        </Flex>
        <Flex>
          {sidebarVisible && (
            <Box
              w={{ base: '100%', md: '250px' }}
              p="4"
              bg={theme === 'light' ? 'gray.200' : 'gray.600'}
              display={{ base: 'none', md: 'block' }}
            >
              {isLoggedIn && <Text>Welcome, User</Text>}
            </Box>
          )}
          <Box flex="1" p="4">
            <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap="4">
              {['Product 1', 'Product 2', 'Product 3', 'Product 4'].map((product) => (
                <Box key={product} p="4" bg={theme === 'light' ? 'gray.200' : 'gray.600'} shadow="md">
                  {product}
                </Box>
              ))}
            </Grid>
          </Box>
        </Flex>
        <Box as="footer" p="4" bg={theme === 'light' ? 'gray.100' : 'gray.700'} mt="auto">
          Footer Content
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default () => (
  <AuthContextProvider>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </AuthContextProvider>
);
