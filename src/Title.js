import React from 'react';
import './Title.css';

const Title = (props) => {

    return (
    
        <span className={'title ' + props.fontColor}>Mam na imię: {props.name}</span>
      
    );
    



}


export default Title;
