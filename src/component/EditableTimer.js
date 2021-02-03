import React, {Component} from 'react';
import TimerForm from "./TimerForm";
import Timer from "./Timer";

class EditableTimer extends Component {

    state={
        editFormOpen: false
    }

    handleEditClick = () =>{
        this.openForm();
    }

    handleDeleteClick = (timer) =>{
        this.props.onDeleteClick(timer);
    }

    onFormCancel = () =>{
        this.closeForm();
    }

    openForm = () =>{
       this.setState({editFormOpen: true});
    }

    closeForm = () =>{
        this.setState({editFormOpen: false});
    }

    handleFormSubmit = (timer) =>{
       this.props.onFormSubmit(timer);
       this.closeForm();
    }

    render() {
        const {title,project,elapsed,runningSince} = this.props;

        if (this.state.editFormOpen) {
            return (
                <TimerForm
                    id={this.props.id}
                    title={title}
                    project={project}
                    onFormSubmit={this.handleFormSubmit}
                    onFormCancel={this.onFormCancel}
                />
            );
        } else {
            return (
                <Timer
                    id={this.props.id}
                    title={title}
                    project={project}
                    elapsed={elapsed}
                    runningSince={runningSince}
                    onEditClick={this.handleEditClick}
                    onDeleteClick={this.handleDeleteClick}
                    onStartClick={this.props.onStartClick}
                    onStopClick={this.props.onStopClick}
                />
            );
        }
    }
}

export default EditableTimer;