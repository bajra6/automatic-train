import { useRouter } from 'next/router'

export default function Home() {

  const router = useRouter()

  return (
    <div style={{overflow:"hidden", margin:"-8px", maxHeight:"100vh"}}>
      <img src="img/Start.jpg" style={{objectFit:"cover", height:"100%", width:"100%"}}></img>
      <div style={{position: "absolute", top:"50vh", right:"15vw", fontSize:"2rem", backgroundColor:"#95B26A", padding:"1rem 2rem", borderRadius:"3rem", cursor:"pointer"}} onClick={() => router.push("/2")}>Start &gt;</div>
    </div>
  )
}