// import Header from "../components/Header";
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../components/Context";
import Footer from "../components/Footer";

function UserLayout() {
  const { state } = useContext(AppContext);

  // if (state.user._id) {
  return (
    <>
      {/* <Header/> */}
      <Outlet />

      <Footer />
    </>
  );
  //   } else {
  //     return <Navigate to="/" />;
  //   }

}
// }

export default UserLayout;
