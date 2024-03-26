import React from "react";
import { FixedSizeList as List } from "react-window";

import style from "./Mixins.module.scss";

// Example data
const data = Array.from({ length: 1000 }, (_, index) => `Item ${index}`);

// Item renderer component
const Row = ({ index, style }) => <div style={style}>{data[index]}</div>;

// Your main component
const ReactWidow = () => {
  return (
    <>
      <button className={style.hello}>Hello</button>
      <button className={style.text}>Text</button>
      <List
        height={800} // Height of the visible window
        itemCount={data.length} // Total number of items
        itemSize={50} // Height of each item
        width={800} // Width of the list
      >
        {Row}
      </List>
    </>
  );
};

export default ReactWidow;
