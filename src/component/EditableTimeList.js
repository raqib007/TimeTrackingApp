import React,{Component} from 'react';
import EditableTimer from "./EditableTimer";

class EditableTimeList extends Component{

    render() {

        const {timers} = this.props;
        const timersList = timers.map(timer => (
            <EditableTimer
                key={timer.id}
                id={timer.id}
                title={timer.title}
                project={timer.project}
                elapsed={timer.elapsed}
                runningSince={timer.runningSince}
                onFormSubmit={this.props.onFormSubmit}
                onDeleteClick={this.props.onDeleteClick}
            />
        ));

        return(
            <div>
                {timersList}
            </div>
        )
    }
}

export default EditableTimeList;