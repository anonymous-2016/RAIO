function AvatarOld(props) {
    return (
        <img 
            className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    );
}


const Avatar = (props) => {
    return (
        /* user={prop.author} */
        <img 
            className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    );
};


export default Avatar;



