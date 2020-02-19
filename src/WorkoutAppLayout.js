import React from 'react';
import './App.css';
import OuterFrame from './components/layout/OuterFrame';
import Header from './components/layout/Header';
import SideBar from './components/layout/SideBar';
import MainSection from './components/layout/MainSection';
import { useEffect, useState, useRef } from 'react';
import WorkoutAppMenu from './WorkoutAppMenu';
import WorkoutStore from './stores/WorkoutStore';
import { Provider } from 'react-redux';
import MainWindow from './components/MainWindow';



export default function WorkoutAppLayout(props)
{
    const [open, setOpen] = useState(false);
    const toggleMenu = () => setOpen(!open);
    const node = useRef();

    useEffect(()=>console.log("App Reloading"));

    useOnClickOutside(node, () => setOpen(false));

    const menu_button = (<div className="menu-toggle-container" onClick={() => toggleMenu()}>
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
                        </div>);

     return (
        <Provider store={WorkoutStore}>
            <OuterFrame>
                <div className="header-container">
                    <Header menu_button={()=>menu_button}></Header>
                </div>
                <div className="primary-container">
                    {open?
                    <div ref={node} className="sidebar-container sidebar-show">
                        <SideBar open={open} ><WorkoutAppMenu></WorkoutAppMenu></SideBar>
                    </div>:
                    <div className="sidebar-container">
                        <SideBar open={open} ><WorkoutAppMenu></WorkoutAppMenu></SideBar>
                    </div>}
                
                    <div className="main-container">
                    
                        <MainSection><MainWindow></MainWindow></MainSection>
                    </div>
                </div>
            </OuterFrame>
        </Provider>
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