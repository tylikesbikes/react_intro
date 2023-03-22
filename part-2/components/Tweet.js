const Tweet = (props) => {
    return (
    <div class="alert alert-secondary">
    <p class='username lead'><b>User: {props.username}</b></p>
    <p class='authorname'><em>{props.authorname}</em></p>
    <p class='tweetdate'>Posted on: {props.tweetdate}</p>
    <p class='tweetcontent alert alert-dark'>{props.message}</p>
    </div>
    );
};