import React from 'react';
import Colors from 'material-ui/lib/styles/colors';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import {Spacing} from 'material-ui/lib/styles';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ActionHome from 'material-ui/lib/svg-icons/action/home';
import ActionList from 'material-ui/lib/svg-icons/action/list';
import EditorInsertDriveFile from 'material-ui/lib/svg-icons/editor/insert-drive-file';
import ActionStars from 'material-ui/lib/svg-icons/action/stars';
import ActionInfo from 'material-ui/lib/svg-icons/action/info';
import NotificationLiveTv from 'material-ui/lib/svg-icons/notification/live-tv';


class AppLeftNav extends React.Component {
    getStyles() {
        const styles = {
            logo: {
                //height: Spacing.desktopKeylineIncrement + 'px',
                height: '256px',
                backgroundColor: Colors.red500
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
                </div>
                <ListItem primaryText="首页" leftIcon={<ActionHome />} />
                <ListItem primaryText="索引" leftIcon={<ActionList />} />
                <ListItem primaryText="文章" leftIcon={<EditorInsertDriveFile />} />
                <ListItem primaryText="每日推荐" leftIcon={<ActionStars />} />
                <ListItem primaryText="关于" leftIcon={<ActionInfo />} />
            </LeftNav>
        );
    }
}

export default AppLeftNav;
