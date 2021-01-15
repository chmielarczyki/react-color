import React from 'react';
import './ButtonPanel.css';


const ButtonPanel = (props) => {

    return (
        <div className='button-panel'>
            <button value='Ala' onClick={() => {
                props.onChangeNameMtd('Ala', 'red' )
            }}>Czerwony</button>
            <button value='Ula' onClick={() => {
                props.onChangeNameMtd('Ula', 'blue' )
            }}>Niebieski</button>
            <button value='Ola' onClick={() => {
                props.onChangeNameMtd('Ola', 'green' )
            }}>Zielony</button>
        </div>
    );
}

// class ButtonPanel extends Component {

//     handleOnClick = (e) => {
//         const name = e.target.value;
//         this.props.onClick(name);
//       }

//     render() {
//         return (
//             <div className='button-panel'>
//                 <button value='Ala' onClick={this.handleOnClick}>Czerwony</button>
//                 <button value='Ula' onClick={this.handleOnClick}>Niebieski</button>
//                 <button value='Ola' onClick={this.handleOnClick}>Zielony</button>
//             </div>
//         );

//     }
// }

export default ButtonPanel;
