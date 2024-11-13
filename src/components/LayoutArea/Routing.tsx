import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import NotFound404 from "../Pages/ErrorPages/NotFound404";
import CartPage from "../Pages/TransactionPage/CartPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import CouponReportsPage from "../Pages/AdminPages/Reports/Coupons/CouponReportsPage";

function Routing(): JSX.Element {
  return (
    <>
      <Routes>
        <Route index path="/" element={<CartPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/reports/coupons" element={<CouponReportsPage />} />
        <Route path="/users" element={<NotFound404 />}>
          <Route path="/users/coupons" element={<LoginPage />} />
        </Route>

        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </>
  );
}

export default Routing;
