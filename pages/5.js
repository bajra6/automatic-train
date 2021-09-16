import TapToContinue from "../components/TapToContinue";
import { useRouter } from "next/router";

const PgFive = () => {

    const router = useRouter()

    return ( 
        <div style={{overflow:"hidden", margin:"-8px", maxHeight:"100vh"}} onClick={() => router.push("/6")}>


            <img src="img/Train_Background_Blurred.jpg" style={{objectFit:"cover", maxHeight:"100vh", maxWidth:"100vw", height:"100%", width:"100%"}}></img>


            <div style={{position:"absolute", padding:"3rem 7rem 2rem 7rem", bottom:"0", left:"0", minHeight:"25vh", maxWidth:"100%", textAlign:"center", backgroundColor:"rgba(0, 0, 0, 0.5)", zIndex:"2", fontSize:"2.4rem", color:"white", display:"flex"}}>
                <div style={{flex:"4"}}>
                    Before we start, I would have to ask you to buy a ticket. The cost? Oh, one of those qualities of yours, of course. Have a safe trip.
                </div>
                <div style={{flex:"2"}}>
                    <img src="img/Ticket Collector.png" style={{position:"absolute", right:"0", bottom:"0", height:"80vh"}}/>    
                </div>
            </div>
            <TapToContinue />
        </div>
     );
}
 
export default PgFive;