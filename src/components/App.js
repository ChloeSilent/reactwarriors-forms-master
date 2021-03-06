import React from "react";

export default class App extends React.Component {

    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            repeatPassword: ""
        }
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(this.username.value, this.password.value, this.repeatPassword.value)
    };

    onChangeUserName = (event)=> {
        this.setState(
            {username: event.target.value}
        )
    }

  onChangePassword = (event)=>{
    this.setState(
        {password: event.target.value}
    )
  }

  onChangeRepeatPassword = (event)=> {
    this.setState(
        {repeatPassword: event.target.value}
    )
  }

    render() {

        return (
            <div className="form-container card">
                <form className="form card-body">
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter username"
                            ref={node => (this.username = node)}
                            value={this.state.username}
                            onChange={this.onChangeUserName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter password"
                            ref={node => (this.password = node)}
                            value={this.state.password}
                            onChange={this.onChangePassword}
                        />
                    </div>
                    <div className="form-group">
                        <label>Repeat password</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter repeat password"
                            ref={node => (this.repeatPassword = node)}
                            value={this.state.repeatPassword}
                            onChange={this.onChangeRepeatPassword}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100" onClick={this.onSubmitHandler}>
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}
