import Square from './Square.js'
import React from 'react';

class Board extends React.Component {
    // component에 state를 이용하여 기억하기
        // 클래스에 생성자를 통해 state를 초기화
        // state 끌어올려서 상위 컴포넌트에서 관리하기 위함
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }

    handleClick(i){
        // .slice()를 호출하여 기존 배열을 수정하지 않고 squares 배열의 복사본을 생성하여 수정 - 불변성
            // [JS개념] slice() 메서드는 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 바뀌지 않습니다.
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        // [개념] 컴포넌트에서 setState를 호출하면 React는 자동으로 컴포넌트 내부의 자식 컴포넌트 역시 업데이트한다.
        this.setState({squares: squares}); 
        console.log(i)
    }
    renderSquare(i){
        // 상위 컴포넌트에서 관리하는 두 개의 props 전달 : Square는 '제어되는 컴포넌트'
        return <Square value = {this.state.squares[i]}  
                        onClick = {()=>this.handleClick(i)} />;
    }
    render(){
        const status = 'Next player: X';
        return(
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
       
    }
}
export default Board;