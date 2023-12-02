import React from "react";
import { Grid } from "@mui/material";

export default function Layout({ children }) {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return <Grid item>{child}</Grid>;
        }
      })}
    </Grid>
  );
}
