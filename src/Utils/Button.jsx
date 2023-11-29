
import './Button.css'

function Button(props){
    return(
        <button className={props.className} onClick={props.onclick}>{props.text}</button>
    )
}


export default Button