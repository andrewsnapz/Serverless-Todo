import React from "react";
import { FormControl, InputLabel, Input, FormHelperText } from "@mui/material";

export default function Login({}) {
  return (
    <FormControl>
      <InputLabel htmlFor="my-input">User name</InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text" />
      <FormHelperText id="my-helper-text">
        We'll never share your email.
      </FormHelperText>
    </FormControl>
  );
}
