import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PgElevenB = () => {

    const router = useRouter()

    const [option, selectOption] = useState(0)
    const [option2, selectOption2] = useState(0)
    const [q1, setQ1] = useState("") 
    const [q2, setQ2] = useState("") 
    const [q3, setQ3] = useState("")
    
    const [lq1, setlQ1] = useState("") 
    const [lq2, setlQ2] = useState("") 
    const [lq3, setlQ3] = useState("") 
    

    
    useEffect(() => {
        setQ1(localStorage.getItem("q1"))
        setQ2(localStorage.getItem("q2"))
        setQ3(localStorage.getItem("q3"))
        
        setlQ1(localStorage.getItem("lq1"))
        setlQ2(localStorage.getItem("lq2"))
        setlQ3(localStorage.getItem("lq3"))

        console.log(q1, q2, q3, lq1, lq2, lq3);
    }, [])

    function skip(){
        router.push("/12")    
    }

    function swap(){
        if(option!==0 && option2!==0){
            localStorage.setItem("q"+option2, localStorage.getItem("lq"+option))
            router.push("/12")
        } else {
            alert("select options");
        }
    }

    return ( 
        <div style={{overflow:"hidden", margin:"-8px", maxHeight:"100vh"}}>

            <img src="img/Train_Background_Blurred.jpg" style={{objectFit:"cover", maxHeight:"100vh", maxWidth:"100vw", height:"100%", width:"100%"}}></img>

            <div style={{position:"absolute", top:"10%", width:"70vw"}}>
                <div style={{display:"flex", justifyContent:"space-evenly"}}>
                    <div style={option===1?{display:"inline-block", borderRadius:"1rem", backgroundColor:"rgba(0, 0, 0, 0.5)", textAlign:"center", color:"white", fontSize:"1.5rem", border:"3px solid white"}:{display:"inline-block", borderRadius:"1rem", backgroundColor:"rgba(0, 0, 0, 0.5)", textAlign:"center", color:"white", fontSize:"1.5rem"}} onClick={() => selectOption(1)}>
                        <div>
                            <img src="img/potion3.png" style={{height:"150px"}}/>
                        </div>
                        <div>
                            {lq1}
                        </div>
                    </div>
                    <div style={option===2?{display:"inline-block", borderRadius:"1rem", backgroundColor:"rgba(0, 0, 0, 0.5)", textAlign:"center", color:"white", fontSize:"1.5rem", border:"3px solid white"}:{display:"inline-block", borderRadius:"1rem", backgroundColor:"rgba(0, 0, 0, 0.5)", textAlign:"center", color:"white", fontSize:"1.5rem"}} onClick={() => selectOption(2)}>
                        <div>
                            <img src="img/potion3.png" style={{height:"150px"}}/>
                        </div>
                        <div>
                            {lq2}
                        </div>
                    </div>
                    <div style={option===3?{display:"inline-block", borderRadius:"1rem", backgroundColor:"rgba(0, 0, 0, 0.5)", textAlign:"center", color:"white", fontSize:"1.5rem", border:"3px solid white"}:{display:"inline-block", borderRadius:"1rem", backgroundColor:"rgba(0, 0, 0, 0.5)", textAlign:"center", color:"white", fontSize:"1.5rem"}} onClick={() => selectOption(3)}>
                        <div>
                            <img src="img/potion3.png" style={{height:"150px"}}/>
                        </div>
                        <div>
                            {lq3}
                        </div>
                    </div>
                </div>

                <br />

                <div style={{display:"flex", justifyContent:"space-evenly"}}>
                    <div style={option2===1?{display:"inline-block", borderRadius:"1rem", backgroundColor:"rgba(0, 0, 0, 0.5)", textAlign:"center", color:"white", fontSize:"1.5rem", border:"3px solid white"}:{display:"inline-block", borderRadius:"1rem", backgroundColor:"rgba(0, 0, 0, 0.5)", textAlign:"center", color:"white", fontSize:"1.5rem"}} onClick={() => selectOption2(1)}>
                        <div>
                            <img src="img/potion3.png" style={{height:"150px"}}/>
                        </div>
                        <div>
                            {q1}
                        </div>
                    </div>
                    <div style={option2===2?{display:"inline-block", borderRadius:"1rem", backgroundColor:"rgba(0, 0, 0, 0.5)", textAlign:"center", color:"white", fontSize:"1.5rem", border:"3px solid white"}:{display:"inline-block", borderRadius:"1rem", backgroundColor:"rgba(0, 0, 0, 0.5)", textAlign:"center", color:"white", fontSize:"1.5rem"}} onClick={() => selectOption2(2)}>
                        <div>
                            <img src="img/potion3.png" style={{height:"150px"}}/>
                        </div>
                        <div>
                            {q2}
                        </div>
                    </div>
                    <div style={option2===3?{display:"inline-block", borderRadius:"1rem", backgroundColor:"rgba(0, 0, 0, 0.5)", textAlign:"center", color:"white", fontSize:"1.5rem", border:"3px solid white"}:{display:"inline-block", borderRadius:"1rem", backgroundColor:"rgba(0, 0, 0, 0.5)", textAlign:"center", color:"white", fontSize:"1.5rem"}} onClick={() => selectOption2(3)}>
                        <div>
                            <img src="img/potion3.png" style={{height:"150px"}}/>
                        </div>
                        <div>
                            {q3}
                        </div>
                    </div>
                </div>
            </div>

            <div style={{position:"absolute", padding:"3rem 0 0 0", bottom:"0", left:"0", minHeight:"30vh", width:"100%", textAlign:"center", backgroundColor:"rgba(0, 0, 0, 0.5)", zIndex:"2", fontSize:"2.4rem", color:"white", display:"flex"}}>
                <div style={{flex:"4"}}>
                    Choose one quality you'd give up to acquire one of your leader's quality.
                    <div style={{textAlign:"right", marginTop:"2rem"}}>
                        <span style={{backgroundColor:"#95B26A", borderRadius:"5rem", padding:"1rem 2rem", marginRight:"5rem", cursor:"pointer"}} onClick={skip}>Skip</span>
                        <span style={{backgroundColor:"#95B26A", borderRadius:"5rem", padding:"1rem 2rem", marginRight:"5rem", cursor:"pointer"}} onClick={swap}>Swap</span>
                    </div>
                </div>
                <div style={{flex:"2"}}>
                    <img src="img/suspicious vendor.png" style={{position:"absolute", right:"0", bottom:"0", height:"80vh"}}/>    
                </div>
            </div>
        </div>
     );
}
 
export default PgElevenB;