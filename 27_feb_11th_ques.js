function create(name,role,salary){
    return{
        name,
        role,
        salary,
        introduce(){
            console.log(`Hello, I m${this.name},working as a ${this.role} and my salary is ${this.salary}`)
        }
    };
}

const employee= create("alice","SDE","50000")
employee.introduce()