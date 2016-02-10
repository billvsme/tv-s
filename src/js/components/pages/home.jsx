import React from 'react';


class Home extends React.Component {

    render() {
        const style = this.props.style;
        return (
            <div style={style}>
                <h1>Hello</h1>
            </div>
        )
    }
}

export default Home;
