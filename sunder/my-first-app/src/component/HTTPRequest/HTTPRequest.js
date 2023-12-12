import React, { useEffect, useState } from "react";
import axios from "axios";
const HTTPRequest = () => {
  const apiUrl = "https://jsonplaceholder.typicode.com/posts";

  // useEffect(() => {
  //   using fetch
  //   fetch(apiUrl)
  //     .then((data) => data.json().then((post) => console.log(post)))
  //     .catch((err) => console.log(err));
  //   using axios
  //   axios
  //     .get(apiUrl)
  //     .then((post) => console.log(post.data))
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  });

  return (
    <div>
      <h1>Http request using useEffect</h1>
    </div>
  );
};

export default HTTPRequest;
