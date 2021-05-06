import { useHistory} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAppContext } from '../Context/Context';
import SignCss from '../SignIn/SignIn.module.css'
import image from '../pictures/Avatar2.png'
import Inputs from '../Inputs'
import Button from '../Button/Button'

function SignIn() {
    

    let history  = useHistory()
    // const { state, dispatch } = useAppContext()
    const [message, setmessage] = useState('')

    
    // console.log(state);

    const {updateValues, values}=useAppContext();


    // function goToPage(path){
    //     history.push(path)
    // }
    
    function submit(e){
        e.preventDefault();
        let json_object = JSON.stringify(values)

        fetch('http://localhost:4000/api/v2/login', {
            method: 'post', 
            body: json_object,
            headers: {
                   "Content-type": "application/json"
                }
                
                })

                .then(response =>response.json())
                .then(response => {
                    console.log(response);
                    if (response.success){
                        history.push('/dashbord')
            
                    }
                    else{
                        setmessage(response.message)
                    }
                    
                })
            }

    


    // function signup(e){
    //     e.preventDefault()
    //     goToPage('/signup')
    // }

    console.log(values);

    return (

        <div className={SignCss.mainpage}>
            <div>
             <h1>{message}</h1>
            </div>
            <form className={SignCss.form4}>
                <div className={SignCss.top}>
                    {/* <h2 className={SignCss.company}>SHELTER COMFORT</h2> */}
                    <h4 className={SignCss.slogan}>Welcome! Please login to your Account</h4>
                </div>
                <div className={SignCss.semitop}>
                    <img className={SignCss.imagetag} src={image} alt="alter" />
                </div>
                <div className={SignCss.middle}>
                    <Inputs name="username"placeholder="Username" type="text" onChange={updateValues}/>
                    <Inputs  name="password" placeholder="password" type="password" onChange={updateValues}/>
                    </div>
                <div className={SignCss.down}>
                    <Button  className={SignCss.letsgo} onclick={submit}  text='LogIn'/>
                    {/* <br/> */}
                    <Link to="/signup"> <p>Don't Have An Account?</p> </Link>
                    {/* <Button  onClick={signup} text='SignUp'/> */}
                </div>
                

        

            </form>
        </div>



    )

}

export default  SignIn