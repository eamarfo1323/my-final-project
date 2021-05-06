import AdvertCss from '../AdvertisePage/AdvertisePage.module.css'
import Inputs from '../Inputs'
import Button from '../Button/Button'
import { useAppContext } from "../Context/Context";




function AdvertisePage(){
    const {updateValues}=useAppContext();


    function submit(e){
        e.preventDefault();
    }

    return(

        <div className={AdvertCss.MainA}>
            <form className={AdvertCss.form3}>
                    <div className={AdvertCss.top}>
                    <h4 className={AdvertCss.slogan}>Fill the form to put out your Space for Rent</h4>
                </div>
                <div className={AdvertCss.semitop}>
                </div>
                <div className={AdvertCss.middle}>
                    <h4>Upload A Picture Of The Place</h4>
                    <Inputs type='file' onChange={updateValues} />
                    <Inputs label='GPS_location' name="email"  placeholder="eg...AK-328-1234" type="text" onChange={updateValues}/>
                    <Inputs  label='Contact'name="Contact" placeholder="ea...0123456789" type="number" onChange={updateValues}/>
                    <Inputs label='Amount' name="Amount"  placeholder="Monthly" type="number" onChange={updateValues}/>
                    <Inputs label='GhanaCard'name="GhanaCard"  placeholder="GHA-237479-73" type="text" onChange={updateValues}/>
                    </div>
                    <div>
                    <label for="Regions">Duration:</label>
                    <select name="Duration" id="Duration">
                    <option value="select">select</option>
                    <option value="6 months">6 Months</option>
                    <option value="1 year">1 year</option>
                    <option value="2 years">2 years</option>
                    </select>

                    </div>
                <div className={AdvertCss.down}>
                    <Button className={AdvertCss.letsgo2}  onclick={submit} text='Submit' />
                    {/* <Button text='Cancel' /> */}
                </div>
                <div className={AdvertCss.footer}> 
            
                </div>

        

            </form>



        </div>
    )
}

export default AdvertisePage;