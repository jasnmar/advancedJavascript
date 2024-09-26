import { organizationData } from '/orgData.js'

function searchEmployeeById(data, id) {
    let answer
    const keys = Object.keys(data)
    if (keys.includes("id")) {
        if(data.id===id) {
            console.log(data)
            return data
        }
    } else {
        keys.some((key) => {
            if (typeof(data[key]) === "object") {
                return answer = searchEmployeeById(data[key], id)
            }
        })
    }
    return answer
/*
Challenge:
1. Write a function that searches for an employee in 'organizationData'. The function should recursively traverse the nested objects and find all employees with a specified ID. 

Stretch Goal:
💪 Complete the challenge without declaring any variable in the global scope.
*/

}

const employee = searchEmployeeById(organizationData, 5) // pass in data and employee id.

console.log(employee) // Output: [{id: 5, name: "Kwame Mensah", position: "Sales Executive"}]
