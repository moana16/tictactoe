import { Component } from "react";
import '../styles/Square.css'

export default class Square extends Component {
    
    
    render() {
        return(
            <button className="square"
            onClick={()=> this.props.onClick()}
            >{this.props.value}</button>
        )
    }
}