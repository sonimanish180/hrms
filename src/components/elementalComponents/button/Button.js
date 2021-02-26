import React from 'react';

const Button = ({label="Submit", onClick= ()=>{}}) => {
    return (        
        <button className="button" onClick={onClick}>{label}</button>
    );
}


export default Button;