import React from "react";

const Card = ({ item }) => {
  return (
    <div>
      <h2>{item?.id}</h2>
      <h2>{item?.title}</h2>
      <img src={item?.image} alt=""  width="50px" height="50px"/>
    </div>
  );
};

export default Card;
