import React from "react";
import "../stylesheets/DisplayForVote.scss";
import Cool from "../images/cool.svg";
import UnCool from "../images/uncool.svg";
import SubZero from "../images/subzero.svg";

function DisplayForVote({ technology, storeVote }) {
  /**
   * @method handleClickUncool - A function to capture the uncool vote on click, calls the storeVote function in the parent
   * @param {name:String, id: Number} technology
   * @param {String} storevote
   */
  const handleClickUncool = (e) => {
    storeVote(technology, "uncool");
  };

  /**
   * @method handleClickCool - A function to capture the cool vote on click, calls the storeVote function in the parent
   * @param {name:String, id: Number} technology
   * @param {String} storevote
   */
  const handleClickCool = (e) => {
    storeVote(technology, "cool");
  };

  /**
   * @method handleClickSubZero - A function to capture the subzero vote on click, calls the storeVote function in the parent
   * @param {name:String, id: Number} technology
   * @param {String} storevote
   */
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
          data-test="uncool-icon"
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
          data-test="cool-icon"
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
          data-test="subzero-icon"
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