class Company {
    constructor() {
        this._employees = [];
    }

    get employees() {
        return [...this._employees];
    }

    addEmployee(employee) {
        const index = this._employees.findIndex(e => e.id === employee.id);
        if (index < 0) {
            this._employees.push(employee);
        }
        return index < 0;
    }
    removeEmployee(id){
        const index = this._employees.findIndex(e => e.id === id);
        if(index >= 0){
            this._employees.splice(index, 1);
        }
        return index >= 0;
    }
    calcStats ()
    {
        const divStats = document.createElement('div');
        let age = this._employees.reduce((accum, p) => accum + p.age, 0) / this._employees.length;
        const h3avg = createInfoElement(`Average age: ${age.toFixed(1)}`, 'h3');
        age = this._employees.reduce((min, p) => p.age < min ? p.age : min, this._employees[0].age);
        const h3min = createInfoElement(`Min age: ${age}`, 'h3');
        age = this._employees.reduce((max, p) => p.age > max ? p.age : max, this._employees[0].age);
        const h3max = createInfoElement(`Max age: ${age}`, 'h3');
        const salary = this._employees.reduce((accum, p) => accum + p.salary, 0)
        const h3tSalary = createInfoElement(`Total Salary: ${salary}`, 'h3');
        const aSalary = this._employees.reduce((accum, p) => accum + p.salary, 0) / this._employees.length;
        const h3aSalary = createInfoElement(`Average Salary: ${aSalary}`, 'h3');
        divStats.append(h3avg, h3min, h3max, h3tSalary, h3aSalary);
        if (stats.firstElementChild.nextElementSibling) {
        stats.replaceChild(divStats, stats.firstElementChild.nextElementSibling);
        } else {
        stats.appendChild(divStats);
    }
    }
    
       
}


