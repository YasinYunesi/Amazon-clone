import { Link } from "react-router-dom";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import DiamondIcon from "@mui/icons-material/Diamond";
import RouterIcon from "@mui/icons-material/Router";
import WomanIcon from "@mui/icons-material/Woman";
import ManIcon from "@mui/icons-material/Man";
import ImageAspectRatioIcon from "@mui/icons-material/ImageAspectRatio";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Navbar() {
  return (
    <div className='bg-amazon_blue-dark px-2 pt-3 pb-2 md:py-1.5 md:flex md:items-center'>
      {/* left side */}
      <div className='flex items-center flex-grow'>
        {/* Logo */}
        <Link to='/'>
          <img className='w-28 sm:w-24' src='https://links.papareact.com/f90' alt='Logo' />
        </Link>

        {/* Deliver to */}
        <div className='hidden mx-5 lg:flex lg:items-end'>
          <FmdGoodOutlinedIcon className='text-white' style={{ fontSize: "1.4rem" }} />
          <h1 className='text-white text-xs'>
            Deliver to <br />
            <span className='font-extrabold'>France</span>
          </h1>
        </div>

        {/* search form */}
        <form className='ml-5 md:mx-5 bg-white rounded flex items-center flex-grow'>
          {/* dropdown start */}
          <div className='inline-block relative group'>
            <button
              className='bg-slate-100 hover:bg-slate-300 focus:bg-slate-300 border-r border-slate-300 rounded-l text-gray-600 py-2 md:py-3 px-2 text-sm flex items-center'
              aria-expanded='true'
              aria-haspopup='true'
              onClick={(e) => e.preventDefault()}
            >
              All <ArrowDropDownIcon className='ml-2' style={{ fontSize: "1.15rem" }} />
            </button>
            {/* menu */}
            <ul className='group-focus-within:block absolute hidden bg-white border border-black z-20'>
              <Link
                to='/category/electronics'
                className='flex items-center p-1 pr-5 hover:bg-amazon_yellow hover:text-white whitespace-nowrap'
              >
                <RouterIcon className='mr-2' />
                Electronics
              </Link>
              <Link
                to='/category/jewelery'
                className='flex items-center p-1 pr-5 hover:bg-amazon_yellow hover:text-white whitespace-nowrap'
              >
                <DiamondIcon className='mr-2' /> Jewelery
              </Link>
              <Link
                to='/category/mens-clothing'
                className='flex items-center p-1 pr-5 hover:bg-amazon_yellow hover:text-white whitespace-nowrap'
              >
                <ManIcon className='mr-2' />
                Men's Clothing
              </Link>
              <Link
                to='/category/womens-clothing'
                className='flex items-center p-1 pr-5 hover:bg-amazon_yellow hover:text-white whitespace-nowrap'
              >
                <WomanIcon className='mr-2' />
                Women's Clothing
              </Link>
            </ul>
          </div>
          {/* dropdown end */}
          <input className='focus:outline-none px-3 py-1 md:py-2 w-full' type='text' />
          <button className='bg-amazon_yellow hover:bg-amazon_yellow-dark rounded-r ml-auto p-1 md:p-2'>
            <SearchIcon style={{ fontSize: "1.8rem" }} />
          </button>
        </form>
      </div>

      {/* Right side */}
      <div className='text-white hidden md:flex w-max mx-auto items-end justify-around mt-1 md:mt-0'>
        {/* Flag */}
        <div className='mr-5 py-2'>
          <ImageAspectRatioIcon style={{ fontSize: "1.8rem" }} />
        </div>
        {/* Sign in */}
        <Link to='/' className='flex flex-col text-sm leading-4 mr-5 border border-transparent p-2 hover:border-white'>
          Hello, Yasin <span className='font-bold'>Account & Lists</span>
        </Link>
        {/* Orders */}
        <Link to='/' className='flex flex-col text-sm leading-4 mr-5 border border-transparent p-2 hover:border-white'>
          Returns <span className='font-bold'>& Orders</span>
        </Link>
        {/* Shopping cart */}
        <Link to='/cart' className='py-2 mr-3 flex items-end font-bold border border-transparent p-2 hover:border-white'>
          <div className='relative'>
            <span className='absolute -right-1 rounded-full flex items-center justify-center font-bold h-4 w-4 text-sm text-black bg-amazon_yellow-dark'>
              0
            </span>
            <ShoppingCartOutlinedIcon style={{ fontSize: "2.3rem" }} />
          </div>
          <p>Cart</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
