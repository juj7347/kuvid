//react + map api
import React, {Component} from "react";
import {Map, GoogleApiWrapper, Marker, InfoWindow, Polygon, Polyline} from "google-maps-react"
//json
import bldinfo from './data/bldinfo.json'
import pathinfo from './data/path.json'
//control buttons
import InfoButton from "./infoButton";
import Legend from "./legend";
//css
import "../App.css";
import './css/imageCss.css'
import './css/controlCss.css'
const colors = ["#00FF00", "#FFFF00","#FF0000"]

class KUMap extends Component {
    //state
    state = {
        activeMarker: {}, //current marker
        selectedPlace: {}, //current props
        showingInfoWindow: false, //infowindow visibility
        showPath: false, 
    };

    //marker click event
    onMarkerClick = (props, marker) => {
        this.setState({
        activeMarker: marker,
        selectedPlace: props,
        showingInfoWindow: true,
        });
    }
    
    onInfoWindowClose = () =>
        this.setState({
        activeMarker: null,
        showingInfoWindow: false
    });
    //////////////////////////////////////////////////////////

    pathClick = () => {
        this.setState(prevState => ({
            ...this.state,
            showPath: !prevState.showPath
        }));
    } //toggle 동선

    ////////////////////////////////////////////////////////////

    render() {
        return (
            <div className = "kumap">
                <Map
                google = {this.props.google}
                initialCenter={{
                    lat: 37.58819777570637, lng: 127.03161986073644
                }}
                zoom = {19}
                streetViewControl = {false}
                mapTypeControl = {false}
                fullscreenControl = {false}
                >
                        {bldinfo.data.map(item => (
                            <Marker
                            key={item.id}
                            title={item.title}
                            name={item.name}
                            position={{ lat: item.lat, lng: item.lng }}
                            visitor = {item.visitor}
                            onClick={this.onMarkerClick}  
                            stat = {item.stat}
                            img = {item.img}
                            />
                        ))}

                        <InfoWindow
                        marker={this.state.activeMarker}
                        onClose={this.onInfoWindowClose}
                        visible={this.state.showingInfoWindow}
                        >
                        <div>
                            <img src = {this.state.selectedPlace.img} alt = {this.state.selectedPlace.title} id = "photo"></img>
                            <h1 id = "title">{this.state.selectedPlace.name}</h1>
                            <br></br>
                            <hr></hr>
                            <p id = "visitor">
                    
                                확진자 방문:{this.state.selectedPlace.visitor?.map(visitor => <><br/>{visitor}</> )}
                                
                            </p>
                        </div>
                        </InfoWindow>

                        {bldinfo.data.map(item => (
                            <Polygon
                            path={item.path} 
                            fillColor= {colors[item.stat]}
                            strokeColor = {colors[item.stat]}
                            strokeOpacity = {0.5}
                            />
                        ))}

                        {this.state.showPath && pathinfo.path.map(item => (
                            <Polyline
                            path={item}
                            strokeColor = '#FF0000'
                            strokeOpacity = {0.5}
                            />
                        ))}
                </Map>
                
                <button
                        id = "pathbutton"
                        onClick = {this.pathClick}
                        >
                            동선
                </button>
                
                <InfoButton/>       
                <Legend/>

            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyDz61JqIZVDp2KR2Oe_F_1B9U28v0Z3LeI"
  })(KUMap);