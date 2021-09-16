import TapToContinue from "../components/TapToContinue";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PgTwenty = () => {

    const router = useRouter()

    const [q1, setq] = useState("")

    useEffect(() => {
        setq(localStorage.getItem("q1"))
    }, [])

    return ( 
        <div style={{overflow:"hidden", margin:"-8px", maxHeight:"100vh"}}>
            <img src="img/tren.jpeg" style={{objectFit:"cover", maxHeight:"100vh", maxWidth:"100vw", height:"100%", width:"100%"}}></img>

            <div style={{position:"absolute", top:"20vh", left:"40vw", backgroundColor:"rgba(0, 0, 0, 0.5)", borderRadius:"2rem"}}>
                <img src="img/potion3.png" style={{height:"40vh"}}/>
                <div style={{textAlign:"center", color:"white", fontSize:"2rem"}}>{q1}</div>
            </div>

            <div style={{position:"absolute", padding:"3rem 7rem 0 7rem", bottom:"0", left:"0", minHeight:"25vh", maxWidth:"100%", textAlign:"center", backgroundColor:"rgba(0, 0, 0, 0.5)", zIndex:"2", fontSize:"2.4rem", color:"white"}}>
                As you open your eyes after swimming tirelessly, you find yourself on land. You look up and you reach your destination. You lost almost everything except that one shining quality of yours.Congratulations! Hope you made a good choice! 
            </div>

            <div style={{position:"absolute", top:"7vh", right:"7vw", backgroundColor:"red", color:"white", borderRadius:"5rem", padding:"1rem 2rem", fontSize:"2rem", cursor:"pointer"}} onClick={() => router.push("/")}>
                FINISH
            </div>
        </div>
     );
}
 
export default PgTwenty;