import React, {Component} from 'react';
import TimerForm from "./TimerForm";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

class ToggleableTimerForm extends Component {

    state = {
        isOpen: false
    }

    handleFormOpen = () => {
        this.setState({isOpen:true});
    }

    handleFormClose = () =>{
        this.setState({isOpen:false});
    }

    handleFormSubmit = (timer) =>{
        console.log(timer);
        this.props.onFormSubmit(timer);
        this.setState({isOpen:false});
    }

    render() {
        if (this.state.isOpen) {
            return (
                <TimerForm
                    onFormCancel={this.handleFormClose}
                    onFormSubmit={this.handleFormSubmit}
                />
            );
        } else {
            return (
                <div className="row">
                    <div
                        className="col-xl-2 offset-xl-5 col-lg-2 offset-lg-5 col-md-2 offset-md-5 col-md-2 offset-md-5 col-sm-2 offset-sm-5 col-2 offset-5">
                        <button className="btn btn-outline-primary mt-2 mb-2" onClick={()=>this.handleFormOpen()}>
                            <FontAwesomeIcon icon={faPlus}/>
                        </button>
                    </div>
                </div>
            )
        }
    }
}

export default ToggleableTimerForm;