import React, { useState } from "react";


const Home = () => {
	const [selected, setSelected] = useState("red")
	const [purple, setPurple] = useState(false)

	let lights = ["red", "amber", "green"]

	let stateChange = () =>{
		setSelected(selected != lights[lights.length-1] ? lights[lights.indexOf(selected)+1]:"red")
		console.log(lights)
	}

	purple&&lights.push("purple")

	return (
		<div className="text-center">
            <div className="bg-black mx-auto" style={{width:"20px", height:"100px"}}></div>
            <div className="bg-black mx-auto rounded-4 py-3" style={{width:"100px", height:purple?"400px":"300px", boxShadow:"10px 10px 10px #888888"}}>
				<div onClick={() => setSelected("red")} className="rounded-circle bg-danger mx-auto mb-3" style={{width:"80px", height:"80px", boxShadow:selected == "red" && "0px 0px 20px 10px #ff0303ff"}}></div>
				<div onClick={() => setSelected("amber")} className="rounded-circle bg-warning mx-auto mb-3" style={{width:"80px", height:"80px", boxShadow:selected == "amber" && "0px 0px 20px 10px #f1f50eff"}}></div>
				<div onClick={() => setSelected("green")} className="rounded-circle bg-success mx-auto " style={{width:"80px", height:"80px", boxShadow: selected == "green" && "0px 0px 20px 10px #008848ff"}}></div>
				{purple == true && <div onClick={() => setSelected("purple")} className="rounded-circle mx-auto mt-3" style={{width:"80px", height:"80px", backgroundColor:"#c100fcff", boxShadow: selected == "purple" && "0px 0px 20px 10px #c100fcff"}}></div>
}
			</div>
			<button className="btn btn-light border border-2 border-dark mt-5 me-3" type="button"  onClick={stateChange}> Cambiar color </button>
			<button className="btn btn-light border border-2 border-dark mt-5 " type="button"  onClick={()=>setPurple(!purple)}>{!purple? "Activar morado" :"Desactivar morado"}</button>
		</div>
	);
};

export default Home;