// React router
import { Link } from "react-router-dom";
// MUI
import LanguageIcon from "@mui/icons-material/Language";

function FooterMain() {
  return (
    <div>
      {/* the lists */}
      <div className='border-b border-gray-500'>
        <div className='max-w-screen-lg mx-auto pl-5 lg:pl-0 py-20 grid sm:grid-cols-2 md:grid-cols-3 lg:justify-items-center lg:grid-cols-4'>
          {/* List 1 */}
          <ul className='text-sm w-max mb-5 md:mb-0 md:mx-auto'>
            <h1 className='font-bold mb-2'>Get to Know Us</h1>
            <li className='footer_list_item'>Careers</li>
            <li className='footer_list_item'>Blog</li>
            <li className='footer_list_item'>About Amazon</li>
            <li className='footer_list_item'>Investor Relations</li>
            <li className='footer_list_item'>Amazon Devices</li>
          </ul>

          {/* List 2 */}
          <ul className='text-sm w-max mb-5 md:mb-0 md:mx-auto'>
            <h1 className='font-bold mb-2'>Make Money With Us</h1>
            <li className='footer_list_item'>Sell products on Amazon</li>
            <li className='footer_list_item'>Sell on Amazon Business</li>
            <li className='footer_list_item'>Sell apps on Amazon</li>
            <li className='footer_list_item'>Become an Affiliate</li>
            <li className='footer_list_item'>Advertise Your Products</li>
            <li className='footer_list_item'>Self-Publish with Us</li>
            <li className='footer_list_item'>Host an Amazon Hub</li>
            <li className='footer_list_item'>See More Make Money with Us</li>
          </ul>

          {/* List 3 */}
          <ul className='text-sm w-max mb-5 md:mb-0 md:mx-auto'>
            <h1 className='font-bold mb-2'>Amazon Payment Products</h1>
            <li className='footer_list_item'>Amazon Business Card</li>
            <li className='footer_list_item'>Shop with Points</li>
            <li className='footer_list_item'>Reload Your Balance</li>
            <li className='footer_list_item'>Amazon Currency Converter</li>
          </ul>

          {/* List 4 */}
          <ul className='text-sm w-max md:mx-auto'>
            <h1 className='font-bold mb-2'>Let Us Help You</h1>
            <li className='footer_list_item'>Amazon and COVID-19</li>
            <li className='footer_list_item'>Your Account</li>
            <li className='footer_list_item'>Your Orders</li>
            <li className='footer_list_item'>
              Shipping Rates & <br /> Policies
            </li>
            <li className='footer_list_item'>
              Returns & <br /> Replacements
            </li>
            <li className='footer_list_item'>
              Manage Your <br /> Content and Devices
            </li>
            <li className='footer_list_item'>Amazon Assistant</li>
            <li className='footer_list_item'>Help</li>
          </ul>
        </div>
      </div>

      {/* the logo, lang and etc. */}
      <div className='flex items-center flex-col md:flex-row w-max mx-auto py-10'>
        {/* Logo */}
        <Link to='/'>
          <img className='w-24 md:w-20' src='https://links.papareact.com/f90' alt='Logo' />
        </Link>
        {/* lang, money and country */}
        <ul className='sm:flex sm:items-center mt-3 md:mt-0 md:ml-32'>
          <li className='footer_info'>
            <LanguageIcon className='mr-2' style={{ fontSize: "1.2rem" }} />
            English
          </li>
          <li className='footer_info'>
            <span className='font-bold mr-2'>$</span> USD - U.S Dollar
          </li>
          <li className='footer_info'>
            <img
              className='w-5 h-3.5 mr-2'
              src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png'
              alt='Flag'
            />
            United States
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterMain;
