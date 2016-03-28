import React from 'react';

class Main extends React.Component {
    render() {
        return (
            <div>
                Hello From Main!
                {this.props.children}
            </div>
            )
    }
};

export default Main;