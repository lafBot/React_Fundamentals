const Tweet = (props) => (
    <div>
        <b>{props.username}</b> | {props.date}<br></br>
        <i>{props.message} - {props.name}</i>
    </div>
)