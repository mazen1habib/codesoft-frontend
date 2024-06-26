import "./App.css";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Nav from "./components/navbar/Nav";
import Footer from "./routes/Footer";
import Scroll from "./routes/Scroll";
import SingleProduct from "./components/singleProduct/SingleProduct";
import Description from "./components/singleProduct/componentSec2/Description";
import GroupProduct from "./components/home/GroupProduct";
import Cart1 from "./components/Cart/Cart1";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Resgiter from "./routes/Resgiter";
import Auth from "./routes/Auth";
import SigiIn from "./routes/SigiIn";
import Cartshop from "./components/Cart/Cartshop";
import Profile from "./routes/Profile";
function App() {
  return (
    <Fragment>
      <div style={{ display: "block" }}>
        <Nav />
        <ToastContainer />
        <Routes>
          <Route path={"/"} element={<Home />}>
            <Route path={"/product/Category/:id"} element={<GroupProduct />} />
          </Route>
          <Route path={"/shop"} element={<Cart1 />} />
          <Route path={"/login"} element={<Auth />}>
            <Route path={"/login/register"} element={<Resgiter />} />
            <Route path={"/login/sigin"} element={<SigiIn />} />
          </Route>
          <Route path={"/profile"} element={<Profile />} />
          <Route path={"/shop/shop/order/:id"} element={<Cartshop />} />
          <Route path={"/SingleProduct/:id"} element={<SingleProduct />}>
            <Route
              path={"/SingleProduct/:id/description"}
              element={<Description />}
            />
          </Route>
        </Routes>
        <Scroll />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
