import React from 'react';
import { NativeBaseProvider, Text, Box } from 'native-base';

const App: React.FC = () => {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Text>Hey guys! It's me!!!</Text>
      </Box>
    </NativeBaseProvider>
  );
};

export default App;
