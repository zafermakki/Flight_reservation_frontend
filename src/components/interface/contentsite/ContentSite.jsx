import React from 'react'
import DeltaLogo from "../../../images/Delta-Air.png"
import AmericanLogo from "../../../images/American.png"
import United from "../../../images/United.png"
import Emirates from "../../../images/Emirates.png"

import "./contentsite.css";

const ContentSite = () => {
  return (
    <div className='container-contentsite'>
        <h1>Best Airlines for Travel</h1>
        <div className='all-card'>
            <div class="card">
            <div class="card2">
                <h4>Delta Air Lines</h4>
                <p style={{marginLeft:"5px",color:"#fff"}}>Is an American airline founded in 1924, headquartered in Atlanta. It serves over 300 global destinations.</p>
                <img style={{width:"200px",marginLeft:"16%",marginTop:"30px"}} src={DeltaLogo}/>
            </div>
            </div>
            <div class="card">
            <div class="card2">
                <h4>American Airlines</h4>
                <p style={{marginLeft:"5px",color:"#fff"}}>Is one of the largest airlines in the world, founded in 1930,headquarted in Fort Worth, offering flights to over 350 destinations.</p>
                <img style={{width:"200px",marginLeft:"16%"}} src={AmericanLogo}/>
            </div>
            </div>
            <div class="card">
            <div class="card2">
                <h4>United Airlines</h4>
                <p style={{marginLeft:"5px",color:"#fff"}}>Is an American airline established in 1926, headquartered in Chicago, serving over 350 destinations worldwide.</p>
                <img style={{width:"200px",marginLeft:"16%"}} src={United}/>
            </div>
            </div>
            <div class="card">
            <div class="card2">
                <h4>Fly Emirates</h4>
                <p style={{marginLeft:"5px",color:"#fff"}}>Is a state-owned airline founded in 1985 in Dubai, offering flights to over 150 global destinations.</p>
                <img style={{width:"100px",marginLeft:"33%",marginTop:"40px"}} src={Emirates}/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ContentSite