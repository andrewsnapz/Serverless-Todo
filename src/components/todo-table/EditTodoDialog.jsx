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
import axios from "axios";
import { api_url } from "../../config/constants";
// import { DateCalendar } from "@mui/x-date-pickers";

export default function EditTodoDialog({
  isEditDialogOpen,
  onHandleClose,
  rowDetails,
}) {
  // local state:
  const [editedTodo, setEditedTodo] = useState({ ...rowDetails });

  const onHandleEditTodo = async () => {
    await (async function () {
      await axios
        .put(
          `${api_url}/${editedTodo.id}`,
          { ...editedTodo },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => res.data)
        .then((data) => console.log("data: ", data))
        .catch((err) => console.log(err));
    })();

    onHandleClose();
  };

  return (
    <Dialog open={isEditDialogOpen} onClose={onHandleClose}>
      <DialogTitle>Edit Todo</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Edit the todo fields, when you are finished making the edits click on
          update to confirm changes.
        </DialogContentText>
        <FormControl style={{ marginTop: "1rem" }}>
          <FormLabel id="is-todo-done-radio-button-group-label">Done</FormLabel>
          <RadioGroup
            aria-labelledby="is-todo-done-radio-button-group-label"
            name="done-todo-radio-buttons"
            defaultValue={editedTodo.done === true ? true : false}
          >
            <FormControlLabel
              onChange={() =>
                setEditedTodo((prev) => ({ ...prev, done: true }))
              }
              value={true}
              control={<Radio />}
              label="True"
            />
            <FormControlLabel
              onChange={() =>
                setEditedTodo((prev) => ({ ...prev, done: false }))
              }
              value={false}
              control={<Radio />}
              label="False"
            />
          </RadioGroup>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onHandleClose}>Cancel</Button>
        <Button onClick={() => onHandleEditTodo()}>Update</Button>
      </DialogActions>
    </Dialog>
  );
}
