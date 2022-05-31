const firm = new Company();

addPerson.onclick = function () {
    const person = new Person(personId.value.trim(), firstName.value.trim(), lastName.value.trim(), age.value);
    const employee = new Employee(personId.value.trim(), firstName.value.trim(), lastName.value.trim(), age.value, salary.value)

    if(firm.addEmployee(employee))
    {
        clearStats()
        firm.addEmployee(employee)
        const li = employee.showEmployee(employee)
        const del = employee.delButton()
        del.onclick = function ({target}) {
            clearStats()
            target.parentElement.remove();
            firm.removeEmployee(employee.id)
        }
        li.append(del)
        personsList.append(li);
    }
    else{
    alert(`Person with id = ${person.id} exists`);}
}
calcStats.onclick = function()
{
    firm.calcStats()
}
