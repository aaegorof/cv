import React, { useContext } from "react";
import { StateContext } from "./context";
import { Formatted } from "./helpers";
import "./App.less";
import Joblist from "./Joblist";
import Switch from "./components/Switch";
import photoUrl from "./photo.jpg";
import { general, tech } from "./data";

const App = () => {
  const state = useContext(StateContext);
  const lang = state.lang;


  return (
    <div className="App">
      <header className="header container row">
        <div className="photo-wrap">
          <img src={photoUrl} className="photo" alt={general[lang].name} />
          <Switch
            left="en"
            right="ru"
            checked={lang}
            onChange={val => state.switchLang(val)}
            className="margin-large-t"
          />
        </div>
        <div className="margin-large-l">
          <h1>{general[lang].name} CV</h1>
          <h3>{general[lang].Heducation}</h3>
          <div className="education">
            <div>{general[lang].education}</div>
            <p className="color-ash">{general[lang].degree}</p>
          </div>
          <div className="language">
            <Formatted val="lang" />
          </div>
        </div>
      </header>

      <div className="container">
        <div className="row margin-large-tb">
          <div className="col-lg-6 lg-padding-big-r">
            <h2 className="text-center">{general[lang].Hskills}</h2>
            <div>
              <Formatted val="profText" />
            </div>
            <h4>{general[lang].Hstack}</h4>
            <div className="stack row">
              {tech[lang].stack.map(item => (
                <div key={item}>{item}</div>
              ))}
            </div>
            <h4>CMS:</h4>
            <div className="row cms">
              {tech[lang].cms.map(item => (
                <div key={item}>{item}</div>
              ))}
            </div>
          </div>

          <div className="col-lg-6 lg-padding-big-l">
            <h2 className="text-center">{general[lang].Hsoft}</h2>
            <div>
              <Formatted val="softSkills" />
            </div>
          </div>
        </div>

        <div className="job-list">
          <Joblist lang={lang}/>
        </div>
      </div>
    </div>
  );
};

export default App;
