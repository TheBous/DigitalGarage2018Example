import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BasicComponentArrow} from "./components/BasicComponent/BasicComponentArrow";
import {FatherComponent} from "./components/BasicPropsComponent/FatherComponent";
import SetStateComponent from "./components/setState/SetStateComponent";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
                <BasicComponentArrow/>
                <FatherComponent />
                <SetStateComponent/>
            </div>
        );
    }
}

export default App;
