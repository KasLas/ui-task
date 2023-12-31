import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App.tsx';
import { extendedTheme } from './theme/extendedTheme.ts';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ChakraProvider theme={extendedTheme}>
            <App />
          </ChakraProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </React.StrictMode>
  </>
);
