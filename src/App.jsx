import {Header} from "./componsant/header"

import Tweet from './componsant/tweets.jsx'
import TweetEdit from "./componsant/tweetsEdit"




export default function Timeline() {
  return <div className="timeline">
    
    <Header />
    <TweetEdit />
    <Tweet />
   
    </div>
  
}