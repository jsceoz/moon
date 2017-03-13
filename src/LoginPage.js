/**
 * Created by Jsceoz on 2017/3/13.
 */
import React from 'react'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sid: '',
            password: ''
        };

        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState({
            [name]: value
        })
    }

    handleLogin() {
        let api_path = 'user/login';
        let data = {
            school_id: this.state.sid,
            password: this.state.password
        };
        
        fetch(window.api_url + api_path, {
            method: "POST",
            body: JSON.stringify(data)
        }).then(function (response) {

        })
    }

    render() {
        return (
            <div className="login-page">
                <AppBar
                    title="身份验证"
                />
                <div className="input-wrapper">
                    <div className="input-item-wrapper">
                        <TextField
                            hintText="学号"
                            value={this.state.sid}
                            onChange={this.handleInput}
                            name="sid"
                        />
                    </div>
                    <div className="input-item-wrapper">
                        <TextField
                            hintText="信息门户密码"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput}
                            name="password"
                        />
                    </div>
                    <div className="btn-wrapper">
                        <RaisedButton
                            label="开始验证"
                            fullWidth={true}
                            primary={true}
                            onClick={this.handleLogin}
                        />
                    </div>
                </div>
                <footer>
                    <p>© 2017 武汉大学学生会</p>
                </footer>
            </div>
        )
    }
}