import React from "react";
import './Calculator.css'
class Calculator extends React.Component{
    constructor(props){
        super(props) ;
        this.state = {
            value : '',
            prevValue: '',
            symbol : '',
            lastEntered: 1, //* last entered is 0 means it is a symbol else it is anything 
        }
    }

    numberClicked(value){
        console.log(value) ;
        if(this.state.lastEntered === 0){ //* if last entered is symbol then
            this.setState({value: value, lastEntered: 1}) ;
        }else{
            let lastValue = this.state.value ;
            lastValue = (lastValue + value) ;
            console.log(`The last value is ${lastValue}`) ;
            this.setState({value: lastValue}) ;
        }
    }

    symbolClicked(symbol){
        const prev = this.state.prevValue ;
        const value = this.state.value ;
        if((prev.length === 0 || value.length === 0) || this.state.lastEntered === 0){
            if(this.state.lastEntered === 1){
                const val = this.state.value ;
                this.setState({symbol: symbol, prevValue: val, lastEntered: 0}) ;
            }else{
                this.setState({symbol: symbol, lastEntered: 0}) ;
            }
        }else{
            const symb = this.state.symbol ;
            if(symb === '%'){
                const val = Number(prev)%Number(value) ;
                this.setState({
                    value: val.toString(),
                    symbol: symbol,
                    prevValue: '',
                    lastEntered: 0
                }) ;
            }else if(symb === '/'){
                const val = Number(prev)/Number(value) ;
                this.setState({
                    value: val.toString(),
                    symbol: symbol,
                    prevValue: val.toString(),
                    lastEntered: 0
                }) ;
            }else if(symb === 'X'){
                const val = Number(prev)*Number(value) ;
                this.setState({
                    value: val.toString(),
                    symbol: symbol,
                    prevValue: val.toString(),
                    lastEntered: 0
                }) ;
            }else if(symb === '+'){
                const val = Number(prev)+Number(value) ;
                this.setState({
                    value: val.toString(),
                    symbol: symbol,
                    prevValue:  val.toString(),
                    lastEntered: 0
                }) ;
            }else {
                const val = Number(prev)-Number(value) ;
                this.setState({
                    value: val.toString(),
                    symbol: symbol,
                    prevValue:  val.toString(),
                    lastEntered: 0
                }) ; 

            }
        }
    }

    render(){
        return(
            <div className="calcy">
                <div className="inside">
                    {this.state.value}
                </div>
                <div className="buttons">
                    <div className="row">
                    <button onClick={()=>{
                        this.setState({
                            value: '',
                            prevValue: '',
                            symbol:'',
                            lastEntered: 1, //* last entered is 0 means it is a symbol else it is anything 
                        }) ;
                    }}>AC</button>
                    <button onClick={()=>{
                        const value = this.state.value ;
                        this.setState({value: -(value)}) ;

                    }}>+/-</button>
                    <button onClick={()=>{
                        this.symbolClicked('%') ;
                    }}>%</button>
                    <button onClick={()=>{
                        this.symbolClicked('/') ;
                    }} className='Symbol'>/</button>
                    </div>
                    <div className="row">
                    <button onClick={()=>{
                        this.numberClicked('7') ;
                    }}>7</button>
                    <button onClick={()=>{ this.numberClicked('8') ;}}>8</button>
                    <button onClick={()=>{ this.numberClicked('9') ;}}>9</button>
                    <button onClick={()=>{
                        this.symbolClicked('X') ;
                    }} className='Symbol'>X</button>
                    </div>
                    <div className="row">
                    <button onClick={()=>{ this.numberClicked('4') ;}}>4</button>
                    <button onClick={()=>{ this.numberClicked('5') ;}}>5</button>
                    <button onClick={()=>{ this.numberClicked('6') ;}}>6</button>
                    <button onClick={()=>{
                        this.symbolClicked('+') ;
                    }} className='Symbol'>+</button>
                    </div>
                    <div className="row">
                    <button onClick={()=>{ this.numberClicked('1') ;}}>1</button>
                    <button onClick={()=>{ this.numberClicked('2') ;}}>2</button>
                    <button onClick={()=>{ this.numberClicked('3') ;}}>3</button>
                    <button onClick={()=>{
                        this.symbolClicked('-') ;
                    }} className='Symbol'>-</button>
                    </div>
                    <div className="row">
                    <button onClick={()=>{
                         this.numberClicked('0') ;
                    }} className='button-0'>0</button>
                    <button onClick={()=>{
                        //* didn't written code for .
                    }}>.</button>
                    <button onClick={()=>{

                        if(this.state.lastEntered === 0){ //* means if last entered is symbol then 
                            const value = this.state.prevValue ;
                            this.setState({value: value, lastEntered: 1, prevValue: '', symbol: ''}) ;
                        }else{
                            //* means the last entered is an number then 
                            const prev = this.state.prevValue ;
                            const symbol = this.state.symbol ;
                            const value = this.state.value ;
                            if(value.length !== 0){
                                if(prev.length !== 0){
                                    if(symbol === '%'){
                                        const val = Number(prev)%Number(value) ;
                                        this.setState({
                                            value: val.toString(),
                                            symbol: '',
                                            prevValue: '',
                                            lastEntered: 1
                                        }) ;
                                    }else if(symbol === '/'){
                                        const val = Number(prev)/Number(value) ;
                                        this.setState({
                                            value: val.toString(),
                                            symbol: '',
                                            prevValue: '',
                                            lastEntered: 1
                                        }) ;
                                    }else if(symbol === 'X'){
                                        const val = Number(prev)*Number(value) ;
                                        this.setState({
                                            value: val.toString(),
                                            symbol: '',
                                            prevValue: '',
                                            lastEntered: 1
                                        }) ;
                                    }else if(symbol === '+'){
                                        const val = Number(prev)+Number(value) ;
                                        this.setState({
                                            value: val.toString(),
                                            symbol: '',
                                            prevValue: '',
                                            lastEntered: 1
                                        }) ;
                                    }else {
                                        const val = Number(prev)-Number(value) ;
                                        this.setState({
                                            value: val.toString(),
                                            symbol: '',
                                            prevValue: '',
                                            lastEntered: 1
                                        }) ; 

                                    }
                                }else{
                                    this.setState({
                                        symbol: '',
                                        lastEntered: 1
                                    }) ;
                                }
                            }else{

                                if(prev.length !== 0){
                                    this.setState({
                                        value: prev, 
                                        symbol: '',
                                        lastEntered: 1,
                                    }) ;

                                }else{
                                    this.setState({
                                        value: '',
                                        prevValue: '',
                                        symbol:'',
                                        lastEntered: 1, //* last entered is 0 means it is a symbol else it is anything 
                                    }) ;
                                }
                                
                            }
                        }


                    }} className='Symbol'>=</button>
                    </div>
                </div>
            </div>
        ) ;
    }
}

export default Calculator ;