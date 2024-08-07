function Button(props) {
    console.log(props.color);

    return (
        <button style={{
            background : "black"
        }}>{props.title}</button>
    )
}

export default Button;