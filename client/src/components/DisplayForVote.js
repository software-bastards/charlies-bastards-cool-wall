import React from "react";
<<<<<<< HEAD
import "../stylesheets/global.scss";
import "../stylesheets/global.css";
import "../stylesheets/DisplayForVote.scss";

function DisplayForVote({ technology, storeVote }) {
  const handleOptionChange = e => {
=======
import "../stylesheets/DisplayForVote.scss";

function DisplayForVote({ technology, storeVote }) {
  const handleOptionChange = (e) => {
>>>>>>> b869d012f0a3ecb6c77a71fc723bbe7355173d2a
    storeVote(technology, e.target.value);
  };
  return (
    <div
      className="displayforvote--scroll"
      data-test="component-displayforvote"
    >
      <div className="technology--name"> {technology.name}</div>

      <form
        className="cc-selector radio--buttons"
        onChange={handleOptionChange}
      >
        <input type="hidden" value="null" />
        <input type="radio" id="uncool" name="voting" value="uncool" />
        <label className=" visa drinkcard-cc" htmlFor="uncool">
          uncool
        </label>
        <input type="radio" id="cool" name="voting" value="cool" />
        <label className="cool drinkcard-cc" htmlFor="cool">
          cool
        </label>
        <input type="radio" id="subzero" name="voting" value="subzero" />
        <label className="subzero drinkcard-cc" htmlFor="subzero">
          subzero
        </label>
      </form>
    </div>
  );
}
export default DisplayForVote;
<<<<<<< HEAD

/*   <div className="displayforvote--scroll">
      <div className="technology--name"> {technology.name}</div>

      <form
        className="cc-selector radio--buttons"
        onChange={handleOptionChange}
      >
        <input type="hidden" value="null" />
        <input type="radio" id="uncool" name="voting" value="uncool" />
        <label className=" visa drinkcard-cc" htmlFor="uncool"></label>
        <input type="radio" id="cool" name="voting" value="cool" />
        <label className="cool drinkcard-cc" htmlFor="cool"></label>
        <input type="radio" id="subzero" name="voting" value="subzero" />
        <label className="subzero drinkcard-cc" htmlFor="subzero"></label>
      </form>
    </div>
    */
=======
>>>>>>> b869d012f0a3ecb6c77a71fc723bbe7355173d2a
