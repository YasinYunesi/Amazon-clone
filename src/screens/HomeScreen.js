import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import Banner from "../components/Banner/Banner";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Products from "../components/Products/Products";
import Footer from "./../components/Footer/Footer";

function HomeScreen() {
  // LOGIC /////////////////////////////////////
  const sidebarAnimation = useSelector((state) => state.sidebar.value.animation);

  // JSX /////////////////////////////////////
  return (
    <>
      {/* Notify */}
      <ToastContainer />

      <div className={`relative ${sidebarAnimation && "h-screen overflow-y-hidden"}`}>
        <Navbar />

        {/* Main content */}
        <div className='max-w-screen-2xl mx-auto'>
          <Banner />

          <Products />
        </div>

        <Footer />
      </div>

      <Sidebar />
    </>
  );
}

export default HomeScreen;
