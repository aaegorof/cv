import React, { useState } from "react";
import moment from "moment";
import "./style.less";
import Arrow from "../Arrow/Arrow";


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
  const [activeIndex, changeActiveIndex] = useState(initialSlide);
  const start = moment(array[array.length - 1][dateField]);
  const last = moment(array[0][dateField]);
  const allTime = moment.duration(last.diff(start)).asSeconds();

  const toggleItem = index => () => {
    index === activeIndex ? changeActiveIndex(null) : changeActiveIndex(index);
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
                    background: index === activeIndex ? lineColor : dotColor
                  }}
                  className={`timeline-dot ${index === activeIndex ? "active" : ""}`}
                  onClick={toggleItem(index)}
                >
                  <div className="date">
                    {moment(item[dateField]).format("MMM YY")}
                  </div>
                  {!likeSlide && (<div className="timeline-item">{ItemToShow(item)}</div>)}
                </div>
              );
            })}
          </div>
        </div>
        {likeSlide && (
          <div className="timeline-slide-wrap">
            {sortedArray.map((item, index) => (
              <div
                className={`timeline-item ${activeIndex === index && "showed"}`}
                key={index}
              >
                {ItemToShow(item)}
                <div className="slides-nav">
                  <div className="current">{activeIndex +1}</div>
                  <div className="from"> / {sortedArray.length}</div>
                </div>
              </div>
            ))}

          </div>
        )}
        <div className="timeline-nav">
          { (activeIndex-1 >= 0) && <Arrow direction="left" handler={toggleItem(activeIndex-1)}/>}
          {  (activeIndex+1 < sortedArray.length) && <Arrow direction="right" handler={toggleItem(activeIndex+1)}/>}
        </div>
      </div>
    </>
    //array.map(item => <JobItem item={item} lang={lang}/>)
  );
};

export default Timeline;
