import TapToContinue from "../components/TapToContinue";
import { useRouter } from "next/router";

const PgEighteen = () => {

    const router = useRouter()

    return ( 
        <div style={{overflow:"hidden", margin:"-8px", maxHeight:"100vh"}} onClick={() => router.push("/19")}>
            <img src="img/Water_Background.jpg" style={{objectFit:"cover", maxHeight:"100vh", maxWidth:"100vw", height:"100%", width:"100%"}}></img>
            <TapToContinue />
        </div>
     );
}
 
export default PgEighteen;