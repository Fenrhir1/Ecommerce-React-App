import { Grid } from "@mui/material";
import { useContext } from "react";
import { ContextApp } from "../context/Provider";
import { Product } from "./Product";

export function ProductList() {
  const { products, handleAddToCart } = useContext(ContextApp);

  if (!products) return <p>Loading...</p>;

  return (
    <Grid container spacing={6}>
      {products.map(({ id, title, image, description, price, qty }) => (
        <Product
          id={id}
          title={title}
          image={image}
          description={description}
          price={price}
          qty={qty}
          label="Add to cart"
          onClick={() => {
            handleAddToCart({ id, title, image, description, price, qty });
          }}
        />
      ))}
    </Grid>
  );
}
