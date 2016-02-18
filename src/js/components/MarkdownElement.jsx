import React from 'react';
import marked from 'marked';


class MarkdownElement extends React.Component {
    componentWillMount() {
        marked.setOptions({
          gfm: true,
          tables: true,
          breaks: false,
          pedantic: false,
          sanitize: true,
          smartLists: true,
          smartypants: false
        });
    }
    render() {
        console.log('sdfdsfsdf');
        const {
            style,
            text
        } = this.props;

        return (
             <div
                style = {style}
                dangerouslySetInnerHTML={{__html: marked(text)}}
             />
        )
    }
}

export default MarkdownElement
