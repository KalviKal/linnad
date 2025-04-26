import { useState } from "react";

function Loendur() {

    const [kylastusi, setKylastusi] = useState(0);

    const lisaKylastusi = () => {
        setKylastusi(kylastusi + 1);
    }

    const vahendaKylastusi = () => {
        if (kylastusi > 0) {
            setKylastusi(kylastusi - 1);
        }
    }

    return (
        <div>
            <button onClick={vahendaKylastusi}>-</button>
            {kylastusi}
            <button onClick={lisaKylastusi}>+</button>
        </div>
    )
}

export default Loendur