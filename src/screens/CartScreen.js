import { useSelector } from "react-redux";
import { selectItems } from "./../features/basket";
import Navbar from "./../components/Navbar/Navbar";
import Footer from "./../components/Footer/Footer";
import BasketCard from "../components/Basket/BasketCard";

function CartScreen() {
  // LOGIC /////////////////////////
  // Accessing redux
  const basketItems = useSelector(selectItems);

  // JSX /////////////////////////
  return (
    <div>
      <Navbar />

      {/* MAIN CONTENT */}
      <div className='max-w-screen-2xl mx-auto grid grid-cols-6 p-2 bg-white shadow-lg'>
        {/* left side */}
        <div className='col-span-6 lg:col-span-5'>
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
          {basketItems.map(({ id, title, price, category, description, image, rating }, i) => {
            return (
              <BasketCard
                key={id}
                id={id}
                title={title}
                price={price}
                category={category}
                description={description}
                image={image}
                rating={rating}
                i={i}
              />
            );
          })}
        </div>

        {/* right side */}
        <div className='px-3'>
          <h1>Right side</h1>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CartScreen;
