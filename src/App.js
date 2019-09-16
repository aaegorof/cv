import React, {useState} from 'react';
import './App.less';
import Joblist from './Job'
import Switch from "./components/Switch"
import photoUrl from "./photo.jpg"
import {general , tech} from "./data";

const App = () => {
  const [lang, switchLang] = useState('en');

  const formatText = (val, data) => {
    const from = data || general
    if ( !from[lang][val] ) {
      return ""
    }
    return (
      from[lang][val].split("\n\n").map((paragraph , index) =>
        <p key={val + index}>
          {paragraph.split('\n').reduce((total, line) => [total, <br />, line])}
        </p>
    )
    )
  }



  const changeLang = val => {
    switchLang(val)
  }

  return (
    <div className="App">
      <header className="header container row">
        <div className="photo-wrap">
          <img src={photoUrl} className="photo" alt={general[lang].name}/>
          <Switch left="en" right="ru" checked={lang} onChange={changeLang} className="margin-large-t"/>
        </div>
        <div className="margin-large-l">
          <h1>{general[lang].name} CV</h1>
          <h3>{general[lang].Heducation}</h3>
          <div className="education">
            <div>{general[lang].education}</div>
            <p className="color-ash">{general[lang].degree}</p>
          </div>
          <div className="language">
            {formatText("lang")}
          </div>

        </div>

      </header>

      <div className="container">
        <div className="row margin-large-tb">


          <div className="col-lg-6 lg-padding-big-r">
            <h2 className="text-center">{general[lang].Hskills}</h2>
            <div>{formatText("profText")}</div>
            <h4>{general[lang].Hstack}</h4>
            <div className="stack row">
              {tech[lang].stack.map(item =>
                  <div key={item}>{item}</div>
              )}
            </div>
            <h4>CMS:</h4>
            <div className="row cms">
              {tech[lang].cms.map(item =>
                  <div key={item}>{item}</div>
              )}
            </div>
          </div>



          <div className="col-lg-6 lg-padding-big-l">
            <h2 className="text-center">{general[lang].Hsoft}</h2>
                <div>{formatText("softSkills")}</div>
          </div>

        </div>


        <div className="job-list">
          <Joblist lang={lang}/>
        </div>

      </div>

    </div>
  );
}

export default App;
