import React, {Component} from "react";
import "../App.css";
import CumulativeBar from "./BarChart"; //npm install @nivo/bar + @nivo/core
import CumulativePie from "./PieChart"; //@nivo/pie
import left from '../icon_images/left-arrow.png'
import right from '../icon_images/right-arrow.png'
import banner1 from '../icon_images/banner1.png'
import banner2 from '../icon_images/banner2.png'
import banner3 from '../icon_images/banner3.png'
import './css/sliderCss.css'

const data = [8,3,4];

class Overview extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            images: [
                banner1,
                banner2,
                banner3
            ],
            currentIndex: 0,
            translateValue: 0
        }
    }
    
    goToPrevSlide = () => {
        if(this.state.currentIndex === 0)
            return;
        
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + this.slideWidth()
        }))
    }
    
    goToNextSlide = () => {
        if(this.state.currentIndex === this.state.images.length - 1) {
            return this.setState({
            currentIndex: 0,
            translateValue: 0
            })
        }
    
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }));
    }
    
    slideWidth = () => {
        return document.querySelector('.slide').clientWidth
    }
    
    render() {
        return (
            <div className = "overview">
                <header>
                    교내 코로나19 확진자 현황
                    <p>코로나 바이러스 감염증-19 국내 발생현황 (5.25. 00시 기준)</p>
                    <hr/>
                </header>
                <div className = "chart_title">
                    <div id = "barChart_title">
                        교내 누적 확진자 현황
                    </div>
                    <div id = "pieChart_title">
                        단과대학 확진자 현황
                    </div>
                    </div>
                <div className = "body"> 
                    <div className = "partition">
                        <CumulativeBar/>
                    </div>
                    <div className = "partition">
                        <CumulativePie/>
                    </div>
                    <div className = "partition">
                        <div className = "head">
                            Notices &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href = "http://www.korea.ac.kr/user/boardList.do?boardId=487389&siteId=university&id=university_060207000000">more>></a>
                        </div>
                        <hr width = "700px"/>
                        <ul>
                            <li>[방역] 공과대학 창의고나 및 신공학관 건물 폐쇄 2021-05-23</li>
                            <li>[공지] 과학도서관 확진자 발생 2021-05-24</li>
                        </ul>

                    </div>
                    <div className = "partition">
                        <div className="slider">
                        <div className="slider-wrapper"
                            style={{
                            transform: `translateX(${this.state.translateValue}px)`,
                            transition: 'transform ease-out 0.45s'
                            }}>
                            {
                                this.state.images.map((image, i) => (
                                <Slide key={i} image={image} />
                                ))
                            }
                        </div>
                        <LeftArrow
                        goToPrevSlide={this.goToPrevSlide}
                        />
                        <RightArrow
                        goToNextSlide={this.goToNextSlide}
                        />
                        </div>
                    </div>
                </div>
                <div className = "corona_status">
                    <ul>
                        <li>
                            <img src = "/image/user.png" alt="user" id = "imoji"/>&nbsp;&nbsp;&nbsp;{data[0]} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;확진자
                        </li>
                        <li>
                            <img src = "/image/intravenous.png" alt="intravenous" id = "imoji"/>&nbsp;&nbsp;&nbsp;{data[1]} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;치료중
                        </li>
                        <li>
                            <img src = "/image/verified.png" alt="verified" id = "imoji"/>&nbsp;&nbsp;&nbsp;{data[2]} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;완치자
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

const Slide = ({ image }) => {
    const styles = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
    }
    return <div className="slide" style={styles}></div>
}

const LeftArrow = (props) => {
    return (
        <div className="backArrow arrow" onClick={props.goToPrevSlide}>
            <img src = {left} alt="left" id = "arrow_size"></img>
            <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
        </div>
    );
}

const RightArrow = (props) => {
    return (
        <div className="nextArrow arrow" onClick={props.goToNextSlide}>
            <img src = {right} alt="right" id = "arrow_size"></img>
            <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
        </div>
    );
}

export default Overview;