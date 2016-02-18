import React from 'react';
import TextField from 'material-ui/lib/text-field';
import IconButton from 'material-ui/lib/icon-button';
import RaisedButton from 'material-ui/lib/raised-button';
import FlatButton from 'material-ui/lib/flat-button';


class Home extends React.Component {

    render() {
        const style = this.props.styles.home;
        style.textAlign = 'center';
        style.paddingTop = '250px';
        let hintStyle = {
            color: '#FFF'
        }
        return (
            <div style={style}>
                <TextField
                      defaultValue="喜剧电影"
                />
                <IconButton
                    iconClassName="material-icons"
                    tooltip="搜索"
                    tooltipPosition="top-center"
                >
                    search
                </IconButton>
                <div>
                    <FlatButton label="Index" />
                </div>
                <h1 style={{color: '#FFF', marginTop: '150px'}}>
                    提供最新最全都电影、动漫、演员的信息。
                </h1>
                <h3 style={{color: '#FFF'}}>
                    （已经收录了12384部电影，1239部动漫，4466名演员的信息）
                </h3>
            </div>
        )
    }
}

export default Home;
