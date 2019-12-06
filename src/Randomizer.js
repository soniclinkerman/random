import React, {Component} from "react";
import Ken from "./images/Ken.jpg"
import DDD from "./images/DDD.jpg"
import Bowser from "./images/Bowser.jpg"
import Game from "./images/G&W.jpg"
import Greninja from "./images/Greninja.jpg"
import Ridley from "./images/Ridley.jpg"
import Character from "./Character";
import "./css/Randomizer.css"
class Randomizer extends Component{
    static defaultProps = {
        characters: [Ken, DDD, Bowser, Game, Greninja, Ridley]
    }
    constructor(props) {
        super(props);
        this.state = {
            characterlist: Ken
        }
    
        this.randomCharacter = this.randomCharacter.bind(this)
    }

    randomCharacter() {
        let x = this.props.characters[
            Math.floor(Math.random() * this.props.characters.length)
        ]

        this.setState({
            characterlist: x
        })
     
    }

    update() {
        alert("No New Updates Yet")
    }

    render() {
        
        return(
            <div>
                <div className="section-one">
                <h1>Character Randomizer</h1>
                <a  href="#" class="help" onClick={this.update}>?</a>
                </div>

                <div className="section-two">
            
                <Character character= {this.state.characterlist} />

                </div>

                <div className="section-three">
                
                <div class="button">
                <a class="btn" href="#" onClick={this.randomCharacter}>Change Character</a>
                </div>
                </div>
                </div>
        )
    }

}

export default Randomizer