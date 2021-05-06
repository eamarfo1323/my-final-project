
// import Inputs from '../Inputs'
import Predash from '../Dashboard/Predashboard.module.css'
import Button from '../Button/Button'
import SearchPage from '../SearchPage/SearchPage'
// import image2 from '../pictures/Shelter2.png'
// import dashimage1 from '../pictures/Avatar2.png'
import dashimage2 from '../pictures/click.png'
// import dashimage3 from '../pictures/click2.png'
import AdvertisePage from '../AdvertisePage/AdvertisePage'
import  {useAppContext} from '../Context/Context'



function Predashboard() {



    const{state,dispatch}= useAppContext()

    const changestate = (type) =>{
        dispatch({type:type})
    }


    return (
        <div className={Predash.main}>
            <div className={Predash.left}>
            {/* <img className={Predash.dashimage1}  src={dashimage1} alt="alter" /> */}
            {/* <SearchPage className={Predash.search} /> */}
            

            </div>
            <div className={Predash.right}>
                <div className={Predash.righttop}>
                    <h1 className={Predash.logoname} > SHELTER COMFORT</h1>
                    {/* <img className={Predash.imagetag2} src={image2} alt="alter" /> */}
                    {/* <h1 className={Predash.logoname} > COMFORT</h1> */}

                </div >
                <div className={Predash.rightdown}>

                    <div className={Predash.rightdown1}>

                        <div className={Predash.rightdown11}>
                            <div className={Predash.first}>
                            <img className={Predash.dashimage2}  src={dashimage2} alt="alter" />
                            <h4 className={Predash.firstwrite}> Checkout Spaces You Have Advertise</h4>
                            </div>
                            <div className={Predash.second}>
                            {/* <img className={Predash.dashimage3}  src={dashimage3} alt="alter" /> */}
                            <img className={Predash.dashimage2}  src={dashimage2} alt="alter" />
                            <h4 className={Predash.firstwrite}> Checkout Spaces You Have Shown Interest In</h4>
                            </div>
                        </div>

                        <div className={Predash.rightdown12}>
                            <Button onclick={()=> changestate("showsignup")} className={Predash.but01} text="Advertise Your Space On Here!" />
                            <Button  onclick={()=> changestate("showsignin")} className={Predash.but0} text="Search For Available Spaces!"/>
                        </div>


                    </div>

                    <div className={Predash.rightdown2}>
                        {/* <AdvertisePage/> */}
                        {state.showsignin && <AdvertisePage/>}
                        {state.showsignin && <SearchPage/>}
                        
                        {/* <div className={Predash.third}></div>
                <div className={Predash.fourth}></div> */}

                    </div>


                </div>

            </div>


        </div>
    )
}
export default Predashboard