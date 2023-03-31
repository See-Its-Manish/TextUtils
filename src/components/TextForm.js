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
    const [text, setText] = useState("");
    return (

    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea 
            className="form-control" 
            value={text} onChange = {handleOnChange} 
            id="myBox" 
            rows="8"
            placeholder='Enter Text Here'
        ></textarea>
        <button className='btn btn-primary my-3' onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
    </div>
    )
}
