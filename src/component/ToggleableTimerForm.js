import React, {Component} from 'react';
import TimerForm from "./TimerForm";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

class ToggleableTimerForm extends Component {
    render() {
        if (this.props.isOpen) {
            return (
                <TimerForm/>
            );
        } else {
            return (
                <div className="row">
                    <div
                        className="col-xl-2 offset-xl-5 col-lg-2 offset-lg-5 col-md-2 offset-md-5 col-md-2 offset-md-5 col-sm-2 offset-sm-5 col-2 offset-5">
                        <button className="btn btn-outline-primary mt-2 mb-2">
                            <FontAwesomeIcon icon={faPlus}/>
                        </button>
                    </div>
                </div>
            )
        }
    }
}

export default ToggleableTimerForm;