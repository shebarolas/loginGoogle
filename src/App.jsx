import React, { useEffect, useState } from 'react'
// import NavBar from './components/NavBar'
import Home from './pages/Home'
// import ReadMore from './pages/ReadMore'
import Login from './pages/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavBar from './components/NavBar';
import ReadMore from './pages/ReadMore';


const App = () => {

  const [user, setuser] = useState(null);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <NavBar user = {user} />,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/login",
          element: user ? <Home /> : <Login />
        },
        {
          path: "/readMore/:id",
          element: <ReadMore/>
        }
      ]
    }

  ]);


  const getUser = async () => {

    try {
      
      const resp = await fetch(`https://versed-fresh-jumpsuit.glitch.me/auth/login/success`, {
        method: 'GET',
        credentials: "include",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true
        }
      });

      if (resp.status === 200){
        const data = await resp.json();
        setuser(data.user);
      }


    } catch (error) {
      console.log(error);
    }

  }
  useEffect(() => {

    getUser();
  
   
  }, [])

  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App