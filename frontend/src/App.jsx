import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import UserForm from './pages/UserForm';
import Home from './pages/Home';
import Review from './pages/Review';


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
  }
]);


function App() {


  return ( <>
    <MantineProvider>
      

      <RouterProvider router={router} />

    
    </MantineProvider>
    </> )
}


export default App;