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
        let activity_uuid = this.props.params.activity_uuid;

        let self = this;

        let api_path = "vote/activity/?uuid=" + activity_uuid;

        fetch(window.api_url + api_path).then(function (response) {
            response.json().then(function (data) {
                self.setState({activity: data.results[0]});
                document.title = data.results[0].name;
                window.activity_id = data.results[0].id
            })
        })
    }

    auth = () => {
        if (!localStorage.whusu_token) {
            window.location = '#/login/' + this.props.params.activity_uuid
        }
    };

    render() {
        return (
            <div className="main-page">
                <AppBar
                    title={this.state.activity.name}
                    iconElementLeft={<IconButton onClick={() => history.back()}><ArrowBack/></IconButton>}
                    titleStyle={{fontSize: 16}}
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