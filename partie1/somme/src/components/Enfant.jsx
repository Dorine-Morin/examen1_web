import React from 'react';

function Enfant(props){
    return (
        <div>
                <button onClick={props.calculSommeEnfant}>+2 Enfant</button>
                <label>Enfant somme Parent:</label>
                <input value={props.sommeParent}></input>
                <label>Enfant somme Enfant:</label>
                <input value={props.sommeEnfant}></input>
                <label>Enfant somme Total:</label>
                <input value={props.sommeTotal}></input>         
            </div>
    )
}

export default Enfant;