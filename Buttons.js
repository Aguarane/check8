import React from 'react'
import tof from './s.jpg';
import photo from './d.jpg'
import pic from './aa.jpg'
import './App.css'
export default class Buttons extends React.Component{
   state = {
    Name:'Sarra',
       image: tof,
       text: "yugygyigyugyu",
style: {
color:"red"
},
     

   }

   render(){
       return (
       <div>
           <button id="btt" onClick={()=>this.setState({Name:'Sarra', text:'yugygyigyugyu', image:tof, style:{color: "blue"}})}>Sarra</button>
           <button id="att" onClick={()=>this.setState({Name:'Harlod', text:'this is harlod', image:photo})}>harlod</button>
           <button id="ctt" onClick={()=>this.setState({Name:'daniel', text:'this is daniel', image:pic})}>daniel</button>
           <p>{this.state.Name}</p> 
        <img className="Bt" src={this.state.image} alt="ygyu"></img>
       <p style={{color : this.state.style.color}}>{this.state.text}</p>
       </div>
       )
   }

}
