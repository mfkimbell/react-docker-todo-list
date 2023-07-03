import React from "react";

import { Checkbox, IconButton, ListItem, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function Todo({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveclick() {
    removeTodo(todo.id);
  }
  return (
    <ListItem style={{ display: "flex" }}>
      <Checkbox checked={todo.completed} onClick={handleCheckboxClick} />
      <Typography
        variant="body1"
        style={{
          textDecoration: todo.completed ? "line-through" : null,
        }}
      >
        {todo.task}
      </Typography>
      <IconButton onClick={handleRemoveclick}>
        <CloseIcon />
      </IconButton>
    </ListItem>
  );
}
export default Todo;
