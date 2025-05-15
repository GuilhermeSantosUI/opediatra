import { Router } from '@/router';
import { Toaster } from '@/views/components/ui/sonner';

import '@/styles/index.css';

export function App() {
  return (
    <div>
      <Router />
      <Toaster
        toastOptions={{
          className: 'bg-white text-black dark:bg-gray-800 dark:text-white',
          style: {
            background: '#fff',
            color: '#000',
          },
        }}
        closeButton={false}
      />
    </div>
  );
}
