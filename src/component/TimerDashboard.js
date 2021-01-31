import React,{Component} from 'react';
import EditableTimeList from "./EditableTimeList";
import ToggleableTimerForm from "./ToggleableTimerForm";

class TimerDashboard extends Component{
    render() {
        return(
            <div>
               <EditableTimeList/>
               <ToggleableTimerForm isOpen={false}/>
            </div>
        )
    }
}

export default TimerDashboard;