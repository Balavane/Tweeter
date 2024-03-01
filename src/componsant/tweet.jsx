import Frame from "../assets/Tweet.png"
import TweetContent from "./tweet_content.jsx"
import Tweet_avatar from "./tweet_avatar.jsx"

export default function Tweets (){
    return <> 
        
            <img src={ Frame } alt="" />
        
        <div className="tweet">
        <Tweet_avatar />
        <TweetContent />
            
        </div>
        
        
        
    </>

} 