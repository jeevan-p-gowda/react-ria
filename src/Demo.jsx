function Demo(){
    // every component must return JSX
    // conslodated html element
    const name = "Jeevan"
    return (<div>
        <h1>Hello from Demo component</h1>
        <p>This is a paragraph</p>
        <p>Hello from {name}</p>
        <p>{name.toUpperCase()}</p>
        <p>{9+8}</p>
        </div>
    );
}

export default Demo;