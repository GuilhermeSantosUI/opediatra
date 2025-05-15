import { MainContext } from '@/app/context';
import { queryClient } from '@/app/services';
import { Toaster } from '@/views/components/ui/sonner';
import { QueryClientProvider } from '@tanstack/react-query';
import { setDefaultOptions } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';

setDefaultOptions({ locale: ptBR });

import '@/styles/index.css';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <StrictMode>
        <MainContext>
            <App />
            <Toaster
              position="bottom-right"
              toastOptions={{
                style: {
                  padding: '16px',
                },
                className: 'class',
              }}
              richColors
            />
        </MainContext>
      </StrictMode>
    </QueryClientProvider>
  </BrowserRouter>,
);
