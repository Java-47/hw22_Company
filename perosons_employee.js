class Person {
    constructor(id, firstName, lastName, birthDate) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthDate = new Date(birthDate);
    }

    get id() {
        return this._id;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(firstName) {
        this._firstName = firstName;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(lastName) {
        this._lastName = lastName;
    }

    get birthDate() {
        return this._birthDate;
    }

    get age() {
        const ageDiffMs = (new Date()) - this._birthDate;
        const ageDate = new Date(ageDiffMs);
        return (ageDate.getUTCFullYear() - 1970);
    }

    fullName = function () {
        return `${this._firstName} ${this._lastName}`;
    }
}

class Employee extends Person {
    constructor(id, firstName, lastName, birthDate, salary) {
        super(id, firstName, lastName, birthDate);
        this._salary = +salary;
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        if (salary > this._salary) {
            this._salary = +salary;
        }
    }
    showEmployee(employee)
    {
        const li = createFullInfo(employee.id, employee.fullName(), employee.age, employee.salary, 'li');
        return li;   
    }
    delButton(){
        const buttonDel = createInfoElement('X', 'button');
        buttonDel.classList.add('del');
        return buttonDel;    
    }
    
}