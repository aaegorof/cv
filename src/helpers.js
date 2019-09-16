import React, { useContext } from "react";
import { general, tech } from "./data";
import { StateContext } from "./context";

export const Formatted = ({ val, data, children}) => {
  const context = useContext(StateContext);
  const from = data || general;

  if (children) {
    console.log("rr");
    return (
        <>
          {children.split("\n\n").map((paragraph, index) => (
              <p key={children}>
                {paragraph
                    .split("\n")
                    .reduce((total, line) => <span key={line}>{[total, <br />, line]}</span>
                    )}
              </p>
          ))}
        </>
    );
  }

  if (!from[context.lang][val]) {
    return "";
  }

  return (
      <>
        {from[context.lang][val].split("\n\n").map((paragraph, index) => (
            <p key={val + index}>
              {paragraph.split("\n").reduce((total, line) => (
                  <span key={line}>{[total, <br />, line]}</span>
              ))}
            </p>
        ))}
      </>
  );
};
