import React, { useEffect, useState } from "react";
import axios from "axios";
import { api_url } from "../../config/constants";

export default function AllTodosLoader({ children }) {
  const [allTodoRows, setAllTodoRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      await axios
        // .get(api_url, {
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // })
        .get("https://run.mocky.io/v3/759ed6fc-18bf-45ed-b9af-85a7bbeb7f1e")
        .then((res) => {
          // for aws lambda function:
          // return res.data.body;

          return res.data;
        })
        .then((data) => {
          // for aws lambda function:
          // setAllTodoRows(JSON.parse(data));

          setAllTodoRows(data);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsError(true);
          setIsLoading(false);
        });
    })();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { allTodoRows });
    }
  });
}
