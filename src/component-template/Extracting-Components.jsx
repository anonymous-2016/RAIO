

function formatDate(date) {
    return date.toLocaleDateString();
}

function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img 
                    className="Avatar"
                    src={props.author.avatarUrl}
                    alt={props.author.name}
                />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

const app_node = document.querySelector('#app_node');
const approot = "";
const root = document.querySelector(`#${approot ? approot : "app"}`);

// id === "#id_name"
const app = (approot="app") => {
    console.log(`approot ${approot}`);
    let app = document.querySelector(`#${approot}`);
    console.log(`App ${app}`);
    return app;
};

// document.getElementById('root')

ReactDOM.render(
    <Comment 
        date={comment.date} 
        text={comment.text} 
        author={comment.author}
    />, 
    document.getElementById('root')
);


ReactDOM.render(
    <Comment {...comment} />, 
    document.getElementById('root')
);

// object

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
};

