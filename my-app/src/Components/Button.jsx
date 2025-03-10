import React from 'react';

export default function Button({text, className}) {
    const handleClick = () => {
        console.log('Login button clicked');
        // Add your login logic here
    };

    return (
        <button className={`bg-[#1A2E40] ${className}`} onClick={handleClick}> {text} </button>
    );
}