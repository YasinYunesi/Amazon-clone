import { useDispatch, useSelector } from "react-redux";
import { selectItems, cleareBasket } from "../features/basket";
import { Link } from "react-router-dom";
import Navbar from "./../components/Navbar/Navbar";
import Footer from "./../components/Footer/Footer";
import BasketCard from "../components/Basket/BasketCard";
import Subtotal from "../components/Basket/Subtotal";
import emptyCart from "../assets/images/empty_cart.svg";

function CartScreen() {
  // LOGIC /////////////////////////
  const basket = useSelector(selectItems);
  const dispatch = useDispatch();

  // JSX /////////////////////////
  return (
    <div>
      <Navbar />

      {/* MAIN CONTENT */}
      {basket.length === 0 ? (
        <div className='text-center py-20'>
          <img className='w-3/12 mx-auto' src={emptyCart} alt='Empty cart' />
          <h1 className='my-5 font-bold text-xl'>Your shopping basket is empty ...</h1>
          <Link to='/' className='bg-amazon_yellow-dark py-2 px-10 rounded-full' title='Go back to home page'>
            Back to Home
          </Link>
        </div>
      ) : (
        <div className='max-w-screen-2xl mx-auto grid grid-cols-6 p-2 bg-transparent md:bg-white shadow-none md:shadow-lg mb-20'>
          {/* left side */}
          <div className='col-span-6 md:col-span-5 bg-white shadow-lg md:shadow-none'>
            {/* Ad Banner and shadow */}
            <div className='relative mb-5'>
              <img
                className='rounded-sm'
                src='https://amazon-clone-mehdi-zandian.vercel.app/static/media/exclusive.73d486827b70b19b8969.jpg'
                alt='Advertisment'
              />

              {/* Bottom shadow for add */}
              <div className='absolute z-10 h-24 lg:h-36 bottom-0 w-full bg-gradient-to-t from-gray-100 to-transparent' />
            </div>

            {/* Title */}
            <h1 className='font-bold text-gray-800 text-3xl border-b border-gray-300 pb-4 mb-10'>Your Shopping Basket</h1>

            {/* Basket Cards */}
            {basket.map(({ id, title, price, category, description, image, rating }, i) => {
              return (
                <BasketCard
                  key={i}
                  id={id}
                  title={title}
                  price={price}
                  category={category}
                  description={description}
                  image={image}
                  rating={rating}
                />
              );
            })}

            {/* Clear basket btn */}
            <div className='text-center py-10'>
              <button
                className='bg-red-500 text-white py-2 px-28 rounded transition-all duration-300 hover:rounded-none'
                onClick={() => dispatch(cleareBasket())}
              >
                Clear Basket !
              </button>
            </div>
          </div>

          {/* right side */}
          <Subtotal />
        </div>
      )}

      <Footer />
    </div>
  );
}

export default CartScreen;
