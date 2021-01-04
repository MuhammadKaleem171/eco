import React from 'react'
import './SignIn.style.scss'
import FormInput from '../Form-input/form-Input.component'
import CustomButton  from '../custom-button/custom-button.component'
import {auth,signInWithGoogle} from '../../Firebase/firebase.utils'

class SignIn extends React.Component{

    constructor(props){
        super(props);
        this.state={
email:'',
password:''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
    };
    
handleChange=event=>{
    const { value, name } = event.target;

    this.setState({ [name]: value });
};
render(){
    return(
        <div className="sign-in">
            <h2>I already have account</h2>
            <span>SingnIn with email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput type='email' name='email'
                value={this.state.email} handleChange={this.handleChange}
                label='email'
                required/>

                <FormInput type='password' name='password'
                value={this.state.password} handleChange={this.handleChange}
                label='password'
                required/>
                <div className="buttons">
                <CustomButton type='submit'> Sign in </CustomButton>
                 <CustomButton onClick={signInWithGoogle} isGoogleSignIn  >
                    SignIn with google
            </CustomButton>
                </div>

            </form>

        </div>

    )
}    

}

export default SignIn;