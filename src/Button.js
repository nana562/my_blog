class Button extends React.Component {
    handleClick() {
        var i = 0
        i++;
    }

    render() {
        // This syntax ensures `this` is bound within handleClick
        return ( <
            div >
            <
            button onClick = "handleClick()" > Upvote < /button> <
            input type = "text"
            id = "inc"
            value = "0" > < /input> <
            /div>
        );
    }
}
export default Button