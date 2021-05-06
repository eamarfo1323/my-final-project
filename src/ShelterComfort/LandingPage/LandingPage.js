import Button from '../Button/Button'
// import { useHistory } from 'react-router-dom';
import LandCss from './LandingPage.module.css'
import image2 from '../pictures/Shelter2.png'
// import SearchPage from '../SearchPage/SearchPage'
import  {useAppContext} from '../Context/Context'
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUP/signUp'




function LandingPage() {
    const{state,dispatch}= useAppContext()

    const changestate = (type) =>{
        dispatch({type:type})
    }

    // let history  = useHistory()

    // function goToPage(path){
    //     history.push(path)
    // }

    // function signup(e){
    //     e.preventDefault()
    //     goToPage('/signup')
    // }
    // function signin(e){
    //     e.preventDefault()
    //     goToPage('/login')
    // }



    return (
        <div className={LandCss.main}>
            <div className={LandCss.top}> 
            <div className={LandCss.topleft} >
            <Button onclick={()=> changestate("showsignup")} className={LandCss.but} text="signup" />
            <Button onclick={()=> changestate("showsignin")} className={LandCss.but} text="login" />
            </div>
            <div className={LandCss.topmiddle}>
            <h1 className={LandCss.logoname} > SHELTER</h1>
            <img className={LandCss.imagetag2} src={image2} alt="alter" />
            <h1 className={LandCss.logoname} > COMFORT</h1>
            </div>
            <div className={LandCss.topright} >
            <Button className={LandCss.but} text="About" />
            </div>
            </div>
            <div className= {LandCss.down}>
            <div className={LandCss.dleft}>
            {/* <SearchPage className={LandCss.SearchPage}/> */}
            {state.showsignin && <SignIn/>}
            {state.showsignup && <SignUp/>}
            </div >
            <div  className={LandCss.dright}>
                <h1 className={LandCss.hello}>HELLO! WELCOME</h1>
                <h4 className={LandCss.hello2}> This is where you can look for a place to rent </h4>
                <h4 className={LandCss.hello3}>or put out your space for rent </h4>
            <Button className={LandCss.but0} text="Advertise Your Space On Here!" />
            
            </div>
           
            </div>
        </div>
    )
}

export default LandingPage;
