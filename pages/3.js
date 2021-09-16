import { useRouter } from "next/router";
import { useState } from "react";

const PgThree = () => {

    const router = useRouter()

    const [q1, setq1] = useState("");
    const [q2, setq2] = useState("");
    const [q3, setq3] = useState("");
    const [q4, setq4] = useState("");
    const [q5, setq5] = useState("");

    function handleSubmit(){
        if(q1.length>0 && q2.length>0 && q3.length>0 && q4.length>0 && q5.length>0){
            localStorage.setItem("q1", q1)
            localStorage.setItem("q2", q2)
            localStorage.setItem("q3", q3)
            localStorage.setItem("q4", q4)
            localStorage.setItem("q5", q5)
            router.push("/4")
        } else {
            alert("enter all details")
        }
    }

    return ( 
        <div style={{overflow:"hidden", margin:"-8px", maxHeight:"100vh"}}>
            <img src="img/Train_Background_Blurred.jpg" style={{objectFit:"cover", maxHeight:"100vh", maxWidth:"100vw", height:"100%", width:"100%"}}></img>
            <div style={{position:"absolute", top:"30%", width:"100vw", display:"flex", justifyContent:"space-evenly"}}>
                <div style={{display:"inline-block"}}>
                    <div>
                        <img src="img/potion3.png" style={{height:"200px"}}/>
                    </div>
                    <div>
                        <input placeholder="quality 1" value={q1} onChange={(event) => setq1(event.target.value)}/>
                    </div>
                </div>
                <div style={{display:"inline-block"}}>
                    <div>
                        <img src="img/potion3.png" style={{height:"200px"}}/>
                    </div>
                    <div>
                        <input placeholder="quality 2" value={q2} onChange={(event) => setq2(event.target.value)}/>
                    </div>
                </div>
                <div style={{display:"inline-block"}}>
                    <div>
                        <img src="img/potion3.png" style={{height:"200px"}}/>
                    </div>
                    <div>
                        <input placeholder="quality 3" value={q3} onChange={(event) => setq3(event.target.value)}/>
                    </div>
                </div>
                <div style={{display:"inline-block"}}>
                    <div>
                        <img src="img/potion3.png" style={{height:"200px"}}/>
                    </div>
                    <div>
                        <input placeholder="quality 4" value={q4} onChange={(event) => setq4(event.target.value)}/>
                    </div>
                </div>
                <div style={{display:"inline-block"}}>
                    <div>
                        <img src="img/potion3.png" style={{height:"200px"}}/>
                    </div>
                    <div>
                        <input placeholder="quality 5" value={q5} onChange={(event) => setq5(event.target.value)}/>
                    </div>
                </div>
            </div>
            <div style={{position:"absolute", padding:"3rem 7rem 2rem 7rem", bottom:"0", left:"0", minHeight:"25vh", maxWidth:"100%", textAlign:"center", backgroundColor:"rgba(0, 0, 0, 0.5)", zIndex:"2", fontSize:"2.4rem", color:"white"}}>
                Now, before we begin, let’s make sure we have a few things handy. How about you write down some personal qualities you’d like to carry with you to this destination of yours? Keep in mind, 5 qualities are all you can carry. So choose wisely from that brain of yours.
            </div>
            <div style={{position:"absolute", top:"7vh", right: "5vw", padding:"1rem 2rem", borderRadius:"2rem",backgroundColor:"#95B26A", fontSize:"2rem", cursor:"pointer", color:"white"}} onClick={handleSubmit}>
                SUBMIT
            </div>
        </div>
     );
}
 
export default PgThree;