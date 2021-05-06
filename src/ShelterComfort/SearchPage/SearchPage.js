import SearchCss from '../SearchPage/SearchPage.module.css'
// import Select from '../Select'
import Button from '../Button/Button'


function SearchPage(props){

    return(

        <div>

            <form  className={SearchCss.form2}>
                <div>
                <h3>Do You want A Place To Rent?</h3>
                <br/>
                <input type="text" placeholder="Search..Town"/>
                </div>
                <br/>

                <div>
                <label for="Regions">Select A Region:</label>

                    <select name="Regions" id="Regions">
                    <option value="Select">Select</option>
                    <option value="volta">volta</option>
                    <option value="Greater">Greater Accra</option>
                    <option value="Brong">Brong Ahafo</option>
                    </select>
                </div>
                <br/>
                <div>
                    
                <label for="Regions">Select Property Type</label>

                        <select name="Regions" id="Regions">
                        <option value="Select">Select</option>
                        <option value="apartment">Apartment</option>
                        <option value="SpaceforEvents"> Space for Events</option>
                        <option value="Brong">Single Room</option>
                        </select>
                </div>
                <br/>
                <Button className={SearchCss.but2} text="Search " />
                

            </form>



        </div>
    )
}

export default SearchPage;