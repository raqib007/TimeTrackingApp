import React from 'react';

class TimerActionButton extends React.Component{
    render() {
        if(this.props.timerIsRunning){
            return (
                <button
                    className="btn btn-outline-danger btn-block"
                    onClick={()=>this.props.onStopClick()}
                >
                    Stop
                </button>
            )
        }else{
            return(
                <button
                    className="btn btn-outline-primary btn-block"
                    onClick={()=>this.props.onStartClick()}
                >
                    Start
                </button>
            );

        }

    }
}

export default TimerActionButton;