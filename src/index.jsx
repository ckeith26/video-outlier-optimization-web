import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, NavLink, useParams } from 'react-router-dom';
import './style.scss';
import Welcome from './components/welcome';
import Contact from './components/contact';

const About = (props) => {
  return <div> All there is to know about me </div>;
};

const Nav = (props) => {
  return (
    <nav id='nav'>
      <div class='logo'/>
      <ol id='list'>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/contact">About</NavLink></li>
      </ol>
    </nav>
  );
};

const Test = (props) => {
  const { id } = useParams();
  return <div> ID: {id} </div>;
};

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const App = (props) => {
  return (
  <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<FallBack />} />
    </Routes>

  </BrowserRouter>
  );
};

const root = createRoot(document.getElementById('main'));
root.render(<App />);
