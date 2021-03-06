import { useRouter } from "next/router";
import TapToContinue from "../components/TapToContinue";

const PgEight = () => {

    const router = useRouter()

    return ( 
        <div style={{overflow:"hidden", margin:"-8px", maxHeight:"100vh"}} onClick={() => router.push("/9")}>


            <img src="img/Train_Background_Blurred.jpg" style={{objectFit:"cover", maxHeight:"100vh", maxWidth:"100vw", height:"100%", width:"100%"}}></img>


            <div style={{position:"absolute", padding:"3rem 7rem 2rem 7rem", bottom:"0", left:"0", minHeight:"25vh", maxWidth:"100%", textAlign:"center", backgroundColor:"rgba(0, 0, 0, 0.5)", zIndex:"2", fontSize:"2.4rem", color:"white", display:"flex"}}>
                <div style={{flex:"2"}}>
                    <img src="img/Food_Vendor.png" style={{position:"absolute", left:"0", bottom:"0", height:"90vh"}}/>
                </div>
                <div style={{flex:"4"}}>
                    Oh, another passenger! This journey is too long for you to travel empty stomach. How about it? Want to get a snack for that rumbling tummy of yours? But in exchange, I'll keep one quality of yours
                </div>
            </div>
            <TapToContinue />
        </div>
     );
}
 
export default PgEight;