import React, { Component } from 'react';
import Question from './Question';
import './Question.css';

class Questionlist extends Component {
    render() {
        const { Qs, onToggle, onSubmit } = this.props;
        const QList = Qs.map(
            ({ id, text, checkeditem }) => (
                <Question
                    id={id}
                    text={text}
                    checkeditem={checkeditem}
                    onToggle={onToggle}
                />
            )
        );
        return (
            <div className = "survey">
                {QList}
                <div id = "submitSection">
                    <button onClick = {() => onSubmit()}>Submit</button>
                </div>
            </div>
        );
    }
}

export default Questionlist;