import React from 'react'
import "./intro.css"
import Nav from '../Nav/Nav'
export default class Intro extends React.Component{
    render(){
        return(
            <div>
                <Nav/>
            <h1 className="title">Welcome to the Admin Control Panel</h1>
            </div>
        )
    }
}