import React from "react";
import "../../style.css";

function Nav(props) {
  return (
    <div className="navbar-container">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="#">
          <img id="logo-image" src="https://i.ibb.co/3CHm36J/emo-logo.jpg"></img>
        </a>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/requests">Signup</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/calendar">Calendar</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="nav-selection" href="#" aria-haspopup="true" aria-expanded="false">
              <select class="form-control" id="select-list" {...props}>
        <option>SONG LIST</option>
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
      </a>
            </li>
          </ul>
        </div>   
      </nav>
    </div>
  );
}

export default Nav;
