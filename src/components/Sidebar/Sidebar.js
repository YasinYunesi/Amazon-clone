import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { disable } from "../../features/sidebar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ImageAspectRatioIcon from "@mui/icons-material/ImageAspectRatio";
import LanguageIcon from "@mui/icons-material/Language";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Sidebar() {
  // LOGIC //////////////////////////////
  const sidebarAnimation = useSelector((state) => state.sidebar.value.animation);
  const sidebarAnimation_n = useSelector((state) => state.sidebar.value.animation_n);
  const dispatch = useDispatch();

  // JSX //////////////////////////////
  return (
    <div
      className={`absolute top-0 left-0 z-40 h-full w-72 sm:w-80 md:w-96 ${
        sidebarAnimation ? "animate-slide_in" : "-translate-x-full"
      } ${sidebarAnimation_n && "animate-slide_out"} flex justify-between`}
    >
      {/* the main list (everything except close btn) */}
      <div className='h-full w-11/12 bg-white overflow-y-auto pb-10'>
        {/* sign in */}
        <Link to='/' className='flex items-center text-xl font-bold text-white bg-amazon_blue py-2 pl-10'>
          <AccountCircleIcon style={{ fontSize: "2rem" }} />
          <h1 className='ml-3'>Hello, Sign in</h1>
        </Link>

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
          <li className='sidebar_list_item'>Customer Service</li>
          <li className='hover:bg-gray-200 flex items-center'>
            <Link to='/cart' className='py-4 pl-10 pr-5 w-full flex_between'>
              <div>
                <ShoppingCartOutlinedIcon className='mr-1' style={{ fontSize: "1.3rem" }} />
                Cart
              </div>
              <span className='rounded-full font-bold flex items-center justify-center h-5 w-5 text-sm text-amazon_blue bg-gray-400'>
                0
              </span>
            </Link>
          </li>
          <li className='sidebar_list_item'>Sign In</li>
        </ul>
      </div>

      {/* Close btn */}
      <button className='h-max md:w-1/12 mt-2' onClick={() => dispatch(disable())}>
        <CloseIcon className='text-white' style={{ fontSize: "2rem" }} />
      </button>
    </div>
  );
}

export default Sidebar;
