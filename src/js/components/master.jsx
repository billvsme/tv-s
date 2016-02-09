import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import {getMuiTheme} from 'material-ui/lib/styles';
//import AppLeftNav from './app-left-nav';


class Master extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            muiTheme: getMuiTheme()
        };
    }
    getStyles() {
        const styles = {
            appBar: {
                position: 'fixed',
                zIndex: this.state.muiTheme.zIndex.appBar + 1,
                top: 0
            }
        }

        return styles;
    }
    render() {
        const title = 'tv-s';
        let showMenuIconButton = false;
        const styles = this.getStyles();
        return (
            <div>
                <AppBar
                    title={title}
                    style={styles.appBar}
                    zDepth={0}
                    showMenuIconButton={showMenuIconButton}
                />
                
            </div>
        );
    }
}

export default Master;
