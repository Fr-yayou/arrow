import React, {Component } from 'react';
import './App.css';
import { ArcherContainer, ArcherElement } from 'react-archer';
import {RIPES} from './data/Ripe'

const boxStyle = { padding: '10px', border: '1px solid black', borderRadius:50, width:'200px', backgroundColor:'#C0C0C0' };
const rootStyle = { display: 'flex', justifyContent: 'center', marginTop:10 };
const rowStyle = { marginTop:50, display: 'flex', justifyContent: 'space-between' }


const Fetch = (props) =>{
  return(
          <ArcherContainer>
    {props.pings.map((ping,index )=>{
      console.log(index)
        return(
          <div  key={index} style={rootStyle}>
            <ArcherElement id='root' relations={[{
              targetId:'2',  
              targetAnchor:'top',
              sourceAnchor:'bottom',
          }]} >
            <div style={boxStyle}>Element {ping.from}</div>
          </ArcherElement>
          </div>
        )
        // return(
        //   <div  key={ping.hop} style={rowStyle}>
        //     <ArcherElement id={ping.hop} relations={[{
        //       targetId:`${ping.hop}`,
        //       targetAnchor:'bottom',
        //       sourceAnchor:'bottom',
        //       label:<div style={{marginLeft:'-50px'}}>rtt:{ping.rtt}</div>

        //     }]}>
        //       <div style={boxStyle}>Elements{ping.ip}</div>
        //   </ArcherElement>
        //   </div>
        // )
    })}
    
  </ArcherContainer>

  )
}

export default class App extends Component {

  constructor(props){
    super(props)
    this.state={
      pings:RIPES,

    }
  }

// DATA FROM RIPE API//
  // componentDidMount(){
  //   fetch('http://localhost:8080')
  //   .then(response => response.json())
  //   .then(ping => this.setState({ping}))

  // }

  render(){


    
    return(
      <div className="App">
      <Fetch pings={this.state.pings}></Fetch>
    </div>
    )
  }

}
