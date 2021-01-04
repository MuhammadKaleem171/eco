import React from 'react'

import './SignInandSignUp.styles.scss'
import SignIn from '../../Componets/SignIn/SignIn.component'
import SignUp from '../../Componets/SignUp/SignUp.component'

const SignInandSignUp=()=>{

    return(
<div  className='sign-in-and-sign-up' >
    <SignIn />
    <SignUp />
</div>

)
}

export default SignInandSignUp;