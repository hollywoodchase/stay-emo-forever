import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function Name(props) {
  return (
    <div className="form-group">
      <h2>Stage Name</h2>
      <input className="form-control" {...props} />
    </div>
  );
}

export function Email(props) {
  return (
    <div className="form-group">
      <h2>Your Email</h2>
      <input className="form-control" {...props} />
    </div>
  );
}

export function Selection(props) {
  return (
    <div class="form-group">
      <h2>Your Song Selection</h2>
      <select class="form-control" id="selection" {...props}>
        <option></option>
        <option>Sugarcult - Memory</option>
        <option>All American Rejects - Swing Swing</option>
        <option>The Ataris - Boys of Summer</option>
        <option>New Found Glory - My Friends Over You</option>
        <option>New Found Glory - Hit or Miss</option>
        <option>My Chemical Romance - Teenagers</option>
        <option>Head Automatica - Beating Hearts Baby</option>
        <option>Good Charlotte - Lifestyles of the Rich and Famous</option>
        <option>Finch - Letters to You</option>
        <option>MCR - Helena</option>
        <option>The Used - The Taste of Ink</option>
        <option>Brand New - Okay I Believe You, But My Tommygun Don’t</option>
        <option>Brand New - Seventy Times Seven</option>
        <option>Brand New - The Boy Who Blocked His Own Shot</option>
        <option>Brand New - The Quiet Things No One Ever Knows</option>
        <option>Dashboard Confessional - Hands Down</option>
        <option>Dashboard Confessional - Vindicated</option>
        <option>Fall Out Boy - Chicago is so Two Years Ago</option>
        <option>Fall Out Boy - Sugar, We’re Goin Down</option>
        <option>Something Corporate - Punk Rock Princess</option>
        <option>Taking Back Sunday - A Decade Under the Influence</option>
        <option>Taking Back Sunday - Cute Without the E</option>
        <option>Taking Back Sunday - You Know How I Do</option>
        <option>Taking Back Sunday - You’re So Last Summer</option>
        <option>The Early November - Ever So Sweet</option>
        <option>The Starting Line - Bedroom Talk</option>
        <option>The Starting Line - Best of Me</option>
        <option>The Starting Line - Surprise, Surprise</option>
        <option>Simple Plan - I’d Do Anything</option>
        <option>Armor For Sleep - Car Underwater</option>
        <option>Paramore - Misery Business</option>
        <option>Paramore - Still Into You</option>
        <option>My Chemical Romance - Welcome to the Black Parade</option>
        <option>AFI - Miss Murder</option>
        <option>Hawthorne Heights - Ohio is for Lovers</option>
        <option>Brand New - Jude Law and a Semester Abroad</option>
        <option>MCR - I’m Not Okay</option>
        <option>Panic! At The Disco - I Write Sins Not Tragedies</option>
        <option>Saves the Day - At Your Funeral</option>
        <option>Say Anything - Alive with the Glory of Love</option>
        <option>Story of the Year - Until the Day I Die</option>
        <option>Taking Back Sunday - MakeDamnSure</option>
        <option>Fall Out Boy - Homesick at Space Camp</option>
        <option>Fall Out Boy - Grand Theft Autumn</option>
        <option>Sum 41 - Fat Lip</option>
        <option>Jimmy Eat World - The Middle</option>
      </select>
    </div>
  );
}

export function Wish(props) {
  return (
    <div class="form-group">
      <h2>Which artist do you wish there were more songs for? - Optional</h2>
      <select class="form-control" id="selection" {...props}>
        <option></option>
        <option>Sugarcult</option>
        <option>All American Rejects</option>
        <option>New Found Glory</option>
        <option>My Chemical Romance</option>
        <option>Head Automatica</option>
        <option>Good Charlotte</option>
        <option>Finch</option>
        <option>The Used</option>
        <option>Brand New</option>
        <option>Dashboard Confessional</option>
        <option>Fall Out Boy</option>
        <option>Something Corporate</option>
        <option>Taking Back Sunday</option>
        <option>The Early November</option>
        <option>The Starting Line</option>
        <option>Simple Plan</option>
        <option>Paramore</option>
        <option>Panic! At The Disco</option>
        <option>Saves the Day</option>
        <option>Say Anything</option>
      </select>
    </div>
  );
}

export function Photo(props) {
  return (
    <div className="form-group">
      <h2>Background photo for your performance (URL) - Optional</h2>
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="1" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}
