import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PgElevenB = () => {

    const router = useRouter()

    const [option, selectOption] = useState(0)
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
    }, [])

    function handleSubmit(){
        if(option!==0){
            if(option===5){
                localStorage.removeItem("q5")
            } else {
                localStorage.setItem("q"+option, q5)
                localStorage.removeItem("q5")
            }
            router.push("/7")
        } else {
            alert("select a value")
        }
    }

    return ( 
        <div style={{overflow:"hidden", margin:"-8px", maxHeight:"100vh"}}>

            <img src="img/Train_Background_Blurred.jpg" style={{objectFit:"cover", maxHeight:"100vh", maxWidth:"100vw", height:"100%", width:"100%"}}></img>

            <div style={{position:"absolute", top:"30%", width:"100vw", display:"flex", justifyContent:"space-evenly"}}>
                <div style={option===1?{display:"inline-block", borderRadius:"1rem", backgroundColor:"rgba(0, 0, 0, 0.5)", textAlign:"center", color:"white", fontSize:"1.5rem", border:"3px solid white"}:{display:"inline-block", borderRadius:"1rem", backgroundColor:"rgba(0, 0, 0, 0.5)", textAlign:"center", color:"white", fontSize:"1.5rem"}} onClick={() => selectOption(1)}>
                    <div>
                        <img src="img/potion3.png" style={{height:"200px"}}/>
                    </div>
                    <div>
                        {q1}
                    </div>
                </div>
                <div style={option===2?{display:"inline-block", borderRadius:"1rem", backgroundColor:"rgba(0, 0, 0, 0.5)", textAlign:"center", color:"white", fontSize:"1.5rem", border:"3px solid white"}:{display:"inline-block", borderRadius:"1rem", backgroundColor:"rgba(0, 0, 0, 0.5)", textAlign:"center", color:"white", fontSize:"1.5rem"}} onClick={() => selectOption(2)}>
                    <div>
                        <img src="img/potion3.png" style={{height:"200px"}}/>
                    </div>
                    <div>
                        {q2}
                    </div>
                </div>
                <div style={option===3?{display:"inline-block", borderRadius:"1rem", backgroundColor:"rgba(0, 0, 0, 0.5)", textAlign:"center", color:"white", fontSize:"1.5rem", border:"3px solid white"}:{display:"inline-block", borderRadius:"1rem", backgroundColor:"rgba(0, 0, 0, 0.5)", textAlign:"center", color:"white", fontSize:"1.5rem"}} onClick={() => selectOption(3)}>
                    <div>
                        <img src="img/potion3.png" style={{height:"200px"}}/>
                    </div>
                    <div>
                        {q3}
                    </div>
                </div>
            </div>

            <div style={{position:"absolute", bottom:"7vh", right: "5vw", padding:"1rem 2rem", borderRadius:"2rem",backgroundColor:"#95B26A", fontSize:"2rem", cursor:"pointer", color:"white"}} onClick={handleSubmit}>
                SUBMIT
            </div>
        </div>
     );
}
 
export default PgElevenB;