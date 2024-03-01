
import reply from "../../assets/Icons/Reply.svg"
import retweet from "../../assets/Icons/Retweet.svg"
import share from "../../assets/Icons/Share.svg"
import love from "../../assets/Icons/Love.svg"

export default function TweetActions (){
   
    return <>
        <div className="tweet-actions">
            <img src={ reply } alt="" />
            <img src={ retweet } alt="" />
            <img src={ share } alt="" />
            <img src={love} alt="" />
        </div>
        </>
    
}