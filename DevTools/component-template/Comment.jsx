function formatDateOld(date) {
    return date.toLocaleDateString();
}

function CommentOld(props) {
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


const formatDate = (date) => {
    return(
        date.toLocaleDateString()
    );
}

const Comment = (props) => {
    return (
        <div className="Comment">
            <UserInfo />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}


