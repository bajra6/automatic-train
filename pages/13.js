import TapToContinue from "../components/TapToContinue";
import { useRouter } from "next/router";

const PgThirteen = () => {

    const router = useRouter()

    return ( 
        <div style={{overflow:"hidden", margin:"-8px", maxHeight:"100vh"}} onClick={() => router.push("/14")}>


            <img src="img/Train_Background_Blurred.jpg" style={{objectFit:"cover", maxHeight:"100vh", maxWidth:"100vw", height:"100%", width:"100%"}}></img>


            <div style={{position:"absolute", padding:"3rem 7rem 2rem 7rem", bottom:"0", left:"0", minHeight:"25vh", maxWidth:"100%", textAlign:"center", backgroundColor:"rgba(0, 0, 0, 0.5)", zIndex:"2", fontSize:"2.4rem", color:"white", display:"flex"}}>
                <div style={{flex:"4"}}>
                    Well hello saviour ! we have held the passengers with us ! “  Now that you want to be a Savour , how about a deal !? You have really less time . To save these folks , give me your quality in return !! Hurry up !!
                </div>
                <div style={{flex:"2"}}>
                    <img src="img/trainjacker.png" style={{position:"absolute", right:"0", bottom:"0", height:"80vh"}}/>    
                </div>
            </div>
            <TapToContinue />
        </div>
     );
}
 
export default PgThirteen;