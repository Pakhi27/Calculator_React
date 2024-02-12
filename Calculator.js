import React,{useState} from 'react'

function Calculator() {
    const [result,setResult]=useState(" ");

    const handleClick=(value)=>{
        if(value==="=")
        {
            try{
                //eval expression
                setResult(eval(result).toString());
            }
            catch(error){
                setResult("error");
            }
        }
        else if(value==="AC"){
            setResult(" ");
        }
        else{
            setResult(prevResult=>prevResult+value);
        }
    };
    return (
        <div>
            <h1>Calculator</h1>
            <div className="Container">
                <div id="result">{result}</div>
                <div className="r1">
                    <div id="box" onClick={()=>handleClick("AC")}>AC</div>
                    <div  id="box"  onClick={()=>handleClick("+/-")}>+/-</div>
                    <div  id="box" onClick={()=>handleClick("%")}>%</div>
                    <div  id="box" onClick={()=>handleClick("/")}>/</div>
                </div>
                <div className="r2">
                    <div  id="box" onClick={()=>handleClick("7")}>7</div>
                    <div  id="box" onClick={()=>handleClick("8")}>8</div>
                    <div  id="box" onClick={()=>handleClick("9")}>9</div>
                    <div  id="box" onClick={()=>handleClick("*")}>*</div>
                </div>
                <div className="r3">
                    <div  id="box" onClick={()=>handleClick("4")}>4</div>
                    <div  id="box" onClick={()=>handleClick("5")}>5</div>
                    <div  id="box" onClick={()=>handleClick("6")}>6</div>
                    <div  id="box" onClick={()=>handleClick("-")}>-</div>
                </div>
                <div className="r4">
                    <div  id="box"  onClick={()=>handleClick("1")}>1</div>
                    <div  id="box"  onClick={()=>handleClick("2")}>2</div>
                    <div  id="box"  onClick={()=>handleClick("3")}>3</div>
                    <div  id="box"  onClick={()=>handleClick("+")}>+</div>
                </div>
                <div className="r5">
                    <div  id="box"  onClick={()=>handleClick("0")}>0</div>
                    <div  id="box"  onClick={()=>handleClick(".")}>.</div>
                    <div  id="box"  onClick={()=>handleClick("=")}>=</div>
                    <div  id="box"></div>
                </div>
            </div>
        </div>
    )
}

export default Calculator
