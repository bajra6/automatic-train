import TapToContinue from "../components/TapToContinue";
import { useRouter } from "next/router";

const PgFifteen = () => {

    const router = useRouter()

    return ( 
        <div style={{overflow:"hidden", margin:"-8px", maxHeight:"100vh"}} onClick={() => router.push("/16")}>
            <img src="img/Train_Background.jpg" style={{objectFit:"cover", maxHeight:"100vh", maxWidth:"100vw", height:"100%", width:"100%"}}></img>
            <div style={{position:"absolute", padding:"3rem 7rem 0 7rem", bottom:"0", left:"0", minHeight:"25vh", maxWidth:"100%", textAlign:"center", backgroundColor:"rgba(0, 0, 0, 0.5)", zIndex:"2", fontSize:"2.4rem", color:"white"}}>
                Oh god! There has been an explosion on the bridge ! The train is now sliding down into the river! How would you make it out alive?
            </div>
            <TapToContinue />
        </div>
     );
}
 
export default PgFifteen;