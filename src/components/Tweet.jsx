import ProfileImage from "./ProfileImage"
import User from "./User"
import Timestamp from "./Timestamp"
import Message from "./Message"
import Action from "./Action"

function Tweet( props ) {
  return (
    <div className="tweet">
      <ProfileImage img={props.tweet.user.image}/>

      <div className="body">
        <div className="top">
          <User user={props.tweet.user}/>
          <Timestamp stamp={props.tweet.timestamp}/>
        </div>

        <Message message={props.tweet.message}/>

        <Action />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
