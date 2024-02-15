import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";

function App() {
  const title = "Amazzone";
  const description = "Benvenuti nel mio negozio online. bla bla bla";
  const [cartItems, setCartItems] = useState(0);

  const handleAddToCart = () => {
    setCartItems(cartItems + 1);
  };
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
    <Paper
      elevation={0}
      sx={{
        backgroundColor: "black",
        minHeight: "100vh",
        color: "#008080",
        padding: "20px",
      }}
    >
      <Grid container justifyContent="center">
        <Typography
          variant="h5"
          component="h1"
          sx={{ textAlign: "center", mb: 2 }}
        >
          {title}
        </Typography>
      </Grid>
      <Grid
        container
        justifyContent="flex-end"
        alignItems="center"
        sx={{ position: "relative", pr: 3 }}
      >
        <Button onClick={handleAddToCart} sx={{ color: "gray" }}>
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
        <Typography variant="body1" sx={{ textAlign: "center", mt: 2 }}>
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
