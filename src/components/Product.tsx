import { Button, Grid, Paper, Typography } from "@mui/material";
import { Product as TProduct } from "../declarations/general";

interface Props {
  id: TProduct["id"];
  title: TProduct["title"];
  description: TProduct["description"];
  image: TProduct["image"];
  price: TProduct["price"];
  qty: TProduct["qty"];
  label: string;
  onClick: () => void;
}

export function Product({
  id,
  title,
  description,
  image,
  price,
  qty,
  label,
  onClick,
}: Props) {
  return (
    <Grid item xs={10} sm={16} md={4} key={id}>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="h6">{description}</Typography>
        <img
          style={{ width: "100px", height: "100px" }}
          src={image}
          alt={title}
        />
        <Typography variant="body1">Prezzo: {price}</Typography>
        <Typography variant="body1">Quantità: {qty}</Typography>
        <Button onClick={onClick} color="primary">
          {label}
        </Button>
      </Paper>
    </Grid>
  );
}
