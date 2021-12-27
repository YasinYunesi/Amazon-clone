import { useSelector, useDispatch } from "react-redux";
import { disable } from "../features/sidebar";
import Banner from "../components/Banner/Banner";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Products from "../components/Products/Products";

function HomeScreen() {
  // LOGIC /////////////////////////////////////
  const sidebarAnimation = useSelector((state) => state.sidebar.value.animation);
  const dispatch = useDispatch();

  // JSX /////////////////////////////////////
  return (
    <>
      <div className={`relative ${sidebarAnimation && "h-screen overflow-y-hidden"}`}>
        {/* the black bg for active sidebar */}
        <div
          className={`absolute ${sidebarAnimation ? "animate-fade_in" : "hidden"} top-0 right-0 w-screen h-full z-40
           bg-black bg-opacity-80`}
          onClick={() => dispatch(disable())}
        />

        <Navbar />

        <div className='max-w-screen-2xl mx-auto'>
          <Banner />

          <Products />
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar />
    </>
  );
}

export default HomeScreen;
