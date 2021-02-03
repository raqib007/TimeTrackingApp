import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import helpers from '../js/helpers';
import TimerActionButton from "./TimerActionButton";

class Timer extends Component {

    componentDidMount() {
        this.forceUpdateInterval = setInterval(()=>{
            this.forceUpdate();
        },50);
    }

    componentWillUnmount() {
        clearInterval(this.forceUpdateInterval);
    }

    handleStartClick = () =>{
        this.props.onStartClick(this.props.id);
    }

    handleStopClick = () =>{
        this.props.onStopClick(this.props.id);
    }

    render() {
        const {id,title,project,elapsed} = this.props;
        const elapsedString = helpers.renderElapsedString(elapsed,this.props.runningSince);
        return (
            <div className="card mt-2">
                <div className="card-body">
                    <h4>{title}</h4>
                    <p className="text-muted">{project}</p>
                    <h2 className="text-center">{elapsedString}</h2>
                    <div className="mb-5">
                        <span className="float-right">
                           <FontAwesomeIcon className="mr-2" icon={faEdit} title={"Edit Timer"} onClick={()=>this.props.onEditClick()}/>
                           <FontAwesomeIcon icon={faTrashAlt} title={"Delete Timer"} onClick={()=>this.props.onDeleteClick(id)}/>
                        </span>
                    </div>
                    <TimerActionButton
                       timerIsRunning={!!this.props.runningSince}
                       onStartClick={this.handleStartClick}
                       onStopClick={this.handleStopClick}
                    />
                </div>
            </div>
        )
    }
}

export default Timer;