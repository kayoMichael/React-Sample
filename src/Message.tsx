export default Message;
function Message() {
    const name = 'Michael';
    if (name)
        return <h1> Hello {name} </h1>;
    return <h1> Violet Evergarden </h1>
}