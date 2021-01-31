import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import helpers from '../js/helpers';

class Timer extends Component {
    render() {
        const {title,project,elapsed} = this.props;
        const elapsedString = helpers.renderElapsedString(elapsed);
        return (
            <div className="card mt-2">
                <div className="card-body">
                    <h4>{title}</h4>
                    <p className="text-muted">{project}</p>
                    <h2 className="text-center">{elapsedString}</h2>
                    <div className="mb-5">
                        <span className="float-right">
                           <FontAwesomeIcon className="mr-2" icon={faEdit} title={"Edit Timer"}/>
                           <FontAwesomeIcon icon={faTrashAlt} title={"Delete Timer"}/>
                        </span>
                    </div>
                    <button className="btn btn-outline-primary btn-block">Start</button>
                    <button className="btn btn-outline-danger btn-block" style={{"display":"none"}}>Stop</button>
                </div>
            </div>
        )
    }
}

export default Timer;