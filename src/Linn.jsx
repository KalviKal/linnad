
import Loendur from "./Loendur";

function Linn(props) {
    const linn = props.linn;
    const tervitus = "Tere tulemast Pariisi!";

    

    return (
        <div>
            <h2>{linn.nimi}</h2>
            {tervitus}
            <img className="linnPilt" src={linn.pilt} alt=""></img>
            <Loendur />
            <p>{linn.kirjeldus}</p>
            
        </div>
    )
}

export default Linn