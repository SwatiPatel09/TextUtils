import React,{useState} from 'react';

export default function TextForm(props) {

    const [text,setText]=useState("");

    const clickOnUpperCase=()=>{
        // console.log("U clicked Uppercase button"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Coverted in Uppercase","success");
    }

    const clickOnLowerCase=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Coverted in Lowercase","success");

    }

    const clickOnClear=()=>{
        let newText='';
        setText(newText);
        props.showAlert("Text cleared","success");

    }

    const handleOnChange=(e)=>{
        // console.log("U clicked handle button");
        setText(e.target.value);
    }
    
    const handleCopy=()=>{
        // var temp=document.getElementById('myBox');
        // temp.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard!","success");
    }

  return (
      <>
        <div className='container'  style={{color:props.mode==='dark'?'white':'#08273b'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control"  style={{backgroundColor:props.mode==='dark'?'#08273b':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8" value={text} onChange={handleOnChange} ></textarea>
                </div>
                <button disabled={text.length===0}className="btn-primary btn mx-1 my-1" onClick={clickOnUpperCase}>Convert to uppercase</button>
                <button disabled={text.length===0} className="btn-primary btn mx-1 my-1" onClick={clickOnLowerCase}>Convert to lowercase</button>
                <button disabled={text.length===0} className="btn-primary btn mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn-primary btn mx-1 my-1" onClick={clickOnClear}>Clear</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'#08273b'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.08 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter something in the textBox to preview it here.......'}</p>
        </div>
      </>
  );
}
