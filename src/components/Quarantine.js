//react + map api
import React, {Component} from "react";
import {Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react'
//json
import hospital from './data/hospital.json'
//css
import './css/quarantineCss.css'
import "../App.css";

class Quarantine extends Component {
    //state
    state = {
        activeMarker: {},
        selectedPlace: {},
        showingInfoWindow: false,
    };
      //marker event
    onMarkerHover = (props, marker) => {
        console.log(this.state.selectedPlace.stat);
        this.setState({
        activeMarker: marker,
        selectedPlace: props,
        showingInfoWindow: true,
        });
    }
    
    
    onInfoWindowClose = () => {
        this.setState({
        activeMarker: null,
        showingInfoWindow: false
        });
    }
    
    render() {
        return (
            <div className = "quarantine">
                <div className = "partition">
                    <Map
                    google={this.props.google} 
                    initialCenter={{
                        lat: 37.587825930238076, lng: 127.02899026167324
                    }}
                    zoom = {15}
                    streetViewControl = {false}
                    mapTypeControl = {false}
                    fullscreenControl = {false}
                        
                    >
                        {hospital.data.map(item => (
                            <Marker
                            key = {item.id}
                            name={item.name}
                            position={{ lat: item.lat, lng: item.lng }}
                            onMouseover={this.onMarkerHover} 
                            phone = {item.phone}
                            add = {item.add}
                            link = {item.link}
                            />
                        ))}

                        <InfoWindow
                        marker={this.state.activeMarker}
                        onClose={this.onInfoWindowClose}
                        visible={this.state.showingInfoWindow}
                        >
                        <h1>{this.state.selectedPlace.name}</h1>
                        </InfoWindow>
                    </Map>


                </div>

                <div className = "partition">
                        <ul id = "hospital_list"
                        >
                            {hospital.data.map(item => (
                                <li>
                                    <a 
                                    href = {item.link}
                                    onClick = {this.textClick}
                                    >
                                        <h1>{item.name}</h1>
                                    </a>
                                    <p>
                                        ??????: {item.phone}
                                        <br/>
                                        ??????: {item.add}
                                    </p>
                                    <hr></hr>
                                </li>    
                            ))}
                            
                        </ul>
                </div>

                <div className = "partition">
                    <div className = "context">
                        <p>
                        ???????????? ??????????????? ??????????????? ???????????????. ?????????19????????????????? ???????????? ?????? ?????? ????????? ??????????????? ?????? ???????????? ???????????????. 
                        <br/>
                        ??? ????????? ????????? ???????????? ?????? ????????? ????????? ???????????? ?????? ????????? ??? 12?????? ??? ????????? ?????? ??? ????????????.

                        </p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyDz61JqIZVDp2KR2Oe_F_1B9U28v0Z3LeI"
  })(Quarantine);