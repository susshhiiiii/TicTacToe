import React, { useState ,useRef} from 'react';
import './TicTacToe.css';
import circle_icon from '../assets/circle.png';
import cross_icon from '../assets/cross.png';


let data=["","","",
    "","","",
    "","",""];


export const TicTacToe = () => {

    let [count,setCount]=useState(0);
    let [lock,setLock]=useState(false);
    let titleRef=useRef(null);

    const toggle=(event,num)=>{
        if(lock){
            return 0;
        }
        
        if(count%2==0 && data[num]==''){
            event.target.innerHTML=`<img src=${cross_icon}>`;
            data[num]="x";
            setCount(++count);
        }
        else if(count%2==1  && data[num]==''){
            event.target.innerHTML=`<img src=${circle_icon}>`;
            data[num]="o";
            setCount(++count);
        }
        checkWin();
    }
    const checkWin=()=>{
        if(data[0]===data[1] && data[1]===data[2] && data[0]!=''){
            won(data[0]);
        }
        if(data[3]===data[4] && data[4]===data[5]&& data[3]!=''){
            won(data[3]);
        }
        if(data[6]===data[7] && data[7]===data[8]&& data[6]!=''){
            won(data[6]);
        }
        if(data[0]===data[3] && data[3]===data[6]&& data[0]!=''){
            won(data[0]);
        }
        if(data[1]===data[4] && data[4]===data[7]&& data[1]!=''){
            won(data[1]);
        }
        if(data[2]===data[5] && data[5]===data[8]&& data[2]!=''){
            won(data[2]);
        }
        if(data[0]===data[4] && data[4]===data[8]&& data[0]!=''){
            won(data[0]);
        }
        if(data[2]===data[4] && data[4]===data[6]&& data[2]!=''){
            won(data[2]);
        }
    }

    const won=(winner)=>{
        setLock(true);
        if(winner==='x'){
            titleRef.current.innerHTML=`congractulations: <img src=${cross_icon}>`;
        }
        else{
            titleRef.current.innerHTML=`congractulations: <img src=${circle_icon}>`;
        }
    }

  return (
    <div className='container'>
        <h1 className='title' ref={titleRef}>Tic Tac Toe Game In<span>  React</span></h1>
        <div className='board'>
            <div className='row1'>
                <div className='boxes' onClick={(e)=>{toggle(e,0)}}></div>
                <div className='boxes'onClick={(e)=>{toggle(e,1)}}></div>
                <div className='boxes'onClick={(e)=>{toggle(e,2)}}></div>
            </div>
            <div className='row2'>
                <div className='boxes'onClick={(e)=>{toggle(e,3)}}></div>
                <div className='boxes'onClick={(e)=>{toggle(e,4)}}></div>
                <div className='boxes'onClick={(e)=>{toggle(e,5)}}></div>
            </div>
            <div className='row3'>
                <div className='boxes'onClick={(e)=>{toggle(e,6)}}></div>
                <div className='boxes'onClick={(e)=>{toggle(e,7)}}></div>
                <div className='boxes'onClick={(e)=>{toggle(e,8)}}></div>
            </div>
        </div>
        <button className='reset'>RESET</button>
    </div>
  )
}
