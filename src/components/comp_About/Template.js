import React from 'react';
import './Template.css';

const Template= ({ children }) => {
    return (
        <main className="template">
            <div className="title">
                <h3>About COVID-19</h3>
            </div>

            {children}
        </main>

    );

};

export default Template;