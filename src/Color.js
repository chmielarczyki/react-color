import React, { useState } from 'react';
import './Color.css';

import Title from './Title';
import ButtonPanel from './ButtonPanel';


const Color = (props) => {

    const [name, setName] = useState('Ala');
    const [colorClass, setColorClass] = useState('red');
    
    const onChangeName  = (newName, newColor) => {
        setName(newName);
        setColorClass(newColor);
    
    };

        return (
            <div className='color'>
                <Title name={name} fontColor={colorClass} />
                <ButtonPanel onChangeNameMtd={onChangeName} 
                 />
            </div>
        );
    
}


// class Color extends Component {
//     constructor(props){
//         super(props);


//         this.state = {
//             colorClass: 'red',
//             name: 'Ala'
//         }
//     }

//     onChangeName = (newName, newColor) => {
//         this.setState({
//             name: newName,
//             colorClass: newColor
//         });
//     };

//     render() {

//         return (
//             <div className='color'>
//                 {/* <Title color={this.state.color} name={this.state.name} /> */}
//                 <Title name={this.state.name} fontColor={this.state.colorClass} />
//                 <ButtonPanel onChangeNameMtd={this.onChangeName} />
//             </div>
//         );
//     }
// }

export default Color;