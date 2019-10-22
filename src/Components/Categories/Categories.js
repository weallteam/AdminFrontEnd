import React from 'react'
import Nav from '../Nav/Nav'
import "./categories.css"
import axios from 'axios'
export default class Categories extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            image:null,
            file:null,
            categories:[],
            title:""
        }
        this.imageOnchange = this.imageOnchange.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onAddCat = this.onAddCat.bind(this)
    }
    
    render(){
        var this_Image
        if(this.state.imageUrl !== null){
            this_Image = <img width="30%" height="100px" alt="Your Categories Pic" className="profile_input" src={this.state.imageUrl}/>
        }else{
            this_Image = null
        }
        return(
            <div>
                <Nav/>
                <div className="Categories">
                    <div className="viewCategories">
                        <h1>All Categories</h1>
                        {
                            this.state.categories.map(catgory =>(
                                <div className="viewCat" key={catgory.id}>
                                <h3>{catgory.title}</h3>
                                <img width="20%" height="80px" alt="Your Categories Pic" className="profile_input" src={"http://localhost:8000/Images/upload/category/"+catgory.url}/>
                                </div>
                            ))
                        }
                        
                    </div>
                    <div className="addCategories">
                        <h1>Add Categories</h1>
                        {this_Image}
                        <input type="file" className="provideimage" onChange={this.imageOnchange} placeholder="Provide Image File"/>
                        <input type="text" className="providecaption" value={this.state.title} onChange={this.onChange} placeholder="Enter Title For Your Category..."/>
                        <button id={this.props.username} onClick={this.onAddCat} className="createpost">Create Category</button>
                    </div>
                </div>
            </div>
            

        )
    }
    imageOnchange(e){
        this.setState({
            imageUrl:URL.createObjectURL(e.target.files[0]),
            file:e.target.files[0]
        })
}

    onChange(e){
        this.setState({
            title:e.target.value
        })
    }
    onAddCat(e){
        e.preventDefault()
        if(this.state.file === null){
            alert("Please Choose Image")
            return
        }
        if(this.state.title === ""){
            alert("Please Fill in the caption")
            return
        }
        var formdata = new FormData()
        formdata.append("title",this.state.title)
        formdata.append("imageFile",this.state.file)
        axios.post("http://localhost:8000/service/addCategory",formdata)
        .then((result)=>{
            alert("Category Added")
            axios.get("http://localhost:8000/service/viewCategory")
        .then((res)=>{
            this.setState({
                categories: res.data
            })
            console.log(res.data)            
        })
        .catch((err)=>{
            alert("Error getting categories")
        })
        })
        .catch((error)=>{
            alert("Error adding Category")
        })

    }

    componentDidMount(){
        axios.get("http://localhost:8000/service/viewCategory")
        .then((res)=>{
            this.setState({
                categories: res.data
            })
            console.log(res.data)            
        })
        .catch((err)=>{
            alert("Error getting categories")
        })
    }
}