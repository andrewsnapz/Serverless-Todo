import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  ButtonGroup,
  Button,
} from "@mui/material";

import EditTodoDialog from "./EditTodoDialog.jsx";

export default function TodoTable({ allTodoRows }) {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [rowDetails, setRowDetails] = useState({});

  return (
    <>
      {isEditDialogOpen && (
        <EditTodoDialog
          isEditDialogOpen={isEditDialogOpen}
          onHandleClose={() => {
            setRowDetails({});
            setIsEditDialogOpen(false);
          }}
          rowDetails={rowDetails}
        />
      )}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Done</TableCell>
              <TableCell>Target Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allTodoRows.map((todo) => {
              const { username, description, done, targetDate, id } = todo;
              return (
                <TableRow scope="row" key={id}>
                  <TableCell>{username}</TableCell>
                  <TableCell>{description}</TableCell>
                  <TableCell>{`${done}`}</TableCell>
                  <TableCell>
                    {new Date(targetDate).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <ButtonGroup
                      variant="contained"
                      aria-label="Edit or delete todo"
                    >
                      <Button
                        onClick={() => {
                          setRowDetails({
                            username,
                            description,
                            done,
                            targetDate,
                            id,
                          });
                          setIsEditDialogOpen((prev) => !prev);
                        }}
                      >
                        Edit
                      </Button>
                      <Button>Delete</Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
