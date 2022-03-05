// import { useState } from 'react';
// export default function Counter({text}){
//     const [counter, setCounter] = useState(0);
//     const [input, setInput] = useState('');
//     const increment = () => setCounter(counter + 1);
//     const decrement = () => setCounter(counter - 1);
//     const inputChange = e => {
//         console.log('input change', e.target.value);
//         setInput(e.target.value);
//     }
//     const addButtonClick = () => {
//         console.log(' was clicked');
//         setCounter(counter + parseInt(input));
//         setInput('');
//     }
//     return <div>
//         <h1>{text} {counter}</h1>
//         <button onClick={increment}>Increment</button>
//         <button onClick={decrement}>Decrement</button>
//         <input type='number' onChange={inputChange} value={input}/>
//         <button onClick={addButtonClick}>Add by</button>
//     </div>
// }

