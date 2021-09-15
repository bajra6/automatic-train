import { useRouter } from "next/router";
import { useState } from "react";

const PgFour = () => {

    const router = useRouter()

    const [lq1, setlq1] = useState("");
    const [lq2, setlq2] = useState("");
    const [lq3, setlq3] = useState("");
    const [leader, setLeader] = useState("");

    function handleSubmit(){
        if(lq1.length>0 && lq2.length>0 && lq3.length>0 && leader.length>0){
            localStorage.setItem("lq1",lq1)
            localStorage.setItem("lq2",lq2)
            localStorage.setItem("lq3",lq3)
            localStorage.setItem("leader", leader)
            router.push("/5")
        } else {
            alert("enter all details")
        }
    }

    return ( 
        <div style={{overflow:"hidden", margin:"-8px", maxHeight:"100vh"}}>
            <img src="img/Train_Background_Blurred.jpg" style={{objectFit:"cover", maxHeight:"100vh", maxWidth:"100vw", height:"100%", width:"100%"}}></img>

            <div style={{position:"absolute", top:"0", left:"0", display:"flex", width:"100vw", alignItems:"center"}}>
                <div style={{flex:"4", display:"flex", flexDirection:"column"}}>
                    <div style={{textAlign:"center"}}><img src="img/Leader Logo.png" style={{height:"250px"}}/></div>
                    <div style={{textAlign:"center"}}><input placeholder="Leader" value={leader} onChange={(event) => setLeader(event.target.value)}/></div>
                </div>
                <div style={{flex:"6", display:"flex", flexDirection:"column"}}>
                    <div style={{alignItems:"center", display:"flex"}}>
                        <img src="img/1.png" style={{height:"150px"}}/>
                        <input placeholder="quality 1" value={lq1} onChange={(event) => setlq1(event.target.value)}></input>
                    </div>
                    <div style={{alignItems:"center", display:"flex"}}>
                        <img src="img/2.png" style={{height:"150px"}}/>
                        <input placeholder="quality 2" value={lq2} onChange={(event) => setlq2(event.target.value)}></input>
                    </div>
                    <div style={{alignItems:"center", display:"flex"}}>
                        <img src="img/3.png" style={{height:"150px"}}/>
                        <input placeholder="quality 3" value={lq3} onChange={(event) => setlq3(event.target.value)}></input>
                    </div>
                </div>
            </div>

            <div style={{position:"absolute", padding:"3rem 7rem 2rem 7rem", bottom:"0", left:"0", minHeight:"25vh", maxWidth:"100%", textAlign:"center", backgroundColor:"rgba(0, 0, 0, 0.5)", zIndex:"2", fontSize:"2.4rem", color:"white"}}>
                Oh, one more thing! How about you write down the name of a leader you look up to. While you’re at it, be sure also to jot down some of their qualities you look up to. Flattery can get you places, no?
            </div>
            <div style={{position:"absolute", top:"7vh", right: "5vw", padding:"1rem 2rem", borderRadius:"2rem",backgroundColor:"#95B26A", fontSize:"2rem", cursor:"pointer", color:"white"}} onClick={handleSubmit}>
                SUBMIT
            </div>
        </div>
     );
}
 
export default PgFour;