import TweetEditor from "./composants/TweetEditor/TweetEditor"
import Header from "./composants/Header/Header" 
import Tweets from "./composants/Tweets/Tweets/"
function Timeline (){

  return (
    <>
    <div>

    </div>
    <div className='timeline'>
      <Header />
      <TweetEditor/>
      <Tweets />
    </div>
    <div>
      
    </div>
    </>
  )
}
export default Timeline 