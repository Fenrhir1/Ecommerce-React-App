import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";

import logo from "./img/logo.png.jpg";
import { ProductList } from "./Product";

function App() {
  const description =
    "Benvenuti nel negozio online ufficiale del quartiere più chic di Palermo";

  const [products, setProducts] = useState([] as any);
  const [cartItems, setCartItems] = useState<Array<{}>>([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (product: any) => {
    const existingItem = cartItems.find((item: any) => item.id === product.id);
    if (existingItem) {
      const updatedCartItems = cartItems.map((item: any) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  const handleRemoveFromCart = (product: any) => {
    const newCartItems = cartItems.filter((item: any) => item !== product);
    setCartItems(newCartItems);
  };

  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: "black",
        minHeight: "100vh",
        color: "white",
        padding: "20px",
      }}
    >
      <Grid container justifyContent="center" alignItems="center">
        <img
          src={logo}
          alt="Amazzone Logo"
          style={{ width: "200px", height: "100px" }}
        />{" "}
      </Grid>
      <Grid container justifyContent="center">
        <Typography
          variant="h5"
          component="h1"
          sx={{ textAlign: "center", mb: 2 }}
        ></Typography>
      </Grid>
      <Grid
        container
        justifyContent="flex-end"
        alignItems="center"
        sx={{ position: "relative", pr: 3 }}
      >
        <Button sx={{ color: "gray" }} onClick={handleShowCart}>
          <Badge badgeContent={cartItems.length} color="secondary">
            <ShoppingCartIcon
              sx={{
                fontSize: 36,
                color: "gray",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
          </Badge>
        </Button>
      </Grid>
      <Grid container justifyContent="center">
        <Typography
          variant="body1"
          color="-moz-initial"
          sx={{ textAlign: "center", mt: 2, mb: 10 }}
        >
          {description}
        </Typography>
      </Grid>

      {showCart ? (
        <Grid>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Carrello
          </Typography>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Prezzo Totale =
            {cartItems.reduce(
              (acc: any, product: any) => acc + product.price,
              0
            )}
            €
          </Typography>
          <Grid container spacing={6}>
            {cartItems.map((product: any, index: number) => (
              <Grid item xs={10} sm={16} md={4} key={product.id}>
                <Paper elevation={3} sx={{ padding: 2 }}>
                  <Typography variant="h5">{product.title}</Typography>
                  <Typography variant="h6">{product.description}</Typography>
                  <img
                    style={{ width: "100px", height: "100px" }}
                    src={product.image}
                    alt={product.title}
                  />
                  <Typography variant="body1">
                    Prezzo: {product.price}
                  </Typography>
                  <Typography variant="body1">
                    Quantità: {product.qty}
                  </Typography>
                  <Button
                    onClick={() => handleRemoveFromCart(product)}
                    color="primary"
                  >
                    Remove from cart
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      ) : (
        <Grid>
          <ProductList
            products={products}
            setProducts={setProducts}
            handleAddToCart={handleAddToCart}
          />
        </Grid>
      )}
    </Paper>
  );
}

export default App;
