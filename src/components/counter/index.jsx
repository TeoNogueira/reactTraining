import {useState} from 'react';


export function Counter() {

const [ counter, setCounter] = useState(0);


function increment() {

setCounter(counter + 1);

}
function decrement() {

    setCounter(counter - 1);
    
    }

return (

<div>

<h2>{counter}</h2>

<button onClick={increment}>
Increment + 1

</button>

<button onClick={decrement}>
Decrement - 1

</button>


</div>


)

}