import React,{Component} from "react"
import circle from "./Spnner.gif"



export class Loading extends Component{


    render(){
        return(

            <div>
             <center>    <img src={circle} alt="loading" /> </center>
            </div>

        )
    }

}

export default Loading;
