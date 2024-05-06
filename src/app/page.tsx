"use client"

import CardComponent from "@/component/CardComponent";

export default function Home() {

  function handleClick () {
    console.log("Container Clicked")
  }
  return (
    <>
      <h1>Card Component</h1>
      <CardComponent
       imageStyles={{m:"20px", width:"50px", height:"50px"}}
       containerProps={{sx : {display:"flex", flexDirection:"column", width:"400px", borderRadius:"0.8rem", alignItems:"center", justifyContent:"center"}, className:"flag", onClick:handleClick}} 
       contentProps={{sx:{ display:"flex",  justifyContent:"center", alignItems:"center"}}}
       userDetails={{
        firstName:"Chandan",
        lastName: "Bhai"
       }}
       buttonProps= {true}
      />
    </>
  );
}
 