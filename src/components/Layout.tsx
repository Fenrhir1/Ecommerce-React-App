import { ReactNode } from "react";
import { Paper } from "@mui/material";

import { Navbar } from "./Navbar";

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props) {
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
      <Navbar />
      {children}
    </Paper>
  );
}
