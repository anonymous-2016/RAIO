function UserInfoOld(props) {
    return (
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
    );
}


const UserInfo = (props) => {
    return (
        <div className="UserInfo">
            <Avatar />
            <div className="UserInfo-name">
                {props.author.name}
            </div>
        </div>
    );
}



