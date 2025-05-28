const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'Javascript' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Talent Acquisition' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Accounts Payable' },
    { id: 4, name: 'Emily Davis', age: 26, department: 'Marketing', salary: 42000, specialization: 'Content Strategist' },
    { id: 5, name: 'Michael Brown', age: 40, department: 'IT', salary: 70000, specialization: 'Backend Developer' },
    { id: 6, name: 'Sarah Wilson', age: 33, department: 'HR', salary: 48000, specialization: 'HR Manager' },
    { id: 7, name: 'David Lee', age: 29, department: 'Finance', salary: 55000, specialization: 'Budget Analyst' },
    { id: 8, name: 'Laura Clark', age: 31, department: 'IT', salary: 53000, specialization: 'UI/UX Designer' },
    { id: 9, name: 'James Lewis', age: 38, department: 'Operations', salary: 62000, specialization: 'Logistics Coordinator' },
    { id: 10, name: 'Karen Walker', age: 27, department: 'Marketing', salary: 41000, specialization: 'SEO Specialist' },
    { id: 11, name: 'Chris Hall', age: 32, department: 'Sales', salary: 47000, specialization: 'Account Executive' },
    { id: 12, name: 'Nancy Allen', age: 36, department: 'HR', salary: 49000, specialization: 'Compensation Analyst' },
    { id: 13, name: 'Brian Young', age: 34, department: 'Finance', salary: 61000, specialization: 'Financial Analyst' },
    { id: 14, name: 'Jessica King', age: 25, department: 'Sales', salary: 43000, specialization: 'Sales Representative' },
    { id: 15, name: 'Anthony Wright', age: 41, department: 'Operations', salary: 66000, specialization: 'Operations Manager' },
];


// Function to display all employees
var displayEmployees = function (){
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary} | ${employee.specialization}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
};
displayEmployees();

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary} | ${employee.specialization}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
      document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary} | ${foundEmployee.specialization}</p>`;
    }
    else{
        document.getElementById('employeesDetails').innerHTML = '<p>no employee has been found with this ID</p>';
    }
}

function findEmployeeBySpecialiaztion (){
    const foundEmployee = employees.find(employee => employee.specialization == 'Javascript');
    if(!foundEmployee){
        document.getElementById('employeesDetails').innerHTML = '<p>no employee has been found with this specialization</p>';
    }else{
        document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary} | ${foundEmployee.specialization}</p>`;
    }
}