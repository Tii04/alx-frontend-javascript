interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

class Director implements DirectorInterface {
    workDirectorTasks(): string {
        throw new Error("Method not implemented.");
    }
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

class Teacher implements TeacherInterface {
    workDirectorTasks(): string {
        throw new Error("Method not implemented.");
    }
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

function createEmployee(salary: number): Director | Teacher {
    if (salary as number && salary < 500) return new Teacher();
    else return new Director();
}

function isDirector(employee: Director | Teacher): employee is Director {
    return (employee instanceof Director) ? true : false;
}

function executeWork(employee: Director | Teacher): string {
    return isDirector(employee) ? employee.workDirectorTasks() : employee.workTeacherTasks();
}

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

// Subjects
type Subjects = 'Math' | 'History';
function teachClass(todayClass: Subjects): string{
  return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
}

console.log(teachClass('Math'));
console.log(teachClass('History'));