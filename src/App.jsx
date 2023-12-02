import React from "react";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import Login from "./components/login/Login.jsx";
import AllTodosLoader from "./components/loaders/AllTodosLoader.jsx";
import TodoLoader from "./components/loaders/TodoLoader.jsx";
import ErrorBoundary from "./components/error/ErrorBoundary.jsx";
import TodoTable from "./components/todo-table/TodoTable.jsx";
import Layout from "./components/layout/Layout.jsx"



function PlaceHolderComponentTwo({todo}) {
  if (!todo) return null;
  const {username, description, done, targetDate} = todo;

  return <ErrorBoundary>
  <div>
    {username}
    {description}
    {done}
    {targetDate}
  </div>
  </ErrorBoundary>
}

export default function App() {
  return  <LocalizationProvider dateAdapter={AdapterDayjs}>
  <Layout>
  <AllTodosLoader>
    <TodoTable />
  </AllTodosLoader>
  </Layout>
  </LocalizationProvider>
}
