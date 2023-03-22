const App = () => {
    return (<div class=" container tweetscontainer">
        <Tweet authorname='Bob Odenkirk' username='saulgoodman' message="It's all good, man!" tweetdate = "3/21/2023"/>
        <Tweet authorname='Lance Armstrong' username='SoDope' message="Need a lawyer. Help!" tweetdate = "3/19/2023"/>
        <Tweet authorname='Mario' username='ItsAMe' message="Not another castle!" tweetdate = "12/19/2022"/>
    </div>)
}

ReactDOM.render(<App/>, document.getElementById('root'))