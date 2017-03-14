/**
 * Created by Jsceoz on 2017/3/13.
 */
import React from 'react'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sid: '',
            password: '',
            open: false,
            msg: ''
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

    handleCheckAndLogin = () => {
        let self = this;

        let check_api_path = 'user/check_whu_student/';

        this.setState({open: true, msg: '正在验证'});

        fetch(window.api_url + check_api_path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                sid: self.state.sid,
                password: self.state.password
            })
        }).then(function (response) {
            response.json().then(function (data) {

                if(data.result === true) {
                    self.login()
                }
                else {
                    self.setState({msg: '验证失败'})
                }
            })
        })
    };

    login = () => {
        this.setState({msg: '验证成功'});

        let self = this;
        let api_path = 'user/login_or_register/';
        
        fetch(window.api_url + api_path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                sid: self.state.sid,
                password: self.state.password
            })
        }).then(function (response) {
            response.json().then(function (data) {
                localStorage.whusu_token = data.token;
                if(localStorage.whusu_token) {
                    window.location = '#/home/' + self.props.params.activity_uuid
                }
            })
        })
        

    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    render() {
        return (
            <div className="login-page">
                <AppBar
                    title="身份验证"
                    showMenuIconButton={false}
                    titleStyle={{fontSize: 16}}
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
                            onClick={this.handleCheckAndLogin}
                        />
                    </div>
                </div>
                <footer>
                    <p>© 2017 武汉大学学生会</p>
                </footer>
                <Snackbar
                    open={this.state.open}
                    message={this.state.msg}
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose}
                />
            </div>
        )
    }
}