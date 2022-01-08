// React router
import { Link } from "react-router-dom";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { Deactivate } from "../../features/sidebar";
import { selectItems } from "../../features/basket";
// Auth0
import { useAuth0 } from "@auth0/auth0-react";
// MUI
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LanguageIcon from "@mui/icons-material/Language";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// Offcanvas library
import { OffCanvas, OffCanvasMenu } from "react-offcanvas";

function Sidebar() {
  // LOGIC //////////////////////////////
  const sideIsOpen = useSelector((state) => state.sidebar.value.open);

  // Accessing redux
  const dispatch = useDispatch();
  const basketItmes = useSelector(selectItems);

  const { loginWithPopup, logout, user } = useAuth0();

  // JSX //////////////////////////////
  return (
    <>
      <div
        className={`bg-black w-screen h-screen z-40 fixed top-0 left-0 ${sideIsOpen ? "block animate-fade_in" : "hidden"}`}
        onClick={() => dispatch(Deactivate())}
      />
      <OffCanvas transitionDuration={600} isMenuOpened={sideIsOpen}>
        <OffCanvasMenu className='h-full z-40'>
          <div className='w-72 sm:w-80 md:w-96 h-full flex justify-between'>
            {/* the main list (everything except close btn) */}
            <div className='h-full w-11/12 bg-white overflow-y-auto pb-10'>
              {/* sign in */}
              <button
                className={`w-full flex items-center text-xl font-bold text-white bg-amazon_blue py-2 pl-10 ${
                  user ? "cursor-default" : "cursor-pointer"
                }`}
                onClick={!user ? () => loginWithPopup() : undefined}
              >
                {user ? (
                  <img className='rounded-full w-2/12' src={user.picture} alt='user' />
                ) : (
                  <AccountCircleIcon style={{ fontSize: "2rem" }} />
                )}
                <h1 className='ml-3'>Hello, {user ? user.name : "Sign in"}</h1>
              </button>

              {/* Digital content */}
              <h1 className='sidebar_header'>Digital Content & Devices</h1>
              <ul className='sidebar_list'>
                <li className='flex_between sidebar_list_item'>
                  Amazon Music <ArrowForwardIosIcon className='text-gray-400' style={{ fontSize: "1rem" }} />
                </li>
                <li className='flex_between sidebar_list_item'>
                  Kindle E-readers & Books <ArrowForwardIosIcon className='text-gray-400' style={{ fontSize: "1rem" }} />
                </li>
                <li className='flex_between sidebar_list_item'>
                  Appstore for Android <ArrowForwardIosIcon className='text-gray-400' style={{ fontSize: "1rem" }} />
                </li>
              </ul>

              {/* Shop by department */}
              <h1 className='sidebar_header'>Shop By Department</h1>
              <ul className='sidebar_list'>
                <li>
                  <Link to='/category/electronics' className='flex_between sidebar_list_item'>
                    Electronics <ArrowForwardIosIcon className='text-gray-400' style={{ fontSize: "1rem" }} />
                  </Link>
                </li>
                <li>
                  <Link to='/category/jewelery' className='flex_between sidebar_list_item'>
                    Jewelery <ArrowForwardIosIcon className='text-gray-400' style={{ fontSize: "1rem" }} />
                  </Link>
                </li>
                <li>
                  <Link to='/category/mens-clothing' className='flex_between sidebar_list_item'>
                    Men's Clothing <ArrowForwardIosIcon className='text-gray-400' style={{ fontSize: "1rem" }} />
                  </Link>
                </li>
                <li>
                  <Link to='/category/womens-clothing' className='flex_between sidebar_list_item'>
                    Women's Clothing <ArrowForwardIosIcon className='text-gray-400' style={{ fontSize: "1rem" }} />
                  </Link>
                </li>
              </ul>

              {/* Progrmas and features */}
              <h1 className='sidebar_header'>Programs & Features</h1>
              <ul className='sidebar_list'>
                <li className='flex_between sidebar_list_item'>
                  Gift Cards <ArrowForwardIosIcon className='text-gray-400' style={{ fontSize: "1rem" }} />
                </li>
                <li className='flex_between sidebar_list_item'>#FoundOnAmazon</li>
                <li className='flex_between sidebar_list_item'>
                  Amazon Live <ArrowForwardIosIcon className='text-gray-400' style={{ fontSize: "1rem" }} />
                </li>
                <li className='flex_between sidebar_list_item'>
                  International Shopping <ArrowForwardIosIcon className='text-gray-400' style={{ fontSize: "1rem" }} />
                </li>
              </ul>

              {/* Help and settings */}
              <h1 className='sidebar_header'>Help & Settings</h1>
              <ul className='list-none text-sm'>
                <li className='sidebar_list_item'>Your Account</li>
                <li className='sidebar_list_item'>
                  <LanguageIcon className='mr-2 text-gray-400' style={{ fontSize: "1.05rem" }} />
                  English
                </li>
                <li className='sidebar_list_item flex items-center'>
                  <img
                    className='w-5 h-3.5 mr-2'
                    src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png'
                    alt='Flag'
                  />
                  United States
                </li>
                <li className='sidebar_list_item'>
                  <Link to='orders'>Return & Orders</Link>
                </li>
                <li className='hover:bg-gray-200 flex items-center'>
                  <Link to='/cart' className='py-4 pl-10 pr-5 w-full flex_between'>
                    <div>
                      <ShoppingCartOutlinedIcon className='mr-1' style={{ fontSize: "1.3rem" }} />
                      Cart
                    </div>
                    <span className='rounded-full font-bold flex items-center justify-center h-5 w-5 text-xs text-amazon_blue bg-gray-400'>
                      {basketItmes.length}
                    </span>
                  </Link>
                </li>
                <li className='sidebar_list_item'>
                  <button onClick={!user ? () => loginWithPopup() : () => logout()}>{user ? "Sign out" : "Sign in"}</button>
                </li>
              </ul>
            </div>

            {/* Close btn */}
            <button className='h-max md:w-1/12 mt-2' onClick={() => dispatch(Deactivate())}>
              <CloseIcon className='text-white' style={{ fontSize: "2rem" }} />
            </button>
          </div>
        </OffCanvasMenu>
      </OffCanvas>
    </>
  );
}

export default Sidebar;
