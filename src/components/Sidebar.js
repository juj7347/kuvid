import React, {Component} from "react"
import {Link} from "react-router-dom"
import "../App.css"

import KUHorang from "../icon_images/ku_horang.png"
import imgInfo from "../icon_images/info.png"
import imgAbout from "../icon_images/about.png"
import imgChecklist from "../icon_images/checklist.png"
import imgOverview from "../icon_images/overview.png"
import imgMap from "../icon_images/map.png"
import imgNeedle from "../icon_images/needle.png"

const UpperSidebarData = [
    {
        title: "Overview",
        icon: <img className="tab-icon" src={imgOverview} alt="overview" />,
        link: "/Overview"
    },
    {
        title: "KU Map",
        icon: <img className="tab-icon" src={imgMap} alt="map" />,
        link: "/KUMap"
    },
    {
        title: "Quarantine",
        icon: <img className="tab-icon" src={imgNeedle} alt="needle" />,
        link: "/Quarantine"
    }
]

const MiddleSidebarData = [
    {
        title: "About COVID-19",
        icon: <img className="tab-icon" src={imgAbout} alt="about" />,
        link: "/AboutCOVID"
    },
    {
        title: "Self Checklist",
        icon: <img className="tab-icon" src={imgChecklist} alt="checklist" />,
        link: "/SelfChecklist"
    }
]

const LowerSidebarData = [
    {
        title: "Site Info.",
        icon: <img className="tab-icon" src={imgInfo} alt="info" />,
        link: "/SiteInfo"
    }
]

class Sidebar extends Component {
    render() {
        return (
            <div className="Sidebar">
                <div className="SidebarHeader">
                    <div id="sidebar-header-icon">
                        <img className="SiteLogo" src={KUHorang} alt="horang"
                            onClick={()=>{window.location.pathname = "/Overview"}}/>
                    </div>
                    <div id="sidebar-header-title">
                        <h2 className="Title">KU COVID-19</h2>
                        <h3 className="Title">Dashboard</h3>
                    </div>
                </div>
                <div className="SidebarList">
                    {/*Upper sidebar*/}
                    <ul className="UpperSidebarList">
                        {UpperSidebarData.map((val, key) => {
                            return (
                                <li key={key}
                                    className={"row " + (window.location.pathname === val.link ? "active" : "")}
                                    onClick={() => {
                                        window.location.pathname = val.link
                                    }}>
                                    <div id="icon">
                                        {val.icon}
                                    </div>
                                    <Link id="title" to={val.link}>{val.title}</Link>
                                </li>
                            );
                        })}
                    </ul>
                    {/*Middle sidebar*/}
                    <ul className="MiddleSidebarList">
                        {MiddleSidebarData.map((val, key) => {
                            return (
                                <li key={key}
                                    className={"row " + (window.location.pathname === val.link ? "active" : "")}
                                    onClick={() => {
                                        window.location.pathname = val.link
                                    }}>
                                    <div id="icon">
                                        {val.icon}
                                    </div>
                                    <Link id="title" to={val.link}>{val.title}</Link>
                                </li>
                            );
                        })}
                    </ul>
                    {/*Lower sidebar*/}
                    <ul className="LowerSidebarList">
                        {LowerSidebarData.map((val, key) => {
                            return (
                                <li key={key}
                                    className={"row " + (window.location.pathname === val.link ? "active" : "")}
                                    onClick={() => {
                                        window.location.pathname = val.link
                                    }}>
                                    <div id="icon">
                                        {val.icon}
                                    </div>
                                    <Link id="title" to={val.link}>{val.title}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar