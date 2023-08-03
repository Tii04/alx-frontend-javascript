interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Sahar',
    lastName: 'Yakut',
    age: 19,
    location: 'Afghanistan',
}

const student2: Student = {
    firstName: 'Sidarta',
    lastName: 'Yakut',
    age: 24,
    location: 'Afghanistan',
}

let arr = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

arr.forEach((student) => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(nameCell);
    row.appendChild(locationCell);

    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
