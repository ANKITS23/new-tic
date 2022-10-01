import logo from './logo.svg';
import './App.css';
import Board from './pages/board'
import React from 'react';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
      stepNumber: 0,
      record:'',
    };
  }
  
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
      record:(!this.state.xIsNext ? 'X' : 'O'),
    });
  }
  
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    
    const moves = history.map((step, move) => {
      const desc = move ?
        'Undo' + move :
        'Game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
  
    if (winner) {
      status = 'Winner: ' + winner;
    } 
 
    else if(!winner && this.state.history.length === 10){
      status = 'Draw';
   }
    else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="">
        <div className="ml-7 mt-7">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="flex gap-2 ">
           <div className='ml-4 text-blue-300 text-4xl  w-[250px] py-2 text-center'>{status}</div>
           <div className='text-blue-300 text-4xl  w-[250px] py-2 text-center'>Last match winner:{this.state.record}</div>
           
           
           </div>
           <div className='ml-7'>
           <ol className='mt-2 text-blue-300 text-4xl  w-[200px] py-2 text-center'>{moves}</ol>   
           </div>
        </div>
    
    );
  }
}


function calculateWinner(squares) {
    const Lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < Lines.length; i++) {
      const [a, b, c] = Lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
