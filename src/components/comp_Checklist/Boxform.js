import React from 'react';
import './Boxform.css';

const Boxform = ({ children }) => {
    return (
        <main className="Boxform">
            <div className="title">
                <h3>Self-Checklist</h3>
      </div>
                {children}
        </main>
    );
};

export default Boxform;
