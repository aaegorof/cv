import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "./context";
import { Formatted } from "./helpers";
import "./App.less";
import Joblist from "./Joblist";
import Switch from "./components/Switch";
import photoUrl from "./photo.jpg";
import { general, tech, portfolio } from "./data";
import Lottie from 'react-lottie'
import rocketanimation from "./lotties/rocket"
import topSvg from "./img/top-svg.svg"
import ovalSvg from  "./img/Oval.svg"
import Contacts from "./Contacts"
import Woocommerce from "./Woocommerce";

const App = () => {
  const [products, changeProducts] = useState([])
  const state = useContext(StateContext);
  const lang = state.lang;
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: rocketanimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  useEffect(()=>{
    Woocommerce.getProducts().then(res => {
      console.log(res.data);
      changeProducts(res.data)
    })
  },[])

  return (
    <div className="App">
      <img src={topSvg} className="top-svg"/>
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
        <div className="lg-margin-large-l col-lg-6 heading">
          <h1>{general[lang].name} CV</h1>
          <h3>{general[lang].Heducation}</h3>
          <div className="education">
            <div>{general[lang].education}</div>
            <p className="color-ash">{general[lang].degree}</p>
          </div>
          <div className="language">
            <Formatted val="lang" list/>
          </div>
        </div>
        <div className="col-lg-3 rocket">
        <Lottie options={lottieOptions}
                width={200}
                height={272}
        />
        </div>
      </header>

        <div className="row margin-large-tb container">
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

          <div className="col-lg-6 lg-padding-big-l relative">
            <img src={ovalSvg} className="oval-svg"/>
            <h2 className="text-center">{general[lang].Hsoft}</h2>
            <div>
              <Formatted val="softSkills" />
            </div>
          </div>
        </div>

        <div className="job-list">
          <Joblist lang={lang}/>
        </div>


        <div className="freelance padding-big-tb container">
          <h2 className="text-center uppercase h-bg" text="Portfolio">{general[lang].Hportolio}</h2>
          <div className="row">
          {portfolio[lang].map( project =>
              <div className="project-item" key={project.name}>
                <strong><a href={project.link} target="_blank">{project.name}</a></strong>
                <div className="description">{project.description}</div>
                <div className="labels small tags row">{project.tags.map(tag => <div className="tag" key={tag}>{tag}</div>)}</div>
              </div>
          )}
          </div>
        </div>


      <Contacts />
      <div className="hidden">
        {products.map(product => <div key={product}></div>)}
      </div>
    </div>
  );
};

export default App;
