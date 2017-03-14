/**
 * Created by Jsceoz on 2017/3/13.
 */
import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';


export default class GroupListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            group_name: '',
            list: []
        }
    }

    componentWillMount() {
        let self = this;

        let api_path = 'vote/group/' + this.props.params.group_id + '/';
        fetch(window.api_url + api_path).then(function (response) {
            response.json().then(function (data) {
                self.setState({group_name: data.name})
            })
        });

        let get_list_api_path = 'vote/item/?group=' + this.props.params.group_id;

        fetch(window.api_url + get_list_api_path).then(function (response) {
            response.json().then(function (data) {
                self.setState({list: data.results})
            })
        })
    }

    render() {
        return (
            <div className="group-list-page">
                <AppBar
                    title={this.state.group_name}
                    iconElementLeft={<IconButton onClick={() => history.back()}><ArrowBack/></IconButton>}
                    titleStyle={{fontSize: 16}}
                />

                <div className="card-wrapper">
                    {
                        this.state.list.map(
                            (item) => (
                                <div key={item.id}>
                                    <Card>
                                        <CardHeader
                                            title={item.name}
                                            subtitle={"当前票数：" + item.vote_num}
                                        />
                                        <CardMedia>
                                            <img src={item.cover} alt={item.name}/>
                                        </CardMedia>
                                        <CardActions>
                                            <FlatButton label="了解详情" primary={true} href={"#/item-content/" + item.id}/>
                                        </CardActions>
                                    </Card>
                                </div>
                            )
                        )
                    }
                </div>

            </div>
        )
    }
}