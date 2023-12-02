import React, { useEffect, useState } from "react";
import axios from "axios";
import { api_url } from "../../config/constants";

export default function TodoLoader({ children, id }) {
  const [todo, setTodo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      await axios
        .get(`${api_url}/${id}`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => res.data)
        .then((data) => {
          setTodo(data.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsError(true);
          setIsLoading(false);
        });
    })();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { todo });
    }
  });
}
