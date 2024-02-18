import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";

import logo from "./img/logo.png.jpg";

function App() {
  const description =
    "Benvenuti nel negozio online ufficiale del quartiere più chic di Palermo";
  const [cartItems, setCartItems] = useState(0);

  const handleAddToCart = () => {
    setCartItems(cartItems + 1);
  };

  function ProductList() {
    const [products, setProducts] = useState([]);

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
        <Grid container spacing={6}>
          {products.map(
            (product: {
              id: number;
              description: string;
              title: string;
              price: number;
              image: string;
              qty: number;
            }) => (
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
                    onClick={handleAddToCart}
                    variant="contained"
                    color="primary"
                  >
                    Add to cart
                  </Button>
                </Paper>
              </Grid>
            )
          )}
        </Grid>
      );
    else return <p>Loading...</p>;
  }

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
        <Button sx={{ color: "gray" }}>
          <Badge badgeContent={cartItems} color="secondary">
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
      <Grid>
        <ProductList />
      </Grid>
    </Paper>
  );
}

export default App;
