import TapToContinue from "../components/TapToContinue";
import { useRouter } from "next/router";
import { useEffect } from "react";

const PgFive = () => {

    const router = useRouter()
    let _1vh = 0;

    useEffect(() => {
        _1vh = Math.round(window.innerHeight / 100) * 25 + 5 * 16
        _1vh = _1vh + "px"
        console.log(_1vh);
    }, [])

    return ( 
        <div style={{overflow:"hidden", margin:"-8px", maxHeight:"100vh"}} onClick={() => router.push("/3")}>


            <img src="img/Train_Background_Blurred.jpg" style={{objectFit:"cover", maxHeight:"100vh", maxWidth:"100vw", height:"100%", width:"100%"}}></img>


            <img src="img/Ticket Collector.png" style={{position:"absolute", right:"0", bottom:{window.innerHeight}, height:"45vh"}}/>


            <div style={{position:"absolute", padding:"3rem 7rem 2rem 7rem", bottom:"0", left:"0", minHeight:"25vh", maxWidth:"100%", textAlign:"center", backgroundColor:"rgba(0, 0, 0, 0.5)", zIndex:"2", fontSize:"2.4rem", color:"white"}}>
                Before we start, I would have to ask you to buy a ticket. The cost? Oh, one of those qualities of yours, of course. Have a safe trip.
            </div>
            <TapToContinue />
        </div>
     );
}
 
export default PgFive;