// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Requests from "./pages/Requests";
// import Home from "./pages/Home";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";

// function App() {
//   return (
//     <Router>
//       <div>
//         <Nav />
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/requests" component={Requests} />
//           <Route exact path="/books/:id" component={Detail} />
//           <Route component={NoMatch} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/users">
//             <Users />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }

// import React from 'react';
// // import logo from './logo.svg';
// // import './App.css';
// import Carousel from 'react-bootstrap/Carousel';
// import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';


// function App() {
//   return (
//     <Router>
//       {/* <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//         </p>
//           <Button>Hello</Button>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//         </a>
//         </header> */}
//       <Switch>
//         {/* <Route path="/about">
//             <About />
//           </Route> */}
//         <Route
//           path="/signup"
//           render={() =>
//             <div className="signup">
//               <h1>Lalala</h1>
//               <Carousel>
//                 <Carousel.Item>
//                   <img
//                     className="d-block w-100"
//                     src="https://i.ibb.co/wRB0Jj5/bnmirror.jpg"
//                     alt="First slide"
//                   />
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <img
//                     className="d-block w-100"
//                     src="https://i.ibb.co/68LjfS1/fobmirror.jpg"
//                     alt="Third slide"
//                   />
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <img
//                     className="d-block w-100"
//                     src="holder.js/800x400?text=Third slide&bg=20232a"
//                     alt="Third slide"
//                   />
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <img
//                     className="d-block w-100"
//                     src="holder.js/800x400?text=Third slide&bg=20232a"
//                     alt="Third slide"
//                   />
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <img
//                     className="d-block w-100"
//                     src="holder.js/800x400?text=Third slide&bg=20232a"
//                     alt="Third slide"
//                   />
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <img
//                     className="d-block w-100"
//                     src="holder.js/800x400?text=Third slide&bg=20232a"
//                     alt="Third slide"
//                   />
//                 </Carousel.Item>
//               </Carousel>
//             </div>}
//         ></Route>
//       </Switch>


//       {/* </div> */}
//     </Router>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Requests from "./components/Requests";
// import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
// import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route
            exact path="/"
            render={() =>
              <div className="signup">
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://i.ibb.co/wRB0Jj5/bnmirror.jpg"
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://i.ibb.co/68LjfS1/fobmirror.jpg"
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://i.ibb.co/1MS7GyR/mcrmirror.jpg"
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://i.ibb.co/prnhtjd/tbsmirror.jpg"
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://i.ibb.co/M6hhGQG/tslmirror.jpg"
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://i.ibb.co/pxrLVBq/usedmirror.jpg"
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>}
          ></Route>
          {/* <Route
            path="/requests"
            render={() =>
              <div>
                <h1>Hello</h1>
              </div>}
          ></Route> */}
          <Route exact path="/requests" component={Requests} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

