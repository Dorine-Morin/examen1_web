import React, { Component } from 'react';
import Enfant from './Enfant';

class Parent extends Component{

    state = {
        sommeParent: 0,
        sommeEnfant: 0,
        sommeTotal: 0
    }  

    calculSommeParent = () => {        
        this.setState((state) => ({
            sommeParent: Number(state.sommeParent) + 1, 
            sommeTotal: Number(state.sommeParent) + Number(state.sommeEnfant)      
        }));
    }

    calculSommeEnfant = () => {        
        this.setState((state) => ({
            sommeEnfant: Number(state.sommeEnfant) + 2,
            sommeTotal: Number(state.sommeParent) + Number(state.sommeEnfant)      
        }));
    }  
        
    render(){
        return(
            <div>
                <button onClick={this.calculSommeParent}>+1 Parent</button>
                <label>Parent somme Parent:</label>
                <input value={this.state.sommeParent}></input>
                <label>Parent somme Enfant:</label>
                <input value={this.state.sommeEnfant}></input>
                <label>Parent somme Total:</label>
                <input value={this.state.sommeTotal}></input>
                <Enfant sommeParent={this.state.sommeParent} sommeEnfant={this.state.sommeEnfant} sommeTotal={this.state.sommeTotal} calculSommeEnfant={this.calculSommeEnfant}></Enfant>
            </div>
        )
    }
}

export default Parent;