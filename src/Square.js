import React from 'react';

class Square extends React.Component {
    // component에 state를 이용하여 기억하기
        // 클래스에 생성자를 통해 state를 초기화
    constructor(props){
        super(props);
        this.state = {
            value : null,
        };
    }

    render() {
        return(
            // arrow function
            // [설명] this.setState를 호출하여 button 클릭 시 Square가 다시 렌더링해야 한다고 알림
            <button className="square" onClick={()=>{
                // [개념] 컴포넌트에서 setState를 호출하면 React는 자동으로 컴포넌트 내부의 자식 컴포넌트 역시 업데이트한다.
                this.setState({value: 'X'});
                console.log(this.props.value);
            }}>
                {this.props.value}
            </button>
        )
    }
}

export default Square;