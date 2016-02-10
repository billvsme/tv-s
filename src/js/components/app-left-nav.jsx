import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import {Spacing} from 'material-ui/lib/styles';


class AppLeftNav extends React.Component {
    getStyles() {
        const styles = {
            logo: {
                lineHeight: Spacing.desktopKeylineIncrement + 'px'
            }
        };

        return styles
    }
    render()  {
        const {
            docked,
            open,
            style
        } = this.props;
        let styles = this.getStyles();
        return (
            <LeftNav
                docked={docked}
                open={open}
                zDepth={0}
                style={style}
            >
                <div style={styles.logo}>
                    tv-s
                </div>
                <MenuItem>AAAA</MenuItem>
                <MenuItem>BBBB</MenuItem>
            </LeftNav>
        );
    }
}

export default AppLeftNav;
