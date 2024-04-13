import MessageError from "../../errors";

export default function TweetEditorInput({ register, ref, error }) {
  return <div>
    <input
      ref={ref}
      type="text"
      name="Post"
      className="tweet-editor-input"
      placeholder="What’s happening?"
      {...register("text", { required: true, maxLength: 100 })}
    />
    { error.text && <MessageError error={ error} />}
  </div>
}
