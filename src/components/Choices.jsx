import React from 'react'

const Choices = (props) => {

    function handleChange(event) {
        props.onChange(event.target.value);
    }

    return (
        <div className="radio-input flex-1">
            <div className="glass">
                <div className="glass-inner">
                </div>
            </div>
            <div className="selector">
                <div className="choice">
                    <div>
                        <input type="radio" id="one" name="number-selector" value={0} defaultChecked onClick={handleChange} className="choice-circle" />
                        <div className="ball"></div>
                    </div>
                    <label className="choice-name" htmlFor="one">Work Experience</label>
                </div>
                <div className="choice">
                    <div>
                        <input type="radio" id="two" name="number-selector" value={1} onClick={handleChange} className="choice-circle" />
                        <div className="ball"></div>
                    </div>
                    <label className="choice-name" htmlFor="two">Education</label>
                </div>
            </div>
        </div>
    )
}

export default Choices