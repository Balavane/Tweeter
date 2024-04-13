import React, { useContext, useState } from "react";
import Tweets from "../Components/Tweets";
import TweetEditor from "../Components/Tweet-Editor";
import Header from "../Components/Header";
import { TweetContext } from "../contexts/tweets";
import {ChangeT }from "../contexts/ajout";



export default function Timeline() {
  const tweet = useContext(TweetContext);
  const [tab, setTab] = useState(tweet.tweets);
  return (
    <div>
      <ChangeT.Provider  value ={{tab, setTab}}>
      <Header />
      <TweetEditor  />
        <Tweets  />
        </ChangeT.Provider>
    </div>
  );
}
