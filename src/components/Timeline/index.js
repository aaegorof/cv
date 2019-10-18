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
  ItemToShow,
  likeSlide = true,
  initialSlide = null
}) => {
  const [active, changeActive] = useState(initialSlide);
  const start = moment(array[array.length - 1][dateField]);
  const last = moment(array[0][dateField]);
  const allTime = moment.duration(last.diff(start)).asSeconds();

  const toggleItem = index => () => {
    index === active ? changeActive(null) : changeActive(index);
  };

  const sortedArray = array.sort(
    (a, b) => new Date(b[dateField]) - new Date(a[dateField])
  );

  return (
    <>
      {header && <h2 className="timeline-header h-bg" text="Experience">{header}</h2>}
      <div className={`timeline ${likeSlide ? "likeSlide" : ""}`}>
        <div
          className={`timeline-active ${direction === "left" ? "reverse" : ""}`}
          style={{
            padding: "0 " + offset + "%",
            background: lineColor,
            height: "2px"
          }}
        >
          <div className="relative">
            {sortedArray.map((item, index) => {
              const intend =
                (moment
                  .duration(moment(item[dateField]).diff(start))
                  .asSeconds() *
                  100) /
                allTime;
              return (
                <div
                  key={intend}
                  style={{
                    left: intend + "%",
                    background: index === active ? lineColor : dotColor
                  }}
                  className={`timeline-dot ${index === active ? "active" : ""}`}
                  onClick={toggleItem(index)}
                >
                  <div className="date">
                    {moment(item[dateField]).format("MMM YY")}
                  </div>
                  {!likeSlide && (
                    <div className="timeline-item">{ItemToShow(item)}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        {likeSlide && (
          <div className="timeline-slide-wrap">
            {sortedArray.map((item, index) => (
              <div
                className={`timeline-item ${active === index && "showed"}`}
                key={index}
              >
                {ItemToShow(item)}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
    //array.map(item => <JobItem item={item} lang={lang}/>)
  );
};

export default Timeline;
