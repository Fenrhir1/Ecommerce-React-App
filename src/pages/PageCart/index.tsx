import { Grid } from "@mui/material";
import { useContext } from "react";
import { ContextApp } from "../../context/Provider";
import { Header } from "./Header";
import { Product } from "../../components/Product";

export function PageCart() {
  const { cartItems, handleRemoveFromCart } = useContext(ContextApp);

  return (
    <Grid>
      <Header />
      <Grid container spacing={6}>
        {cartItems.map(({ id, title, description, image, qty, price }) => (
          <Product
            label="Remove from cart"
            id={id}
            title={title}
            image={image}
            description={description}
            onClick={() => handleRemoveFromCart(id)}
            qty={qty}
            price={price}
          />
        ))}
      </Grid>
    </Grid>
  );
}
