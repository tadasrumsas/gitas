export default function IncrementButton({total, unit}) {
    
    return <button onClick={() => total(unit + 1)}>Increment</button>;
}