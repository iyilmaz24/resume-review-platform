import './App.css'
import { MantineProvider } from '@mantine/core';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserForm from './pages/UserForm';
import Home from './pages/Home';
import Review from './pages/Review';
import Records from './pages/Records';
import Login from './pages/Login';

import '@mantine/core/styles.css';
import '@mantine/core/styles/UnstyledButton.css';
import '@mantine/core/styles/Button.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/form",
    element: <UserForm />,
  },
  {
    path: "/review",
    element: <Review />
  },
  {
    path: "/records",
    element: <Records />
  },
  {
    path: "/login",
    element: <Login />
  },
]);


function App() {


  return ( <>
    <MantineProvider>
      

      <RouterProvider router={router} />

    
    </MantineProvider>
    </> )
}


export default App;