import  {useState} from 'react';
export function Counter(){
    const [counter, setCounter] = useState(0);
    function increment(){
        setCounter(counter + 1)
    }
    return(
        <di>
            <h1>{counter}</h1>
            <button type="button" onClick={increment}>
                increment
            </button>
        </di>
    );
}