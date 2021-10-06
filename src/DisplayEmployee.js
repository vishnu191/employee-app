import React, {useEffect,useState} from "react"
import Axios from "axios"


function DisplayEmployee() {
    const [employee,setEmployee] = useState([])

    useEffect(
        () => {
            getEmployeeList()
        },[]
    )

    const getEmployeeList = async () => {
        try{
            const response = await Axios.get('http://localhost:8080/employees')
            const employeeData = response.data.map(item => item)
            setEmployee(employeeData)
           console.log("Response is:" +  response.data[0].active)
           console.log("Response is:" +  employeeData[0].name)
        } catch (error) {
            console.log(error)
        }
    }
 
    return (
        <div>
            <h3>Employee  details View</h3>
            {
               employee.map((item) => 
               <div key={item.id}> 
                    <p>Employee Details for: {item.name}</p>
                    <p>Role: {item.role}</p>
                    <p>Employed with Company: {item.active ? 'Yes' : 'No'}</p>
                    {console.log(item.active)}
                    <hr/>

               </div>
               )}
            
        </div>
    )

     
}

export default DisplayEmployee