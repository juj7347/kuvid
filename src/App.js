import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Sidebar from "./components/Sidebar"
import Overview from "./components/Overview"
import KUMap from "./components/KUMap"
import Quarantine from "./components/Quarantine"
import AboutCOVID from "./components/AboutCOVID"
import SelfChecklist from "./components/SelfChecklist"
import SiteInfo from "./components/SiteInfo"

class App extends Component {
    render() {
        return (
            <Router>
                <div className="Page">
                    <div className="Side">
                        <Sidebar/>
                    </div>
                    <div className="Contents">
                        <Switch>
                            <Route path="/Overview">
                                <Overview/>
                            </Route>
                            <Route path="/KUMap">
                                <KUMap/>
                            </Route>
                            <Route path="/Quarantine">
                                <Quarantine/>
                            </Route>
                            <Route path="/AboutCOVID">
                                <AboutCOVID/>
                            </Route>
                            <Route path="/SelfChecklist">
                                <SelfChecklist/>
                            </Route>
                            <Route path="/SiteInfo">
                                <SiteInfo/>
                            </Route>
                            <Route>
                                <Overview/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;