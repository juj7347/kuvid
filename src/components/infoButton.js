import React, {Component} from 'react'
import './css/wordStyleCss.css'
import './css/imageCss.css' 
import './css/controlCss.css' 
import red from '../icon_images/redish.png'
import yellow from '../icon_images/yellowish.png'
import green from '../icon_images/green.png'

export default class InfoButton extends Component {
    state = {
        showInfo: false
    };

    infoClick = () => {
        this.setState(prevState => ({
            ...this.state,
            showInfo: !prevState.showInfo
        }));
    }

    render () {
        return (
            <div className = "infobutton">
                <button
                id = "showinfo"
                onClick = {this.infoClick}
                >
                    i
                </button>

                {this.state.showInfo && (
                    <div className = "info">
                        <p>
                            확진자의 동선에 따른 고려대학교의 각 건물별 위험도를 색깔로 나타내었습니다.
                            <br></br>
                            <img src = {red} alt="red" id = "icon"></img> 위험상태 - 확진자 발생 혹은 방문 3일 이내의 건물
                            <br></br>
                            <img src = {yellow} alt="yellow" id = "icon"></img> 주의상태 - 확진자 발생 혹은 방문 1주일 이내의 건물
                            <br></br>
                            <img src = {green} alt="green" id = "icon"></img> 안전상태 - 방역이후 출입이 안전한 건물
                            <br></br><br></br>
                            또한 동선 버튼을 통해 확진자의 동선을 볼 수 있고 건물의 마커를 클릭하면 확진자의 방문 날짜를 확인할 수 있습니다.
                        </p>
                    </div>
                )}
            </div>
        );
    }
}