document.addEventListener('DOMContentLoaded', () => {
    const students = [];
    const studentTableBody = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    const studentForm = document.getElementById('studentForm');
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const gradeInput = document.getElementById('grade');
    const submitBtn = document.getElementById('submitBtn');
    const studentIndexInput = document.getElementById('studentIndex');

    function renderTable() {
        studentTableBody.innerHTML = ''; // Clear the table
        students.forEach((student, index) => {
            const row = studentTableBody.insertRow();
            row.insertCell(0).textContent = student.name;
            row.insertCell(1).textContent = student.age;
            row.insertCell(2).textContent = student.grade;

            const actionsCell = row.insertCell(3);
            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', () => editStudent(index));
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => deleteStudent(index));
            actionsCell.appendChild(editBtn);
            actionsCell.appendChild(deleteBtn);
        });
    }

    function addStudent() {
        const name = nameInput.value;
        const age = ageInput.value;
        const grade = gradeInput.value;
        if (name && age && grade) {
            const index = studentIndexInput.value;
            if (index !== '') {
                // Edit existing student
                students[index] = { name, age, grade };
            } else {
                // Add new student
                students.push({ name, age, grade });
            }
            studentForm.reset();
            studentIndexInput.value = '';
            renderTable();
        } else {
            alert('Please fill in all fields.');
        }
    }

    function editStudent(index) {
        const student = students[index];
        nameInput.value = student.name;
        ageInput.value = student.age;
        gradeInput.value = student.grade;
        studentIndexInput.value = index;
        submitBtn.textContent = 'Update Student';
    }

    function deleteStudent(index) {
        if (confirm('Are you sure you want to delete this student?')) {
            students.splice(index, 1);
            renderTable();
        }
    }

    submitBtn.addEventListener('click', addStudent);

    renderTable(); // Initial render of the table
});
