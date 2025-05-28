const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    { id: 4, name: 'Emily Davis', age: 26, department: 'Marketing', salary: 42000 },
    { id: 5, name: 'Michael Brown', age: 40, department: 'IT', salary: 70000 },
    { id: 6, name: 'Sarah Wilson', age: 33, department: 'HR', salary: 48000 },
    { id: 7, name: 'David Lee', age: 29, department: 'Finance', salary: 55000 },
    { id: 8, name: 'Laura Clark', age: 31, department: 'IT', salary: 53000 },
    { id: 9, name: 'James Lewis', age: 38, department: 'Operations', salary: 62000 },
    { id: 10, name: 'Karen Walker', age: 27, department: 'Marketing', salary: 41000 },
    { id: 11, name: 'Chris Hall', age: 32, department: 'Sales', salary: 47000 },
    { id: 12, name: 'Nancy Allen', age: 36, department: 'HR', salary: 49000 },
    { id: 13, name: 'Brian Young', age: 34, department: 'Finance', salary: 61000 },
    { id: 14, name: 'Jessica King', age: 25, department: 'Sales', salary: 43000 },
    { id: 15, name: 'Anthony Wright', age: 41, department: 'Operations', salary: 66000 },
];

// Function to display all employees
var displayEmployees = function (){
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
};
displayEmployees();

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
      document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
    }
}