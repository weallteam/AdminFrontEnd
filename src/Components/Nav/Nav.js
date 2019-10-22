import React from 'react'
import "./nav.css"
import {Link} from 'react-router-dom'
import ResponsiveMenu from 'react-responsive-navbar';
export default class AdminNav extends React.Component{
  constructor(){
    super()
    this.onLogout = this.onLogout.bind(this)
  }
    render(){
        return(
            <ResponsiveMenu className="background"
            menuOpenButton={<div className="open"> <img alt="open" width="20px" height="20px" className="opentext" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFRHUTSfSedBMYubKp-4bs1ePVt6mi4p0uQyoBCk4YXeBNn_7H"/>  </div>}
            menuCloseButton={<div className="close"> <img alt="close" width="20px" height="20px" className="opentext" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFRHUTSfSedBMYubKp-4bs1ePVt6mi4p0uQyoBCk4YXeBNn_7H"/> </div>}
            changeMenuOn="500px"
            largeMenuClassName="large-menu-classname"
            smallMenuClassName="small-menu-classname"
            menu={
              <ul>
                <Link className="Link" to="/service">View Service Added Count Per Year</Link>
                <Link className="Link" to="/user">View User Added Count Per Year</Link>
                <Link className="Link" to="/category">Add Categories</Link>
              </ul>
            }
          />

        )
    }

    onLogout(e){
      console.log("token removed")
      window.localStorage.removeItem("token")
    }

   
}