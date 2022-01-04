import Square from './Square.js'
import React from 'react';

class Board extends React.Component {
    renderSquare(i){
        return <Square value = {i} />;
    }
}
export default Board;