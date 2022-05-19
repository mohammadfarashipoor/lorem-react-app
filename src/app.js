import React ,{useState} from "react";
import datafa from "./dataText/textfa";
import dataen from "./dataText/texten";

function App() {
    const [count,setCount] = useState(0);
    const [text, setText] = useState([]);
    const [language, setLanguage] = useState("English");
    const handlesubmit =(e) =>{
        e.preventDefault();
        let amount = parseInt(count);
        const text = language === "English" ?  dataen : datafa;
        setText(text.slice(0,amount));
    }
    const onLangChange = (e) =>{
        setLanguage(e.target.value);
    }
    
      
    
    return (
        <>
        <section className="mx-auto">
            
            <form className="lorem-form" onSubmit={handlesubmit}>
            <h1 >Lorem App</h1>
            <label htmlFor="amount">
                Paragraphs:
            </label>
            <input type="number" name="amount" id="amount" value={count} onChange={ (e)=>setCount(e.target.value)}></input>
            <div onClick={onLangChange}>
                <input type="radio" id="lan lan-fa" value="Farsi"  name="language" ></input>
                <label for="Farsi">Farsi</label>
                <input type="radio" id="lan lan-en" value="English"  name="language" ></input>
                <label for="English">English</label>
            </div>
            <button type="submit" className="btn">Genrated</button>
            <article className="lorem-text">
                {text.map((item,index)=>{
                    return <p key={index}>{item}</p>
                })}
            </article>
            </form>

        </section>
        </>
    );
}

export default App;
