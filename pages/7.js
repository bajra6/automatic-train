import { useRouter } from "next/router";
import TapToContinue from "../components/TapToContinue";

const PgSeven = () => {

    const router = useRouter()

    return ( 
        <div style={{overflow:"hidden", margin:"-8px", maxHeight:"100vh"}} onClick={() => router.push("/8")}>
            <img src="img/Train_Background.jpg" style={{objectFit:"cover", maxHeight:"100vh", maxWidth:"100vw", height:"100%", width:"100%"}}></img>
            <div style={{position:"absolute", padding:"3rem 7rem 0 7rem", bottom:"0", left:"0", minHeight:"25vh", maxWidth:"100%", textAlign:"center", backgroundColor:"rgba(0, 0, 0, 0.5)", zIndex:"2", fontSize:"2.4rem", color:"white"}}>
                That’s unfortunate. Well, at least we have four qualities intact. Make sure to have a tight grip on them for the ride
            </div>
            <TapToContinue />
        </div>
     );
}
 
export default PgSeven;