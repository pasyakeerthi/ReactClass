function User(props){
    console.log(props)
    return(
        <div style={{border:"2px solid black",margin:"10px",padding:"10px"}}>
            <h1>Id:{props.id}</h1>
        <h2>UserName:{props.name}</h2>
        <h2>age:{props.age}</h2>
        <h2>place:{props.place}</h2>
        </div>
    )
} /*
import React from 'react'
class User extends React.Component{
   constructor(props){
   

}
    render(){
        return(
        <div>
        <h2>Id:{this.props.id}</h2>
        <h1>UserName:{this.props.name}</h1>
        <h2>age:{this.props.age}</h2>
        <h2>place:{this.props.place}</h2>
        </div>
        )
    }
}
    */
export default User