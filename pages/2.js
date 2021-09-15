import TapToContinue from "../components/TapToContinue";
import { useRouter } from "next/router";

const PgTwo = () => {

    const router = useRouter()

    return ( 
        <div style={{overflow:"hidden", margin:"-8px", maxHeight:"100vh"}} onClick={() => router.push("/3")}>
            <img src="img/Train_Background.jpg" style={{objectFit:"cover", maxHeight:"100vh", maxWidth:"100vw", height:"100%", width:"100%"}}></img>
            <div style={{position:"absolute", padding:"3rem 7rem 0 7rem", bottom:"0", left:"0", minHeight:"25vh", maxWidth:"100%", textAlign:"center", backgroundColor:"rgba(0, 0, 0, 0.5)", zIndex:"2", fontSize:"2.4rem", color:"white"}}>
                Fasten your seat belts for the journey ahead! We have a few bumps and thumps ahead, but not to worry. You are in safe hands here.
            </div>
            <TapToContinue />
        </div>
     );
}
 
export default PgTwo;