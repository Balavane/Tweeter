import Tbody from "./tweet_title.jsx"
import Ttext from "./tweet_text.jsx"
import Tweet_image from "./tweet_image.jsx"

export default function TweetBody() {
    return <div className="tweet-body">
        <Tbody />
        <Ttext />
        <Tweet_image />
    </div>
    
}