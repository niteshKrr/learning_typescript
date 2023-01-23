import React from "react";
import { UserName } from "../../pages";

type ListsProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

const Lists = <T extends string | number | UserName>(props: ListsProps<T>) => {
  return (
    <div>
      <h2>list of items</h2>
      {props.items.map((item, index) => {
        return (
          <div key={index} onClick={() => props.onClick(item)}>
            {typeof item === "object" ? (
              <div>{item.name}</div>
            ) : (
              <div>{item}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Lists;
