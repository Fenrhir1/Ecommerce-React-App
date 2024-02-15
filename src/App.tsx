import React, { useState, useEffect } from "react";

function App() {
  function ProductList() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
      const getProducts = async () => {
        const response = await fetch(
          "https://mockend.up.railway.app/api/products"
        );
        const data = await response.json();
        setProducts(data);
      };

      getProducts();
    }, []);

    if (products)
      return (
        <ul>
          {products.map(
            (product: {
              id: number;
              description: string;
              title: string;
              price: number;
              image: string;
              qty: number;
            }) => (
              <div key={product.id}>
                <p>{product.title}</p>
                <p>{product.description}</p>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src={product.image}
                  alt={product.title}
                />
                <p>Prezzo:{product.price}</p>
                <p>Quantità:{product.qty}</p>
                <button>Add to cart</button>
              </div>
            )
          )}
        </ul>
      );
    else return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>App</h1>
      <ProductList />
    </div>
  );
}

export default App;
