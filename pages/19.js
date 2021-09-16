import TapToContinue from "../components/TapToContinue";
import { useRouter } from "next/router";

const PgNinteen = () => {

    const router = useRouter()

    return ( 
        <div style={{overflow:"hidden", margin:"-8px", maxHeight:"100vh"}} onClick={() => router.push("/20")}>
            <img src="img/Water_Background_Blurred.jpg" style={{objectFit:"cover", maxHeight:"100vh", maxWidth:"100vw", height:"100%", width:"100%"}}></img>
            <div style={{position:"absolute", padding:"3rem 7rem 0 7rem", bottom:"0", left:"0", minHeight:"25vh", maxWidth:"100%", textAlign:"center", backgroundColor:"rgba(0, 0, 0, 0.5)", zIndex:"2", fontSize:"2.4rem", color:"white"}}>
                SPLASH! You’re underwater. But thankfully the life jacket will bring you to the surface. You’re almost there.
            </div>
            <TapToContinue />
        </div>
     );
}
 
export default PgNinteen;