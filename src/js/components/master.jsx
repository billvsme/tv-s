import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import {getMuiTheme} from 'material-ui/lib/styles';
import AppLeftNav from './app-left-nav.jsx';
import {Spacing} from 'material-ui/lib/styles';
import FontIcon from 'material-ui/lib/font-icon';
import Colors from 'material-ui/lib/styles/colors';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';
import {Styles} from 'material-ui';


class Master extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            muiTheme: getMuiTheme(),
            leftNavOpen: false
        };
    }
    getChildContext() {
        let myTheme = Styles.darkBaseTheme;
        myTheme.palette.alternateTextColor = '#FFF';
        //myTheme.palette.canvasColor = '#FFF';
        return {
            muiTheme: ThemeManager.getMuiTheme(myTheme),
        };
    }
    getStyles() {
        const styles = {
            appBar: {
                color: '#FFF',
                backgroundColor: 'transparent',
                position: 'fixed',
                zIndex: this.state.muiTheme.zIndex.appBar + 1,
                top: 0
            },
            home: {
                paddingTop: Spacing.desktopKeylineIncrement,
                //width: '100%',
                height: '800px',
                //backgroundImage: "url('http://7xqumk.com1.z0.glb.clouddn.com/%40%2Fstatic%2Fimg%2Fbg.png'), url('http://7xqumk.com1.z0.glb.clouddn.com/%40%2Fstatic%2Fimg%2Fbg.jpg')",
                backgroundSize: "100% auto",
                //backgroundRepeat: 'no-repeat, repeat',
                backgroundImage: "-webkit-linear-gradient(top, rgba(0,0,0,1), rgba(255,255,255,0) 300%), url('http://7xqumk.com1.z0.glb.clouddn.com/%40%2Fstatic%2Fimg%2Fbg.jpg') ; background-image: -moz-linear-gradient(top, rgba(0,0,0,1), rgba(255,255,255,0) 300%), url('http://7xqumk.com1.z0.glb.clouddn.com/%40%2Fstatic%2Fimg%2Fbg.jpg?imageMogr2/auto-orient/interlace/1')"
            }
        }

        return styles;
    }
    handleTouchTapLeftIconButton() {
        this.setState({
            leftNavOpen: !this.state.leftNavOpen
        });
    }
    render() {
        const title = (
            <div>
                <span>TV-s</span>
            </div>
        );
        let showMenuIconButton = true;
        const styles = this.getStyles();
        let {
            leftNavOpen
        } = this.state;
        let docked = true;
        styles.leftNav = {
            zIndex: styles.appBar.zIndex - 1
        }

        const loginButton = (
            <FlatButton label="Login" />
        )

        return (
            <div>
                <AppBar
                    title={title}
                    iconElementRight={loginButton}
                    style={styles.appBar}
                    zDepth={0}
                    showMenuIconButton={showMenuIconButton}
                    onLeftIconButtonTouchTap={this.handleTouchTapLeftIconButton.bind(this)}
                />
                {React.cloneElement(this.props.children, {styles: styles})}
                <AppLeftNav
                    docked={docked}
                    open={leftNavOpen}
                    style={styles.leftNav}
                />
            </div>
        );
    }
}
Master.childContextTypes =  { muiTheme: React.PropTypes.object};

export default Master;
