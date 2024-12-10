import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Price from "./Pages/Price";
import Product from "./Pages/Product";
import Login from "./Pages/Login";
import AppLayOut from "./Pages/AppLayOut";
import City from "./Components/city";
import Countries from "./Components/Countries";
import axios from "axios";
import CityDetails from "./Components/CityDetails";
import AppContextProvider from "./Contexts/ContextProvider";
import FormCity from "./Components/FormCity";
import { AuthProvider } from "./Contexts/FakeAuthContext";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "",
  //     element: <Layout />,
  //     children: [
  //       {
  //         index: "/",
  //         element: <Home />,
  //       },
  //       {
  //         path: "Price",
  //         element: <Price />,
  //       },
  //       {
  //         path: "Product",
  //         element: <Product />,
  //       },
  //       {
  //         path: "Login",
  //         element: <Login />,
  //       },
  //       {
  //         path: "AppLayOut",
  //         element: <AppLayOut />,
  //         children: [
  //           {
  //             path: "city",
  //             element: <City />,
  //           },
  //           {
  //             path: "Countries",
  //             element: <Countries />,
  //           },
  //           {
  //             path: "CityDetails/:id",
  //             element: <CityDetails />,
  //           },
  //           {
  //             path: "FormCity",
  //             element: <FormCity />,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ]);

  return (
    <>
      <AuthProvider>
        <AppContextProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="Price" element={<Price />} />
                <Route path="Product" element={<Product />} />
                <Route path="Login" element={<Login />} />
                <Route path="AppLayOut" element={<AppLayOut />}>
                  <Route path="city" element={<City />} />
                  <Route path="Countries" element={<Countries />} />
                  <Route path="CityDetails/:id" element={<CityDetails />} />
                  <Route path="FormCity" element={<FormCity />} />
                </Route>
              </Route>
            </Routes>
          </Router>
        </AppContextProvider>
      </AuthProvider>
    </>
  );
}

export default App;
