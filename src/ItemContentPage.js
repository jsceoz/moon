/**
 * Created by Jsceoz on 2017/3/13.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import Snackbar from 'material-ui/Snackbar';


export default class ItemContentPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            item: '',
            open: false,
            msg: ''
        }
    }

    componentWillMount() {
        let self = this;

        let item_id = this.props.params.item_id;
        let api_path = 'vote/item/' + item_id + '/';

        fetch(window.api_url + api_path).then(function (response) {
            response.json().then(function (data) {
                self.setState({item: data})
            })
        })
    }

    vote = () => {
        let self = this;
        let api_path = 'vote/vote/';
        self.setState({
            open: true,
            msg: '投票中'
        });

        fetch(window.api_url + api_path, {
            method: 'POST',
            headers: {
                'Authorization': 'Token ' + localStorage.whusu_token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                item: self.state.item.id
            })
        }).then(function (response) {
            response.json().then(function (data) {
                self.setState({msg: data.msg})
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
            <div className="item-content-page">
                <AppBar
                    title={this.state.item.name}
                    iconElementLeft={<IconButton onClick={() => history.back()}><ArrowBack/></IconButton>}
                />

                <div className="content-wrapper">
                    {this.state.item.content}
                </div>

                <div className="vote-btn-wrapper">
                    <RaisedButton
                        label="投上一票"
                        primary={true}
                        onClick={this.vote}
                    />
                </div>

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