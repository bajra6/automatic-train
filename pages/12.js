import TapToContinue from "../components/TapToContinue";
import { useRouter } from "next/router";

const PgTwelve = () => {

    const router = useRouter()

    return ( 
        <div style={{overflow:"hidden", margin:"-8px", maxHeight:"100vh"}} onClick={() => router.push("/13")}>


            <img src="img/Train_Background_Blurred.jpg" style={{objectFit:"cover", maxHeight:"100vh", maxWidth:"100vw", height:"100%", width:"100%"}}></img>


            <div style={{position:"absolute", padding:"3rem 0 0 0", bottom:"0", left:"0", minHeight:"30vh", width:"100%", textAlign:"center", backgroundColor:"rgba(0, 0, 0, 0.5)", zIndex:"2", fontSize:"2.4rem", color:"white", display:"flex"}}>
                <div style={{flex:"1"}}>
                I see something Fishy ! Is that the passengers Crying for help?
                </div>
            </div>
            <TapToContinue />
        </div>
     );
}
 
export default PgTwelve;