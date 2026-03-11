import { PrototypeApp } from './components/PrototypeApp';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <>
      <PrototypeApp />
      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            background: '#0C1A36',
            color: '#fff',
            border: '1px solid #FEC400',
          },
        }}
      />
    </>
  );
}