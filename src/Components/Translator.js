import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const Translator = () => {
    const [data, setData] = useState("");
    const [result, setResult] = useState("");
    const [sourceLan, setSourceLan] = useState("en");
    const [targetLan, setTargetLan] = useState("hi");



    async function getTranslatedData() {
        try {
            const encodedData = new URLSearchParams();
            encodedData.append('source_language', sourceLan)
            encodedData.append('target_language', targetLan)
            encodedData.append('text', data)

            const options = {
                method: 'POST',
                url: 'https://text-translator2.p.rapidapi.com/translate',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    'X-RapidAPI-Key': "61fe42194dmsha3e696751cf48edp14633fjsn5dd03c4a1e74",
                    'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
                },
                data: encodedData, //its working as a payload
            };
            const res = await axios.request(options)
            setResult(res.data.data.translatedText);
            console.log(res.data);
        } catch (error) {
            console.log("Error");
        }
    }
    return (
        <div className='translator-body'>
            <div className='select'>
                From:
                <select onChange={(e) => {
                    setSourceLan(e.target.value);
                }}
                    value={sourceLan}
                >
                    <option value="en">English</option>
                    <option value="hi">Hindi</option>
                    <option value="bn">Bengali</option>
                    <option value="ml">Malayalam</option>
                    <option value="ta">Tamil</option>
                </select >
                <br />
                <br />
                To:
                <select onChange={(e) => {
                    setTargetLan(e.target.value);
                }}
                    value={targetLan}
                >
                    <option value="en">English</option>
                    <option value="hi">Hindi</option>
                    <option value="bn">Bengali</option>
                    <option value="ml">Malayalam</option>
                    <option value="ta">Tamil</option>
                </select>
                <div className='textarea'>
                    <textarea cols='50' rows='8' onChange={(e) => {
                        setData(e.target.value);
                    }}></textarea>

                    <p>{result}</p>

                    <button onClick={getTranslatedData}>Translator</button>
                </div>
            </div>
        </div>
    )
}

export default Translator;