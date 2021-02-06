import React, {Component} from 'react';
import EditableTimeList from "./EditableTimeList";
import ToggleableTimerForm from "./ToggleableTimerForm";
import {v4} from 'uuid';
import helpers from '../js/helpers';
import client from "../js/client";

class TimerDashboard extends Component {

    state = {
        timers: [],
    }

    componentDidMount() {
       this.callTimersFromServer();
       setInterval(this.callTimersFromServer,5000);
    }

    callTimersFromServer = () =>{
        client.getTimers((serverTimers)=>{
            console.log(serverTimers);
            this.setState({timers:serverTimers});
        })
    }

    handleEditFormSubmit = (timer) => {
        console.log(timer);
        this.updateTimer(timer);
    }

    handleCreatFormSubmit = (timer) => {
        this.createTimer(timer);
    }

    handleDeleteClick = (id) =>{
        this.deleteTimer(id);
    }

    createTimer = (timer) => {
       const newTimer = helpers.newTimer(timer);
       this.setState({timers:this.state.timers.concat(newTimer)});
       client.createTimer(newTimer);
    }

    updateTimer = (attr) =>{
        this.setState({
            timers: this.state.timers.map(timer => {
                if(timer.id === attr.id){
                    return Object.assign({},timer,{
                        title:attr.title,
                        project: attr.project
                    });
                }else{
                    return timer;
                }
            })
        })

        client.updateTimer(attr);
    }

    deleteTimer = (timerId) =>{
        this.setState({timers: this.state.timers.filter(t => t.id !== timerId)});
        client.deleteTimer({id:timerId});
    }

    handleTimerStart = (timerId) =>{
        console.log(timerId);
        this.startTimer(timerId);
    }

    handleTimerStop = (timerId) =>{
        console.log(timerId);
        this.stopTimer(timerId);
    }

    startTimer = (timerId) =>{
        const now = Date.now();
        this.setState({timers:this.state.timers.map(t=>{
                if(t.id === timerId){
                    return Object.assign({},t,{
                        runningSince: now
                    });
                }else{
                    return t;
                }
            })});
        client.startTimer({id:timerId,start:now});
    }

    stopTimer = (timerId) =>{
       const now = Date.now();
       this.setState({timers: this.state.timers.map(t=>{
             if(t.id === timerId){
                 const lastElapsed = now - t.runningSince;
                 return Object.assign({},t,{
                     elapsed: t.elapsed + lastElapsed,
                     runningSince: null
                 });
             }else{
                 return t;
             }
           })})
        client.stopTimer({id:timerId,stop:now});
    }

    render() {
        return (
            <div>
                <EditableTimeList
                    timers={this.state.timers}
                    onFormSubmit={this.handleEditFormSubmit}
                    onDeleteClick={this.handleDeleteClick}
                    onStartClick={this.handleTimerStart}
                    onStopClick={this.handleTimerStop}
                />
                <ToggleableTimerForm
                    onFormSubmit={this.handleCreatFormSubmit}/>
            </div>
        )
    }
}

export default TimerDashboard;