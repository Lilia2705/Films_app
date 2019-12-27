import React, { createContext } from "react";
import ReactDOM from "react-dom";


const Context = createContext();

class Toggle extends React.Component {
    static contextType = Context;

    render() {
        const {toggler, data: {isOn}} = this.context;
        return (
            <div onClick={toggler}>
                {isOn ? "Is on" : "is off"}
            </div>
        )
    }
};

export default Toggle;
