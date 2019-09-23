import React, { useContext } from "react"
import { general } from "./data";
import { StateContext } from "./context";


const Contacts = () => {
  const state = useContext(StateContext);
  const lang = state.lang;

  return <div className="Contacts-wrap">
    <div className="container">
      <h2>{general[lang].Hcontacts}</h2>
      <div className="row row-equal">
        <div className="contacts">
          <a className="phone" href={`tel:${general.mob}`}><i className="fa fa-phone"></i> {general.mob}</a>
          <a className="mail" href={`mailto:${general.email}`}><i className="fa fa-envelope-open"></i> {general.email}</a>
        </div>
        <div className="socials">
          <a href={general.facebook}><i className="fa fa-facebook-official"></i></a>
          <a href={general.linkedin}><i className="fa fa-linkedin-square"></i></a>
        </div>
      </div>
    </div>
  </div>
}

export default Contacts