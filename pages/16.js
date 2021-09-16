import TapToContinue from "../components/TapToContinue";
import { useRouter } from "next/router";

const PgSixteen = () => {

    const router = useRouter()

    return ( 
        <div style={{overflow:"hidden", margin:"-8px", maxHeight:"100vh"}} onClick={() => router.push("/17")}>


            <img src="img/Train_Background_Blurred.jpg" style={{objectFit:"cover", maxHeight:"100vh", maxWidth:"100vw", height:"100%", width:"100%"}}></img>


            <div style={{position:"absolute", padding:"3rem 7rem 2rem 7rem", bottom:"0", left:"0", minHeight:"25vh", maxWidth:"100%", textAlign:"center", backgroundColor:"rgba(0, 0, 0, 0.5)", zIndex:"2", fontSize:"2.4rem", color:"white", display:"flex"}}>
                <div style={{flex:"4"}}>
                    Hey passenger! Here! I have a life jacket with me but if you want to make it out alive you’ll need to spare me one of your qualities. Now hurry up and choose! You don’t have much time!
                </div>
                <div style={{flex:"2"}}>
                    <img src="img/Ticket Collector.png" style={{position:"absolute", right:"0", bottom:"0", height:"80vh"}}/>    
                </div>
            </div>
            <TapToContinue />
        </div>
     );
}
 
export default PgSixteen;