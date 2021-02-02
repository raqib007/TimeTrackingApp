import React, {Component} from 'react';

class TimerForm extends Component {

    state = {
        title: this.props.title || '',
        project: this.props.project || ''
    }

    handleInputChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]:value});
    }

    handleSubmit = () =>{
       this.props.onFormSubmit({
          id: this.props.id,
          title: this.state.title,
          project: this.state.project
       });
    }

    render() {
        const submitText = this.props.id ? 'Update' : 'Create';
        return (
            <div className="card mt-2">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text"
                                   className="form-control"
                                   id="title"
                                   value={this.state.title}
                                   name={"title"}
                                   onChange={(e)=>this.handleInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="project">Project</label>
                            <input type="text"
                                   className="form-control"
                                   id="project"
                                   value={this.state.project}
                                   name={"project"}
                                   onChange={(e)=>this.handleInputChange(e)}
                            />
                        </div>
                        <div className="btn-group mt-2 btn-block" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-outline-primary" onClick={()=>this.handleSubmit()}>{submitText}</button>
                            <button type="button" className="btn btn-outline-danger" onClick={()=>this.props.onFormCancel()}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default TimerForm;