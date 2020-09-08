import React from 'react'

class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        console.log(this.state);
        this.setState({
            email: '',
            password: ''
        
        })

    }

    render() {
        return ( 
            <div>
                <h1>LOCAL BLOG</h1>
            <form>
            <br/>
           
            <input name = "email"
            placeholder = "Email"
            type ="email"
            value = { this.state.email }
            onChange = { e => this.change(e)}
            /> 
            <input name = "password"
            placeholder = "Password"
            type = "password"
            value = { this.state.password }
            onChange = {e => this.change(e)}
            />  
            <button onClick = {
                (e) => this.onSubmit()}> LogIn </button>
                
            </form>
            </div>

        )
    }
}
export default Login