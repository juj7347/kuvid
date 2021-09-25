import React, { Component } from 'react'
import './css/AboutCOVID.css'

class AboutCOVID extends Component {
    
    render() {
        return (
            <div className="about_body">
                <header className="about_header">
                    코로나19란?
                    <hr/>
                </header>
                <div className="about_body_contents">
                    <div id="about_introduction">
                        <div className = "about_subtitle_wrapper">
                            <div className = "about_subtitle_content">
                                <h1>개요</h1>
                            </div>
                            <div className = "about_subtitle_icon">
                                <img src = "/image/about_overview.png" alt="about_overview" className="AboutCOVID_icon"/>
                            </div>
                        </div>
                        
                        <p>
                            코로나바이러스감염증-19(코로나19, 영어: coronavirus disease 2019, COVID-19)는 SARS-CoV-2 바이러스에 의해 전파되는 중증급성호흡기증후군 질환이다.
                            이 새로운 바이러스와 질병은 2019년 12월 중국 우한에서 처음 보고되었고, 현재 전 세계에 확산되었다.
                            "2019-nCoV 급성호흡기질환"이라는 이름은 세계보건기구(WHO)의 임시 명칭이었다.
                            코로나 바이러스의 변이된 바이러스이며 사스, 메르스와 형태가 비슷하다.
                            하지만 전염성이 높아 세계적 확산세가 빨라지고 있으며, 치명률도 높다.
                            주로 감염자의 비말(침방울)이 호흡기나 눈·코·입의 점막으로 침투될 때 전염된다.
                            감염되면 약 2~14일(추정)의 잠복기를 거친 뒤 발열(37.5도) 및 기침이나 호흡곤란 등 호흡기 증상,
                            폐렴이 주증상으로 나타나지만 무증상 감염 사례 빈도도 높게 나오고 있다.
                        </p>
                    </div>
                    
                    <div id="about_symptom">
                        <div className = "about_subtitle_wrapper">
                            <div className = "about_subtitle_content">
                                <h1>증상</h1>
                            </div>
                            <div className = "about_subtitle_icon">
                                <img src = "/image/about_fever.png" alt="about_fever" className="AboutCOVID_icon"/>
                            </div>
                        </div>

                        <p>
                            임상 증상은 무증상, 경증, 중등증, 중증까지 다양.
                            주요 증상으로는 발열(37.5℃ 이상), 기침, 호흡곤란, 오한, 근육통, 두통, 인후통, 후각·미각소실
                            그 외에 피로, 식욕감소, 가래, 소화기증상(오심, 구토, 설사 등), 혼돈, 어지러움, 콧물이나 코막힘, 객혈, 흉통, 결막염, 피부 증상 등이 다양하게 나타남
                        </p>
                    </div>

                    <div id="about_prop_path">
                        <div className = "about_subtitle_wrapper">
                            <div className = "about_subtitle_content">
                                <h1>전파 경로</h1>
                            </div>
                            <div className = "about_subtitle_icon">
                                <img src = "/image/about_prop.png" alt="about_prop" className="AboutCOVID_icon"/>
                            </div>
                        </div>
                        <p>
                            주된 전파경로는 감염자의 호흡기 침방울(비말)에 의한 전파
                            사람 간에 전파되며, 대부분의 감염은 감염자가 기침, 재채기, 말하기, 노래 등을할 때 발생한 호흡기 침방울(비말)을다른사람이 밀접접촉(주로 2m 이내)하여 발생
                            현재까지 연구결과에 의하면, 비말 이외, 표면접촉, 공기 등을 통해서도 전파가 가능하나, 공기전파는 의료기관의에어로졸 생성 시술, 밀폐된공간에서 장시간 호흡기 비말을 만드는환경등 특정 환경에서 제한적으로 전파되는 것으로 알려짐
                            감염된 사람과의 직접 접촉(악수 등) 또는 매개체(오염된 물품이나 표면)를 만진 후, 손을 씻기 전 눈, 코, 입 등을 만짐으로 바이러스 전파
                        </p>
                    </div>
                    
                    <div id="about_diagnosis">
                        <div className = "about_subtitle_wrapper">
                            <div className = "about_subtitle_content">
                                <h1>진단 및 검사</h1>
                            </div>
                            <div className = "about_subtitle_icon">
                                <img src = "/image/about_diagnosis.png" alt="about_diagnosis" className="AboutCOVID_icon"/>
                            </div>
                        </div>

                        <p>
                            우리나라의 경우 코로나19 발생 초기에는 판 코로나바이러스 검사법(Conventional PCR)과 염기서열분석 일치 여부를 통한 확진 검사를 진행했다.
                            이는 의심환자에 대해 코로나바이러스 계열인지 여부(판코로나 검사법)를 확인한 뒤
                            양성반응이 나오면 환자 검체에서 나온 바이러스 유전자 염기서열을 분석해 검사를 진행하는 것으로, 약 1~2일이 소요됐다.
                            그러나 1월 31일부터는 코로나19만을 타깃으로 하는 새 검사법,
                            이른바 ‘RT-PCR'이 개발되면서 질병관리본부(국립인천공항검역소 포함)와 전국 18개 보건환경연구원에서부터 적용됐다.
                            이 검사법은 판 코로나 검사처럼 코로나바이러스 전체 계열이 아닌 코로나19를 특정해 진단할 수 있는 '시약 키트'가 핵심으로,
                            검사 6시간 이내 결과를 확인할 수 있다. 이 키트는 2월 7일부터 민간병원에도 보급되면서, 코로나19의 신속한 진단이 가능해졌다.
                            
                            검체 채취가 가능한 선별진료소 및 일반 의료기관에서 증상 유무와 관계없이 무료고 검사가 가능하다.
                            질병관리청 홈페이지에서 진료 가능한 선별진료소를 확인할 수 있다.
                            질병관리청 홈페이지→코로나바이러스감염증-19→선별진료소 및 국민안심병원 찾기
                            또는 질병관리청 콜센터(1339, 지역번호＋120) 또는 보건소와 상담
                        </p>
                    </div>

                    <div id="about_prevention">
                        <div className = "about_subtitle_wrapper">
                            <div className = "about_subtitle_content">
                                <h1>예방수칙</h1>
                            </div>
                            <div className = "about_subtitle_icon">
                                <img src = "/image/about_prevention.png" alt="about_prevention" className="AboutCOVID_icon"/>
                            </div>
                        </div>

                        <p>
                            1. 실내 시설, 밀집된 실외에서는 반드시 마스크 착용하기
                            ※ 일반관리 시설, 대중교통, 집회, 시위장, 의료기관·약국, 요양시설 및 주야간 보호시설, 종교시설, 실내 스포츠 경기장, 고위험 사업장, 지자체에 신고·협의된 500인 이상 모임·행사에서는 마스크 의무적으로 착용<br />
                            2. 흐르는 물에 비누로 손을 30초 이상 꼼꼼하게 자주 씻기<br />
                            3. 환기가 안되고 많은 사람이 가까이 모이는 장소는 방문 자제하기<br />
                            4. 사람과 사람 사이, 두 팔 간격 2m(최소 1m) 거리두기<br />
                            5. 씻지 않은 손으로 눈·코·입 만지지 않기<br />
                            6. 기침이나 재채기할 때 옷소매나 휴지로 입과 코를 가리기<br />
                            7. 매일 주기적으로 환기하고 자주 만지는 표면은 청소·소독하기<br />
                            8. 발열, 호흡기 증상(기침이나 호흡곤란 등)이 있는 사람과 접촉 피하기<br />
                            9. 매일 본인의 발열, 호흡기 증상 등 코로나바이러스감염증-19 임상증상 확인하기<br />
                            10. 필요하지 않은 여행 자제하기<br />
                        </p>
                    </div>

                </div>
                <div className="about_sidetab">
                    <ul>
                        <li>
                            <a href="#about_introduction">개요</a>
                        </li>
                        <li>
                            <a href="#about_symptom">증상</a>
                        </li>
                        <li>
                            <a href="#about_prop_path">전파 경로</a>
                        </li>
                        <li>
                            <a href="#about_diagnosis">진단 및 검사</a>
                        </li>
                        <li>
                            <a href="#about_prevention">예방 수칙</a>
                        </li>
                    </ul>
                </div>
            </div>
            
        );
    }
}

export default AboutCOVID;