import React, {useEffect, useState} from "react"

const Button = (props) => {
    const [click, setClick] = useState(0)
    
    useEffect(() => {
        document.title = `Вы нажали ${click}`
    })

    return (
        <div>
            <button className="filter-button" onClick={() => setClick(click + 1)}>{props.text} </button>
        </div>
        
    )
}

Button.defaultProps = {
    text: "Button"
}

export default Button