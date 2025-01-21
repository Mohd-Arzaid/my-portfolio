import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./mainLayout/Layout";
import Home from "./components/Home";

import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;
