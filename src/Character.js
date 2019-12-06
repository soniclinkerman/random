import React, {Component} from "react";
import "./css/Character.css"


class Character extends Component{
    render() {
        return(
            <div>   
                <img class ="image"src={this.props.character} /> 
            </div>
        )
    }
}


export default Character