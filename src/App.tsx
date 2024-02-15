import React, { useState } from "react";
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
    </Paper>
  );
}

export default App;
