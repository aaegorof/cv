import React from "react";
import {general, jobs } from "./data";
import moment from "moment"
import 'moment/locale/ru';
import 'font-awesome/css/font-awesome.min.css';
import {Formatted} from "./helpers";

const Joblist = ({lang}) => {
  const joblist = jobs[lang]
  moment.locale(lang)

  return (
   joblist.map(job =>
       <div className="job-item" key={job.company}>
         <h4>{job.position}</h4>
         <div className="time">
           {moment(job.startDate).format("MMMM YYYY")}
           {job.endDate ? moment(job.endDate).format(" - MMMM YYYY") : "..."}
         </div>
         <div className="company-name">{job.company} {job.website ? <a href={job.website} className="fa fa-external-link site" target="_blank"></a> : ""}</div>
         {job.stack.length > 0 && (
             <div className="stack-wrap">
             <strong>{general[lang].Hstack}</strong>
             <div className="stack row font-small">
               {job.stack.map( item => <div key={item}>{item}</div>)}
             </div>
             </div>
         )}
         <div className="job-description">
           <Formatted>{job.description}</Formatted>
         </div>


   </div>)
  )
};

export default Joblist;