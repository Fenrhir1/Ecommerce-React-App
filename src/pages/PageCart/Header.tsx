import { Typography } from "@mui/material";
import { useContext } from "react";
import { ContextApp } from "../../context/Provider";

export function Header() {
  const { cartItems } = useContext(ContextApp);

  return (
    <>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Carrello
      </Typography>
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        Prezzo Totale =
        {cartItems.reduce((acc, product) => acc + product.price, 0)}€
      </Typography>
    </>
  );
}
