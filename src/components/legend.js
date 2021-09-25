import React, {Component} from 'react'
import './css/controlCss.css'
import red from '../icon_images/redish.png'
import yellow from '../icon_images/yellowish.png'
import green from '../icon_images/green.png'

export default class Legend extends Component {
    render() {
        return (
            <div className ="legend">
                <div className = "title">
                    건물상태
                </div>
                <div className = "content">
                    <img src = {red}
                    alt = "red"
                    id = "icon"></img>
                     &nbsp;위험
                    <br></br>
                    <img src = {yellow}
                    alt = "yellow"
                    id = "icon"></img>
                     &nbsp;주의
                    <br></br>
                    <img src = {green}
                    alt = "green"
                    id = "icon"></img>
                     &nbsp;안전
                </div>
            </div>
        )
    }
}