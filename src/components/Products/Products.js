import { useEffect, useState, Fragment } from "react";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import Loading from "./../Loading/Loading";

function Products() {
  // LOGIC ///////////////////////////////
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetching the products from API
  useEffect(() => {
    setLoading(true);
    // Abort controller
    const abortCont = new AbortController();
    const getData = async () => {
      const response = await fetch("https://fakestoreapi.com/products", { signal: abortCont.signal });
      const data = await response.json();
      setProducts(data.slice(0, -1));
      setLoading(false);
    };

    getData();

    // Cleanup func
    return () => {
      abortCont.abort();
      setLoading(false);
    };
  }, []);

  // JSX ///////////////////////////////
  return (
    <div className={!loading && "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto md:-mt-52"}>
      {!loading ? (
        products.map(({ id, title, price, category, description, image, rating }, i) => {
          return (
            <Fragment key={id}>
              <div
                className={`relative flex flex-col z-30 p-5 mx-4 my-5 bg-white rounded shadow-xl transition ease-linear hover:scale-105 duration-150 ${
                  i === 4 && "md:col-span-2"
                }`}
              >
                <p className='absolute right-3.5 top-2.5 text-sm italic text-gray-400'>{category}</p>

                <img className='w-48 h-48 mx-auto object-contain mt-2' src={image} alt='Product' />

                <h1 className='mt-3 mb-1 font-bold'>{title}</h1>

                <div>
                  {Array(Math.ceil(rating.rate))
                    .fill()
                    .map((_) => (
                      <span key={Math.random() * 20}>
                        <StarOutlinedIcon className='text-yellow-500' style={{ fontSize: "1.2rem" }} />
                      </span>
                    ))}
                </div>

                <p className='my-2 line-clamp-2 text-gray-800'>{description}</p>

                <h1 className='mt-5 mb-3 font-bold'>${price}</h1>

                <button className='mt-auto py-1 rounded bg-gradient-to-b from-amber-100 to-amber-400 border border-amber-300 hover:opacity-80'>
                  Add to Basket
                </button>
              </div>
              {/* Ad banner */}
              {i === 3 && (
                <div className='md:col-span-full my-6'>
                  <img src='https://links.papareact.com/dyz' alt='Advertisment' />
                </div>
              )}
            </Fragment>
          );
        })
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Products;
