import React, { useState } from "react";
import moment from "moment";
import "./style.less";

const Timeline = ({
  array,
  dateField,
    header,
  offset = 3,
  lineColor = "green",
  dotColor = "darkgreen",
    direction = "right",
  ItemToShow
}) => {
  const [active, changeActive] = useState(null);
  const start = moment(array[array.length - 1][dateField]);
  const last = moment(array[0][dateField]);
  const allTime = moment.duration(last.diff(start)).asSeconds();

  const toggleItem = index => () => {
    index === active ? changeActive(null) : changeActive(index);
  };

  const sortedArray = array.sort((a,b) => new Date(b[dateField]) -  new Date(a[dateField]))


  return (
      <>
        {header && <h2 className="timeline-header">{header}</h2>}
    <div
      className="timeline"
      style={{
        background: lineColor,
        height: "2px",
        padding: "0 " + offset + "%"
      }}
    >
      <div className={`timeline-active ${direction === "left" ? "reverse":""}`}>
        {sortedArray.map((item, index) => {
          const intend =
            (moment.duration(moment(item[dateField]).diff(start)).asSeconds() *
              100) /
            allTime;
          return (
            <div
              key={intend}
              style={{ left: intend + "%", background: index===active? lineColor : dotColor }}
              className={`timeline-dot ${index === active ? "active" : ""}`}
              onClick={toggleItem(index)}
            >
              <div className="date">
                {moment(item[dateField]).format("MMM YY")}
              </div>
              <div className="timeline-item">{ItemToShow(item)}</div>
            </div>
          );
        })}
      </div>
    </div>
        </>
    //array.map(item => <JobItem item={item} lang={lang}/>)
  );
};

export default Timeline;
