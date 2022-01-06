import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import { totalPrice, selectItems } from "../../features/basket";

function Subtotal() {
  // LOGIC /////////////////////////
  const { isAuthenticated } = useAuth0();

  // Redux
  const basketItems = useSelector(selectItems);
  const total = useSelector(totalPrice);

  // JSX /////////////////////////
  return (
    <div className='px-6 md:px-3 xl:px-6 py-3 col-span-6  md:col-span-1 mt-10 md:mt-0 bg-white shadow-lg md:shadow-none'>
      <h1 className='text-lg font-bold'>
        Subtotal <span className='text-xs text-red-500'>({basketItems.length} Items)</span> :
      </h1>
      <h1 className='bg-red-500 text-white mt-5 py-1 text-center rounded'>${total}</h1>
      <button
        className={`mt-2 w-full py-1 rounded bg-gradient-to-b text-sm transition-all ${
          isAuthenticated
            ? "from-amber-200 to-amber-500 border border-amber-300 hover:opacity-80"
            : "from-slate-300 to-gray-500 border border-gray-300"
        }`}
        disabled={!isAuthenticated}
      >
        {isAuthenticated ? "Proceed to checkout" : "Sign in to checkout"}
      </button>
    </div>
  );
}

export default Subtotal;
