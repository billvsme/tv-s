import React from 'react';
import MarkdownElement from '../MarkdownElement';
import apiText from './README.md';


class Api extends React.Component {
    render() {
        const style = this.props.style;

        return (
            <MarkdownElement style={style} text={apiText} />
        )
    }
}

export default Api;
