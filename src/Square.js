import React from 'react';

class Square extends React.Component {

    render() {
        return(
            // arrow function
            // [설명] this.setState를 호출하여 button 클릭 시 Square가 다시 렌더링해야 한다고 알림
            <button className="square" onClick={()=>{
                this.props.onClick()
            }}>
                {this.props.value}
            </button>
        )
    }
}

export default Square;