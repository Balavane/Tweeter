import { useContext } from "react";
import Tweet from "./tweets/Tweet";
import { ChangeT } from "../contexts/ajout";

export default function Tweets() {
  const {tab,setTab} = useContext(ChangeT)
  return (
    <div className="tweets">
      {tab.map((e, i) => (
        <Tweet key={i} data={e} />
      ))}
    </div>
  );
}
