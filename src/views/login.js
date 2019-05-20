import React from 'react';
const axios = require('axios')

class Login extends React.Component {
  constructor(props){
    super(props)
    this.connect = this.connect.bind(this)
    this.getOrders = this.getOrders.bind(this)
    this.state = {
      userObject: {
        username: "techtesting-dev",
        password: "GFVSK-oNHB6"
      }
      }
  }
  async getOrders(){
    return await axios.get("https://4i48oxh8hb.execute-api.us-east-1.amazonaws.com/dev/orders/?orderStatus=paid",{
      data: this.state.tokenItem,
      params: {
        orderStatus: 'paid',
        limit: 10
      }
    }).then(res=>{
      console.log("plus de texte",res.data)
      return res.data
    })
  }
  async connect(e){
    e.preventDefault()
    axios.post("https://4i48oxh8hb.execute-api.us-east-1.amazonaws.com/dev/login", {
      username: "techtesting-dev",
        password: "GFVSK-oNHB6"
        }).then(res=>{
          console.log(res)
          this.setState({tokenItem: res.data.data})
          return res.data.data
        }).then(data=>{
          if(this.state.tokenItem){
            return this.getOrders()
          }
        }).then((datab)=>{
          console.log(datab)
        }).catch(err=>{
          console.log(err)
        })
    
  }
componentDidMount (){

}
  render (){return (
    <div className="Login">
      <form onSubmit={this.connect} method='POST'>
        <label>Login</label>
        <input type="text" name="username" id="username" defaultValue="techtesting-dev"></input>
        <label>Password</label>
        <input type="password" name="password" id="password" defaultValue="GFVSK-oNHB6"></input>
        <button type="submit">connect</button>
      </form>
    </div>
  )}
}
export default Login;
