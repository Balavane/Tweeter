import { useForm } from "react-hook-form";
import TweetEditorButtons from "./tweet-editor-form/Tweet-Editor-Buttons";
import TweetEditorInput from "./tweet-editor-form/Tweet-Editor-Input";
import data from "../../data/initial-data.json";
import { useContext, useRef } from "react";
import { TweetContext } from "../../contexts/tweets";
import {ChangeT} from "../../contexts/ajout";

export default function TweetEditorForm() {
  
  const { register, handleSubmit,formState: {errors}, reset } = useForm();
  const dataTweets = useContext( TweetContext );
  const {tab, setTab}=useContext(ChangeT)
  const input = useRef();

  const onSubmit = (dataForm) => {
    const newTweet = {
      user: data["current-user"],
      content: dataForm,
      actions: {
        comments: 0,
        retweet: 0,
        like: 0,
      },
    };
    dataTweets.tweets = [ newTweet, ...dataTweets.tweets ];
    setTab( dataTweets.tweets );
    
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="tweet-editor-form">
      <TweetEditorInput register={register} ref={input} error = {errors} />
      <TweetEditorButtons />
    </form>
  );
}
