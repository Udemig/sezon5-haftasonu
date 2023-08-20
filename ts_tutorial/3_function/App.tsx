export default function App() {

    const [counter, setCounter] = useState(0)

    return <div>
        Burası app componenti.

        Counter: {counter}
        <br />
        <button onClick={() => setCounter(counter + 1)}>
            Arttır
        </button>
    </div>
}