import React, { useState } from "react";

const DataRender = () => {
  const [Product] = useState([
    {
      name: "iphone",
      price: "1000",
      desc: "best phone ever",
      id: 1,
    },
    {
      name: "android",
      price: "100",
      desc: "best phone ever",
      id: 2,
    },
    {
      name: "laptop",
      price: "10000",
      desc: "best laptop ever",
      id: 3,
    },
  ]);
  return (
    <div>
      <h1>Data rendering</h1>
      {Product.map((prod) => {
        console.log(prod);
        return (
          <div key={prod.id}>
            <h2>{prod.name}</h2>
            <p>
              price: {prod.price} description: {prod.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default DataRender;
