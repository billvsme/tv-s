import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import {getMuiTheme} from 'material-ui/lib/styles';
import AppLeftNav from './app-left-nav.jsx';
import {Spacing} from 'material-ui/lib/styles';


class Master extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            muiTheme: getMuiTheme(),
            leftNavOpen: true
        };
    }
    getStyles() {
        const styles = {
            appBar: {
                position: 'fixed',
                zIndex: this.state.muiTheme.zIndex.appBar + 1,
                top: 0
            },
            home: {
                paddingTop: Spacing.desktopKeylineIncrement,
                minHeight: 400,
            }
        }

        return styles;
    }
    render() {
        const title = 'tv-s';
        let showMenuIconButton = false;
        const styles = this.getStyles();
        let {
            leftNavOpen
        } = this.state;
        let docked = true;
        styles.leftNav = {
            zIndex: styles.appBar.zIndex - 1
        }

        styles.home.paddingLeft = 256;

        return (
            <div>
                <AppBar
                    title={title}
                    style={styles.appBar}
                    zDepth={0}
                    showMenuIconButton={showMenuIconButton}
                />
                {React.cloneElement(this.props.children, {style: styles.home})}
                <AppLeftNav
                    docked={docked}
                    open={leftNavOpen}
                    style={styles.leftNav}
                />
            </div>
        );
    }
}

export default Master;
