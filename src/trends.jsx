import Foll from "./composantTrends/follower";
import Follower from "./composantTrends/followerList";
import Footer from "./composantTrends/footer";
import Recherch from "./composantTrends/recherche";

export default function Trends() {
    return <div className="trend">
        <Recherch />
        <Foll />
        <Follower />
        <Footer/>
    </div>
}