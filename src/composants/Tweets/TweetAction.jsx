
export default function TweetAction (props){
    return (
        <div className="tweet-action">
            <div className="action">
                <img src={props.image} />
              <span>{props.action}</span>
            </div>
              
        </div>
    )
}