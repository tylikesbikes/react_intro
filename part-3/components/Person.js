const Person = (props) => {
    // let ageMsg = props.age >= 18 ? "Please go vote!" : "You must be 18";
    return (
        <div class="alert alert-primary">
        <p>Learn some information about this person</p>
        <h1>Name:  {props.name.slice(0,6)}</h1>
        <h3>{props.age >= 18 ? "Please go vote!" : "You must be 18"}</h3>
       
        <ul>Hobbies:
            {props.hobbies.map(h => <li>{h}</li>)}
        </ul>
        </div>
    )
}