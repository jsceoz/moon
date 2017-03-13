/**
 * Created by Jsceoz on 2017/3/13.
 */
import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar'


export default class GroupListPage extends React.Component {
    static propTypes = {
        group_id: React.PropTypes.number
    };

    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentWillMount() {
        // let api_path = 'vote/group' + this.props.group_id + '/';
        // fetch(window.api_url + api_path).then(function (response) {
        //         response.json().then(function (data) {
        //
        //         })
        //     })
    }

    render() {
        return (
            <div className="group-list-page">
                <AppBar
                    title="男子组"
                />

                <div className="card-wrapper">
                    <Card>
                        <CardHeader
                            title="计算机学院男子篮球队"
                            subtitle="当前票数：333"
                        />
                        <CardMedia>
                            <img src="http://oss.whusu.com.cn//news_pic/1477301736000.jpg" alt=""/>
                        </CardMedia>
                        <CardActions>
                            <FlatButton label="了解详情" primary={true}/>
                        </CardActions>
                    </Card>
                </div>

            </div>
        )
    }
}