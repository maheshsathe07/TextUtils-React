import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("UpperCase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!!", "success")
    }

    const handleLowClick = () =>{
        console.log("LowerCase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const clearText = () => {
        setText("");
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
        <div className='container my-3' style={{
                    color: props.mode==='dark'?'white':'#042743'}
                }>
            <h1>{props.heading}</h1>
            <div className="container mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="MyBox" rows="8" style={{
                    backgroundColor: props.mode==='dark'?'grey':'white',
                    color: props.mode==='dark'?'white':'#042743'}
                }></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
        </div>
        <div className="container my-3" style={{
                    color: props.mode==='dark'?'white':'#042743'}
                }>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h1>Preview</h1>
            <p>{text.length>0?text:"Enter something to preview"}</p>
        </div>
    </>
  )
}
