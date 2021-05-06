


function Select(props){

    return(

        <div>

            
                <div>
                    <select className={props.className} name={props.name} onChange={props.onChange}>
                        <option value={props.value}>{props.text}</option>
                         
                    </select>
                </div>




        </div>
    )
}

export default Select;