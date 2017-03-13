/**
 * Created by Jsceoz on 2017/3/13.
 */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar'


export default class SelectGroupPage extends React.Component {
    static propTypes = {
        activity_id: React.PropTypes.number
    };

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillMount() {

    }

    render() {
        return (
            <div className="select-group-page">
                <AppBar
                    title="选择组别"
                />

                <div className="select-group-list-wrapper">
                    <div className="group-btn-wrapper">
                        <RaisedButton label="男子组" fullWidth={true} primary={true}/>
                    </div>
                    <div className="group-btn-wrapper">
                        <RaisedButton label="女子组" fullWidth={true} primary={true}/>
                    </div>
                    <div className="group-btn-wrapper">
                        <RaisedButton label="团体组" fullWidth={true} primary={true}/>
                    </div>


                </div>

                <footer>
                    <p>© 2017 武汉大学学生会</p>
                </footer>
            </div>
        )
    }
}