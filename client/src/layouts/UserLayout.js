import Header from "../components/Header";
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../components/Context";
import Footer from "../components/Footer";

function UserLayout() {
  const { state } = useContext(AppContext);

  if (state.user._id) {
  return (
    <>
      <Header/>
      <Outlet />

      <Footer />
    </>
  );
<<<<<<< HEAD
    } else {
      return <Navigate to="/" />;
    }
=======
  //   } else {
  //     return <Navigate to="/" />;
  //   }

>>>>>>> be6fd359583df61e5022272e8d51840c14031078
}
// }

export default UserLayout;
