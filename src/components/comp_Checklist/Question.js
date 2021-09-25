/*eslint unicode-bom: ["error", "always"]*/

import React, { Component } from 'react';
import './Question.css';

class Question extends Component {
    render() {
        const { text, checkeditem, id, onToggle} = this.props;

        return (
            <div className="Question" onClick={() => onToggle(id)}>
                <div className={`Question ${checkeditem && 'checkeditem'}`}>
                    <div>{text}</div>
                </div>
                {
                    checkeditem &&  "✓" 
                }
            </div>
        );
    }
}

export default Question;