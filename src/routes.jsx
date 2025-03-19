import { Routes, Route } from "react-router-dom";
// import ProductList from "./containers/ProductList";
import Checkout from "./containers/Checkout";
import Demo from "./Demo";
import PrivateRoute from "./components/PrivateRoute";
import ProductDetails from "./containers/ProductDetails";
import ErrorPage from "./containers/ErrorPage";
import { lazy, Suspense } from "react";

const LazyProductList = lazy(() => import("./containers/ProductList"));
function AppRouter() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<Demo />} />
        <Route path="/products" element={<LazyProductList />} />
        <Route path="/details/:pid" element={<ProductDetails />} />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
