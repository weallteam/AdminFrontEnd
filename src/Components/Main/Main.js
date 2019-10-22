import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Category from '../Categories/Categories'
import User from '../User/user'
import Service from '../Service/service'
import Intro from "../Intro/intro"
export default class Main extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" render={()=>{
                    return <Intro/>
                }}/>
                <Route exact path="/category" render={()=>{
                    return <Category/>
                }} />
                <Route exact path="/user" render={()=>{
                    return <User/>
                }} />
                <Route exact path="/service" render={()=>{
                    return <Service/>
                }} />
            </Switch>
        )
    }
}