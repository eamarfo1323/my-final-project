import { Link } from 'react-router-dom';
// import { useState } from 'react';
import { useAppContext } from "../Context/Context";
import SignUpCss from '../SignUP/signUp.module.css'
import image from '../pictures/Avatar2.png'
import Inputs from '../Inputs'
import Button from '../Button/Button'





function SignUp() {
    const {updateValues, values}=useAppContext();

    // console.log (updateValues)
    // const [values, setValues] = useState({})
    
    function submit(e){
        e.preventDefault();
        let json_object = JSON.stringify(values)

        fetch('http://localhost:4000/api/v2/signup', {
            method: 'post', 
            body: json_object,
            headers: {
                   "Content-type": "application/json"
                }
                
                })

                .then(response =>response.json())
                .then(response => {
                    console.log(response);
                    
                })
    }




    return (

        <div className={SignUpCss.mainpage}>
            <form className={SignUpCss.form3}>
                    <div className={SignUpCss.top}>
                    {/* <h2 className={SignUpCss.company}>SHELTER COMFORT</h2> */}
                    <h4 className={SignUpCss.slogan}>Welcome! Create your Account</h4>
                </div>
                <div className={SignUpCss.semitop}>
                <img className={SignUpCss.imagetag} src={image} alt="alter" />
                </div>
                <div className={SignUpCss.middle}>
                    <Inputs name="username" placeholder="Username" type="text" onChange={updateValues}/>
                    <Inputs name="email"  placeholder="email" type="email" onChange={updateValues}/>
                    <Inputs name="password"  placeholder="password" type="password" onChange={updateValues}/>
                    <Inputs name="password"  placeholder="confirmpassword" type="password" onChange={updateValues}/>
                    </div>
                <div className={SignUpCss.down}>
                    <Button className={SignUpCss.letsgo2}  onclick={submit} text='SignUp' />
                    {/* <Button text='Cancel' /> */}
                </div>
                <div className={SignUpCss.footer}> 
                <Link to="/login"> <p>Already have an account?</p> </Link>
                </div>

        

            </form>
        </div>



    )

}
export default SignUp