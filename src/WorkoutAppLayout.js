import React from 'react';
import './App.scss';
import SideBar from './components/layout/SideBar';
import { useEffect, useState, useRef } from 'react';
import WorkoutAppMenu from './WorkoutAppMenu';
import WorkoutStore from './stores/WorkoutStore';
import { Provider, useSelector } from 'react-redux';
import MainWindow from './components/MainWindow';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export default function WorkoutAppLayout(props)
{
    const [open, setOpen] = useState(false);
    const toggleMenu = () => setOpen(!open);
    const node = useRef();
    const loggedin = useSelector(state=>state.login);
    console.log("HOOK");
    console.log(loggedin);

    useEffect(()=>console.log("App Reloading"));

    useOnClickOutside(node, () => setOpen(false));

    const menu_button = (
    <div className="header-container">
      <div className="header">
        <div className="header-left">
          <div className="menu-toggle-container" onClick={() => toggleMenu()}>
          <div className="horizontal-flex">
            <div className="side-spacer"></div>
            <div className="menu-toggler">
              <div className="toggle-spacer"></div>
              <div></div>
              <div></div>
              <div></div>
              <div className="toggle-spacer"></div>
            </div>
            <div className="side-spacer"></div>
          </div>
        </div>
        </div>
        <div className="header-right">
          {loggedin.username?<span>Welcome {loggedin.username}</span>:""}
        </div>
      </div>
    </div>);

     return (
       <Router>
            {menu_button}
            <div className="primary-container">
              {open?
              <div ref={node} className="sidebar-container sidebar-show">
                  <SideBar><WorkoutAppMenu></WorkoutAppMenu></SideBar>
              </div>:
              <div className="sidebar-container">
                  <SideBar><WorkoutAppMenu></WorkoutAppMenu></SideBar>
              </div>}
          
              <div className="main-container">
                <MainWindow></MainWindow>
              </div>
          </div>
            
        </Router>
  );
}

const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
      const listener = event => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener('mousedown', listener);
  
      return () => {
        document.removeEventListener('mousedown', listener);
      };
    },
    [ref, handler],
    );
  };