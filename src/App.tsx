import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AppLayout from './layouts/app-layout';
import Analyze from './pages/Analyze';
import About from './components/About';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/analyze',
        element: <Analyze />,
      },
      {
        path: '/About',
        element: <About />,
      },
    ],
    },
  ]);

function App() {
  return (
    
      <RouterProvider router={router} />
   
  );
}

export default App;


