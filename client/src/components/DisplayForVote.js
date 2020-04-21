import React from "react";
import "../stylesheets/DisplayForVote.scss";
import Cool from "../images/cool.svg";
import UnCool from "../images/uncool.svg";
import SubZero from "../images/subzero.svg";

function DisplayForVote({ technology, storeVote }) {
  const handleClickUncool = (e) => {
    storeVote(technology, "uncool");
  };
  const handleClickCool = (e) => {
    storeVote(technology, "cool");
  };
  const handleClickSubZero = (e) => {
    storeVote(technology, "subzero");
  };
  return (
    <div
      className="displayforvote--scroll"
      data-test="component-displayforvote"
    >
      <div className="technology--name"> {technology.name}</div>

      <div className="displayforvote--images_wrap">
        <img
          src={UnCool}
          alt="uncool logo"
          className={
            technology.borderForSelectedVote === "uncool"
              ? "displayforvote--images uncool"
              : "displayforvote--images"
          }
          onClick={handleClickUncool}
        />
        <img
          src={Cool}
          alt="cool logo"
          className={
            technology.borderForSelectedVote === "cool"
              ? "displayforvote--images cool"
              : "displayforvote--images"
          }
          onClick={handleClickCool}
        />
        <img
          src={SubZero}
          alt="subzero logo"
          className={
            technology.borderForSelectedVote === "subzero"
              ? "displayforvote--images subzero"
              : "displayforvote--images"
          }
          onClick={handleClickSubZero}
        />
      </div>
    </div>
  );
}
export default DisplayForVote;