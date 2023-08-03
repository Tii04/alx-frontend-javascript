interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number; // ?: allows this to be optional.
    location: string;
    [propName: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
}

// Defining the interface for the function

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Example function following the interface above
// const printTeacherFunction: printTeacherFunction = (firstName: string, lastName: string) => {
//    return `${firstName[0]}. ${lastName}`;
// };

// Usage of function
// const result: string = printTeacherFunction('Tiisetso', 'Sebata');
// console.log(result); // Output: "T. Sebata"

interface studentClassInterface{
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

interface classConstructuor{
     new (firstName: string, lastName: string): studentClassInterface;
}


class studentClass implements studentClassInterface{
    
    firstName: string;
    lastName: string;
   
    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(){
        return 'Currently working';
    }

    displayName(){
        return this.firstName;
    }
}