import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  FormControl,
  RadioGroup,
  FormLabel,
  Radio,
  FormControlLabel,
} from "@mui/material";
// import { DateCalendar } from "@mui/x-date-pickers";

export default function EditTodoDialog({ isEditDialogOpen, onHandleClose }) {
  return (
    <Dialog open={isEditDialogOpen} onClose={onHandleClose}>
      <DialogTitle>Edit Todo</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Edit the todo fields, when you are finished making the edits click on
          update to confirm changes.
        </DialogContentText>
        <FormControl>
          <FormLabel id="is-todo-done-radio-button-group-label">Done</FormLabel>
          <RadioGroup
            aria-labelledby="is-todo-done-radio-button-group-label"
            // defaultValue="female"
            name="done-todo-radio-buttons"
          >
            <FormControlLabel value={true} control={<Radio />} label="True" />
            <FormControlLabel value={false} control={<Radio />} label="False" />
          </RadioGroup>
          {/* <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            defaultValue="Default Value"
          />

          <DateCalendar /> */}
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onHandleClose}>Cancel</Button>
        <Button onClick={onHandleClose}>Update</Button>
      </DialogActions>
    </Dialog>
  );
}
