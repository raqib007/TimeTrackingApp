import './App.css';
import TimerDashboard from "./component/TimerDashboard";

function App() {
    return (
        <div className="container pt-4">
            <h2 className={"text-center"}>Timers</h2>
            <hr/>
            <div
                className="col-xl-4 offset-xl-4 col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-10 offset-1">
                <TimerDashboard/>
            </div>
        </div>
    );
}

export default App;
