import React from "react";
import Flat from "./Flat";

const FlatList = (props) => {
  const renderList = () => {
    return props.flats.map((flat, index) => {
      return (
        <Flat
          key={flat.id}
          flat={flat}
          index={index}
          selectFlat={props.selectFlatFunction}
          selected={flat.name === props.selectedFlat.name}
        />
      );
    });
  };

  return <div className="flat-list">{renderList()}</div>;
};

export default FlatList;