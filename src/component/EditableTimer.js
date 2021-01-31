import React, {Component} from 'react';
import TimerForm from "./TimerForm";
import Timer from "./Timer";

class EditableTimer extends Component {
    render() {
        const {title,project,elapsed,runningSince} = this.props;

        if (this.props.editFormOpen) {
            return (
                <TimerForm
                    title={title}
                    project={project}
                />
            );
        } else {
            return (
                <Timer
                    title={title}
                    project={project}
                    elapsed={elapsed}
                    runningSince={runningSince}
                />
            );
        }
    }
}

export default EditableTimer;