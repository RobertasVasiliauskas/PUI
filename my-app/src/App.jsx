import {useState} from 'react'
import './App.css'
import Header from './Components/Heder/Header.jsx'

function App() {
    return (
        <div className={"flex flex-col flex-1 min-h-screen"}>
            <Header/>
            <h1>Hello</h1>
        </div>
    );
}

export default App
