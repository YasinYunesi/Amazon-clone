import { useEffect, useState } from "react";
import Loading from "./../Loading/Loading";
import Product from "./Product";

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
    <div className={!loading ? "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto md:-mt-52" : ""}>
      {!loading ? (
        products.map(({ id, title, price, category, description, image, rating }, i) => {
          return (
            <Product
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
        })
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Products;
