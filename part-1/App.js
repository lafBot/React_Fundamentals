const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Bob Ross" />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));