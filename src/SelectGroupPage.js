/**
 * Created by Jsceoz on 2017/3/13.
 */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';


export default class SelectGroupPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: true,
            group_arr: []
        }
    }

    componentWillMount() {
        let self = this;

        let activity_id = window.activity_id;
        let api_path = 'vote/group/?activity=' + activity_id;
        
        fetch(window.api_url + api_path).then(function (response) {
            response.json().then(function (data) {

                self.setState({group_arr: data.results})
            })
        })
    }

    render() {
        return (
            <div className="select-group-page">
                <AppBar
                    title="选择组别"
                    iconElementLeft={<IconButton onClick={() => history.back()}><ArrowBack/></IconButton>}
                    titleStyle={{fontSize: 16}}
                />

                <div className="select-group-list-wrapper">
                    {this.state.group_arr.map(
                        (item) => (
                            <div className="group-btn-wrapper" key={item.id}>
                                <RaisedButton
                                    label={item.name}
                                    fullWidth={true}
                                    primary={true}
                                    href={"#/group-list/" + item.id}/>
                            </div>
                        )
                    )}


                </div>

                <footer>
                    <p>© 2017 武汉大学学生会</p>
                </footer>
            </div>
        )
    }
}