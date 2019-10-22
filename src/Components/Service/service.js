import React from 'react'
import {Line} from 'react-chartjs-2'
import Nav from '../Nav/Nav'
import axios from 'axios'

export default class User extends React.Component{
    constructor(){
        super()
        this.state = {
            data:null,
            loadling:true
        }
    }

    render(){
        return(
            <div>
                <Nav />
                <Line 
                data = {this.state.data}
                width={100}
                height={250}
                options={{ maintainAspectRatio: false }}
                />
            </div>
        )
    }
    componentDidMount(){

        axios.get("http://localhost:8000/service/getserviceCount")
        .then((result)=>{
             this.setState({
                data : {
                    labels: ["January", "February", "March", "April", "May", "June", "July","August","September","November","December"],
                    datasets: [{
                    label: "No Of Post in 2019",
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [result.data.jan[0].count,
                    result.data.feb[0].count,
                    result.data.march[0].count,
                    result.data.april[0].count,
                    result.data.may[0].count,
                    result.data.june[0].count,
                    result.data.july[0].count,
                    result.data.august[0].count,
                    result.data.september[0].count,
                    result.data.october[0].count,
                    result.data.november[0].count,
                    result.data.december[0].count],
                    }]
                },
                loadling:false   
            })              
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}