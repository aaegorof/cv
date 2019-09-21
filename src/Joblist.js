import React, {useContext} from "react";
import {general, jobs } from "./data";
import moment from "moment"
import 'moment/locale/ru';
import 'font-awesome/css/font-awesome.min.css';
import {Formatted} from "./helpers";
import "./jobs.less"
import Timeline from "./components/Timeline";
import { StateContext } from "./context";


const JobItem = ({job}) => {
  const state = useContext(StateContext);
  const lang = state.lang;

  return <div className="job-item" key={job.company}>
    <h3 className="company-name">{job.website ?
        <a href={job.website} className="fa fa-external-link site" target="_blank"></a> : ""}{job.company}</h3>
    <div className="time">
      {moment(job.startDate).format("MMMM YYYY")}
      {job.endDate ? moment(job.endDate).format(" - MMMM YYYY") : "..."}
    </div>
    <div className="job-position">{job.position}</div>
    {job.stack.length > 0 && (
        <div className="stack-wrap">
          <div>{general[lang].Hstack}</div>
          <div className="stack row font-small">
            {job.stack.map(item => <div key={item}>{item}</div>)}
          </div>
        </div>
    )}
    <div className="job-description">
      <Formatted>{job.description}</Formatted>
    </div>


  </div>
}

const JobComponent = job => <JobItem job={job}/>

const Joblist = props => {
  const state = useContext(StateContext);
  const lang = state.lang;
  const joblistSorted = jobs[lang].sort((a, b) => new Date(b.startDate) -  new Date(a.startDate) )

  moment.locale(lang)
  return (
      <Timeline array={joblistSorted} dateField="startDate" header={general[lang].Hexp} lineColor="red" dotColor="purple" ItemToShow={JobComponent} direction="left"/>
  )
};

export default Joblist;
