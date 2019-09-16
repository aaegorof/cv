import React, { useContext } from "react";
import { general, tech } from "./data";
import { StateContext } from "./context";

export const Formatted = ({ val, data, children, list}) => {
  const context = useContext(StateContext);
  const from = data || general;

  const toFormat = (string, isList) => {
    const textArray = isList ? string.split("\n") : string.split("\n\n")
    return isList ? textArray.map((paragraph, index) => (
        <li key={"li" + textArray[0]+[context.lang] + index}>
          {paragraph
              .split("\n")
              .reduce((total, line) => <span key={line +[context.lang]}>{[total, <br />, line]}</span>
              )}
        </li>
    )) : textArray.map((paragraph, index) => (
        <p key={"p" + textArray[0]+[context.lang] + index}>
          {paragraph
              .split("\n")
              .reduce((total, line) => <span key={line+[context.lang]}>{[total, <br />, line]}</span>
              )}
        </p>
    ))
  }

  if (children) {
    return (
        <>
          {toFormat(children, !!list)}
        </>
    );
  }

  if (!from[context.lang][val]) {
    return "";
  }

  return (
      <>
        {toFormat(from[context.lang][val], !!list)}
      </>
  );
};
