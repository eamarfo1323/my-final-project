
import DashboardCSS from '../Dashboard/Dashboard.module.css'
import image2 from '../pictures/Shelter2.png'
import SearchPage from '../SearchPage/SearchPage'
import Button from '../Button/Button'

function Dashboard(){

    return(

        <div className= {DashboardCSS.main} >
             <div className={DashboardCSS.top}> 
            <div className={DashboardCSS.topleft} >
            </div>
            <div className={DashboardCSS.topmiddle}>
            <h1 className={DashboardCSS.logoname} > SHELTER</h1>
            <img className={DashboardCSS.imagetag2} src={image2} alt="alter" />
            <h1 className={DashboardCSS.logoname} > COMFORT</h1>
            </div>
            <div className={DashboardCSS.topright} >
            </div>
            </div>
            <div className= {DashboardCSS.down}>
            <div className={DashboardCSS.dleft}>
            <SearchPage className={DashboardCSS.SearchPage}/>
            </div >
            <div  className={DashboardCSS.dright}>
            <Button className={DashboardCSS.but0} text="Advertise Your Space On Here!" />
            
            </div>
           
            </div>
       
        </div>
        
    )
}

export default Dashboard