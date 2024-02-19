import { Button } from "@mui/base";
import { Grid, Paper, Typography } from "@mui/material";
import { useEffect } from "react";

export function ProductList({ products, setProducts, handleAddToCart }: any) {
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

  if (!products) return <p>Loading...</p>;

  return (
    <Grid container spacing={6}>
      {products.map(
        (product: {
          id: number;
          description: string;
          title: string;
          price: number;
          image: string | any;
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
              <Typography variant="body1">Prezzo: {product.price}</Typography>
              <Typography variant="body1">Quantità: {product.qty}</Typography>
              <Button onClick={() => handleAddToCart(product)} color="primary">
                Add to cart
              </Button>
            </Paper>
          </Grid>
        )
      )}
    </Grid>
  );
}
