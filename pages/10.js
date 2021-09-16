import TapToContinue from "../components/TapToContinue";
import { useRouter } from "next/router";

const PgTen = () => {

    const router = useRouter()

    return ( 
        <div style={{overflow:"hidden", margin:"-8px", maxHeight:"100vh"}}>


            <img src="img/Train_Background_Blurred.jpg" style={{objectFit:"cover", maxHeight:"100vh", maxWidth:"100vw", height:"100%", width:"100%"}}></img>

            <div style={{position:"absolute", top:"20vh", left:"17vw", fontSize:"2rem"}}>
                <div style={{backgroundColor:"yellow", borderRadius:"10rem", padding:"1rem 2rem", textAlign:"center", cursor:"pointer"}} onClick={() => router.push("/11a")}>Check out what <br/>the strange vender is selling</div>
                <div style={{backgroundColor:"yellow", borderRadius:"10rem", padding:"2rem 2rem", marginTop:"2rem", textAlign:"center", cursor:"pointer"}} onClick={() => router.push("/12")}>Stay Inside and rest</div>
            </div>


            <div style={{position:"absolute", padding:"3rem 7rem 2rem 7rem", bottom:"0", left:"0", minHeight:"25vh", maxWidth:"100%", textAlign:"center", backgroundColor:"rgba(0, 0, 0, 0.5)", zIndex:"2", fontSize:"2.4rem", color:"white", display:"flex"}}>
                <div style={{flex:"4"}}>
                    Look! There’s an odd vendor a bit ahead. They look a bit strange. Do you think we should go up to them and check them out? However, our train might leave soon. Maybe it’s best if we stay inside.
                </div>
                <div style={{flex:"2"}}>
                    <img src="img/suspicious vendor.png" style={{position:"absolute", right:"0", bottom:"0", height:"80vh"}}/>    
                </div>
            </div>
        </div>
     );
}
 
export default PgTen;