import { Title } from "./page-title";
import { TopTweets } from "./top-tweets";


export function Header(){
  return <div class="header">
    <Title/>
    <TopTweets/>
  </div> 
  
}