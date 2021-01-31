import React, {Component} from 'react';

class TimerForm extends Component {
    render() {
        const submitText = this.props.title ? 'Update' : 'Create';
        return (
            <div className="card mt-2">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" className="form-control" id="title" defaultValue={this.props.title}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="project">Project</label>
                            <input type="text" className="form-control" id="project" defaultValue={this.props.project}/>
                        </div>
                        <div className="btn-group mt-2 btn-block" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-outline-primary">{submitText}</button>
                            <button type="button" className="btn btn-outline-danger">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default TimerForm;