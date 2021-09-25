import React, {Component} from "react";
import './css/siteinfoCss.css'
import "../App.css";

class SiteInfo extends Component {
    render() {
        return (
            <div className = "siteinfo">
                <header>KUVID-19 웹사이트에 대해...</header>
                <body>
                    <div className = "head">KUVID-19는 왜 만들었나요?</div>
                    <div className = "intro">
                    KUVID-19은 고려대학교의 코로나 확진자에 대한 정보가 체계적으로 관리되고 있지 않고 있다는 점에서 학교를 방문하는 사람들이 교내 코로나에 대한 상황을 보다 더 편리하게
                    확인할 수 있도록 하자는 취지에서 만들어진 웹사이트 입니다.
                    </div>
                    <div className = "head">KUVID-19의 기능은 무엇인가요?</div>
                    <div className = "context">
                    Overview 탭에서는 차트를 통해 교내 코로나 확진자수에 대한 정보를 얻을 수 있습니다.
                    <br/>
                    KU Map 탭에서는 지도에 표시된 건물의 색깔을 통해 방문이 제한되는 건물에 대한 정보를 얻을 수 있습니다.
                    <br/>
                    Quarantine 탭에서는 학교 주변에 코로나 검사를 받을 수 있는 진료소에 대한 정보를 얻을 수 있습니다.
                    <br/>
                    About COVID-19 탭에서는 우한폐렴에 대한 간단한 정보를 얻을 수 있습니다.
                    <br/>
                    Self Checklist 탭에서는 간단한 설문조사를 통한 자가진단을 할 수 있습니다.
                    </div>

                </body>
                <footer>
                    <div className = "contact">
                        <br/>
                        GitHub: <a href = "https://github.com/jsonbsd/kuvid">https://github.com/jsonbsd/kuvid</a>
                        <br/>
                        email: juj7347@naver.com
                        <img src = "/image/blacktiger.png" alt="blacktiger" id = "blacktiger"/>
                    </div>
                </footer>
            </div>
        );
    }
}

export default SiteInfo