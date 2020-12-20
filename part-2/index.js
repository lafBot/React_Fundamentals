const App = () => (
    <div>
        <Tweet username="bobRoss42" name="Bob Ross" date="12/19/2020" message="Happy mistakes" /><br></br>
        <Tweet username="superMario64" name="Mario" date="12/20/2020" message="New high score!" /><br></br>
        <Tweet username="goFast!" name="Ricky Bobby" date="12/31/2020" message="If you're not first you're last!" />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"));