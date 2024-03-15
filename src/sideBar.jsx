import Bookmark from "./composantSider/bookmark";
import Export from "./composantSider/explore";
import HomeInc from "./composantSider/homeIncon";
import InconSid from "./composantSider/incon";
import Listinc from "./composantSider/list";
import Message from "./composantSider/message";
import MoreInc from "./composantSider/more";
import Notification from "./composantSider/notification";
import Profil from "./composantSider/profil";
import Button from "./composants/TweetEditor/TweetEditorForm/button";


export default function SideBar() {
    return <div className="sideBar">
        <InconSid />
        <HomeInc />
        <Export />
        <Notification />
        <Message />
        <Bookmark/>
        <Listinc />
        <Profil/>
        <MoreInc />
        <Button /> 
        
    </div>
}