/**
 * Created by Jsceoz on 2017/3/13.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activity: ''
        }
    }

    componentWillMount() {
        this.auth();
    }

    componentDidMount() {
        let activity_id = this.props.params.activity_id;

        let self = this;

        let api_path = "vote/activity/" + activity_id + '/';

        fetch(window.api_url + api_path).then(function (response) {
            response.json().then(function (data) {
                self.setState({activity: data})
            })
        })
    }

    auth = () => {
        if (!localStorage.whusu_token) {
            window.location = '#/login'
        }
    };

    render() {
        return (
            <div className="main-page">
                <AppBar
                    title={this.state.activity.name}
                    iconElementLeft={<IconButton onClick={() => history.back()}><ArrowBack/></IconButton>}
                />

                <div className="content-wrapper">
                    {this.state.activity.content}
                </div>

                <div className="enter-btn-wrapper">
                    <RaisedButton label="进入投票" primary={true} href="#/select-group"/>
                </div>
                <footer>
                    <p>© 2017 武汉大学学生会</p>
                </footer>

            </div>
        )
    }
}