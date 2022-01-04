import React from 'react';

class Square extends React.Component {
    render() {
        return(
            // arrow function
            <button className="square" onClick={()=>{
                console.log('click');
            }}>
                {this.props.value}
            </button>
        )
    }
}

export default Square;