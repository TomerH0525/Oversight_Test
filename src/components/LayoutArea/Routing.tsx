import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage";
import NotFound404 from "../Pages/ErrorPages/NotFound404";
import CartPage from "../Pages/TransactionPage/CartPage";
import LoginPage from "../Pages/LoginPage/LoginPage";

function Routing(): JSX.Element {
  return (
    <>
      <Routes>
        <Route index path="/" element={<CartPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage/> } />

        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </>
  );
}

export default Routing;
