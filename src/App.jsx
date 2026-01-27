import { Button, CssBaseline, Typography } from "@mui/material";
import { createBrowserRouter, Navigate, Route } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout.jsx";
import Error from "./pages/Error.jsx";
import Login from "./pages/Login.jsx";
import Oathsworn from "./pages/Oathsworn.jsx";
import Middara from "./pages/Middara.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Welcome from "./pages/Welcome.jsx";
import About from "./pages/About.jsx";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Navigate to="/welcome" /> },
      { path: "/welcome", element: <Welcome /> },
      { path: "/oathsworn", element: <Oathsworn /> },
      { path: "/middara", element: <Middara /> },
      { path: "/about", element: <About /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "*", element: <PageNotFound /> },
]);

const App = () => {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ zIndex: 9999, margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0",
            color: "var(--color-grey-700",
          },
        }}
      />
    </>
  );
};

export default App;
