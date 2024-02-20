import { Badge, Button, Grid, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import logo from "../assets/logo.jpg";
import { useContext } from "react";
import { ContextApp } from "../context/Provider";

export function Navbar() {
  const description =
    "Benvenuti nel negozio online ufficiale del quartiere più chic di Palermo";

  const { handleShowCart, cartItems } = useContext(ContextApp);

  return (
    <>
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
        />
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
    </>
  );
}
