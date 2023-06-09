import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("UpperCase is Clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value)
    }
    const analyzeWords = () => {
        if(text === "") return 0;
        return text.split(" ").length;
    }
    const handleLowClick = () => {
        console.log("LowerCase is Clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = ()=>{
        setText("");
    }
    const [text, setText] = useState("");
    return (
        
        <>
            <div className="container">
                <h1 className = {`text-${ ((props.mode === 'light') ? 'dark' : 'light') }`}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea 
                        className="form-control" 
                        value={text} onChange = {handleOnChange} 
                        id="myBox" 
                        rows="8"
                        placeholder='Enter Text Here'
                        style = {{
                            backgroundColor: `${ ((props.mode === 'light') ? 'white' : '#202124') }`,
                            color: `${ ((props.mode === 'light') ? 'black' : 'white') }`,
                        }}
                    ></textarea>
                </div>
                <button className='btn btn-primary my-3 mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary my-3 mx-2' onClick={handleLowClick}>Convert to LowerCase</button>
                <button className='btn btn-primary my-3 mx-2' onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className={`container my-3 text-${ ((props.mode === 'light') ? 'dark' : 'light') }`} >
                <h1>Your text Summary</h1>
                <p>{analyzeWords()} words, {text.length} characters</p>
                <p>{0.008*analyzeWords()} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    
    )
}