const App = () => {
    return (
        <div>
            <Person age={18} name="Josephine" hobbies = {['Jogging','Joking','Jaywalking']}/>
            <Person age={15} name="Ellis" hobbies = {['Eating','Engineering']}/>
            <Person age={25} name="Katholeen" hobbies = {['Knitting','Kayaking']}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));