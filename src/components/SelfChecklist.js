import React, { Component } from 'react';
import Boxform from './comp_Checklist//Boxform';
import Questionlist from './comp_Checklist/Questionlist';
import './comp_Checklist/Question.css'

const result = ["방역수칙을 지키는 선에서 자유로운 활동","집에서 휴식을 취하는것","병원을 가는것"];

class SelfChecklist extends Component {
    state = {
        Qs: [
            { id: 0, text: '중국 등 코로나19 발생지역을 방문한 적이 있으신가요? (최근 14일 이내)', checked: false, delta: 1 },
            { id: 1, text: '열이 있으신가요? (37.5°C 이상)', checked: false, delta: 1  },
            { id: 2, text: '급성호흡기증상(호흡곤란, 기침 등)이 있으신가요?', checked: false, delta: 1  },
            { id: 3, text: '소화기 증상(복통, 설사 등)이 있으신가요?', checked: false, delta: 1  },
            { id: 4, text: '근육통과 피로감을 느끼시나요?', checked: false, delta: 1  },
            { id: 5, text: '신종코로나 바이러스 확진자와 접촉을 한 적이 있으신가요? (최근 14일 이내)', checked: false, delta: 1  },
            { id: 6, text: '신종코로나 바이러스 확진자가 발생한 집단시설 및 밀폐공간을 이용한 적이 있으신가요? (최근 14일 이내)', checked: false, delta: 1  },
            { id: 7, text: '신종코로나 바이러스 환자 발생·경유 병원에 외래진료, 응급실 진료, 입원을 했거나, 또는 방문(병문안, 병간호 등)한 적이 있으신가요?', checked: false, delta: 1  }
        ],
        count: 0,
        submit: false
    }

    handleToggle = (id) => {
        const { Qs } = this.state;

        const index = Qs.findIndex(Q => Q.id === id);
        const selected = Qs[index];


        const nextQs = [...Qs];

        nextQs[index] = {   
            ...selected,
            checkeditem: !selected.checkeditem,
            delta: selected.delta * (-1)
        };

        this.setState({
            Qs: nextQs,
            submit: false
        });

        this.setState(prevState => ({
            count: prevState.count + (1 * selected.delta)
        }))

    }

    handleSubmit = () => {
        this.setState({
            submit: true
        });
    }

    submitClose = () => {
        this.setState({
            submit: false
        });
    }

    render() {
        const { Qs } = this.state;
        const { handleToggle } = this;

        return (
            <div className = "selfchecklist">
            <Boxform>
                <Questionlist Qs={Qs} onToggle={handleToggle} onSubmit = {this.handleSubmit}/>
            </Boxform>
            {this.state.submit&&(
                <div className = "result">
                    <button
                    id = "submitClose"
                    onClick = {this.submitClose}>
                        x
                    </button>
                <p>
                    {this.state.count}개의 항목에 해당됩니다
                    "{result[this.state.count < 3 ? this.state.count : 2]}"(을)를 권장합니다.
                    </p>
                </div>
            )}
            </div>
        );
    }
}

export default SelfChecklist;