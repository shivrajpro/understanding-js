// run json-server --watch db.json command before including this file in html
(async function () {
    try {
        const response = await fetch("http://localhost:3000/employees"); // works if file is in public/
        const data = await response.json();
        let employees = data;
        console.log("Loaded JSON:", data);
        let selectedEmployeeId = employees[0].id;
        let selectedEmployee = employees[0];

        const employeeList = document.querySelector(".employee-list");
        const employeeDetail = document.querySelector(".employee-detail");

        const modalContainer = document.querySelector(".modal-overlay");
        const addBtn = document.getElementById("addEmployeeBtn");
        const employeeForm = document.querySelector(".employee-form");

        const dobInput = document.querySelector(".employee-dob");
        dobInput.max = `${new Date().getFullYear() - 18}-${new Date()
            .toISOString()
            .slice(5, 10)}`;

        employeeForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = new FormData(employeeForm);
            const empData = {};

            const values = [...formData.entries()];
            values.forEach((val) => {
                empData[val[0]] = val[1];
            });
            empData.id = employees[employees.length - 1].id + 1;
            empData.age = `${new Date().getFullYear() - parseInt(empData.dob.slice(0, 4), 10)
                }`;
            empData.imageUrl =
                empData.imageUrl || "https://cdn-icons-png.flaticon.com/512/0/93.png";

            employees.push(empData);
            modalContainer.style.display = "none";
            console.log(empData, employees);
            renderEmployees();
        });

        addBtn.addEventListener("click", () => {
            modalContainer.style.display = "flex";
        });

        modalContainer.addEventListener("click", (e) => {
            if (e.target.className === "modal-overlay") {
                modalContainer.style.display = "none";
            }
        });

        employeeList.addEventListener("click", (e) => {
            if (e.target.tagName === "P" && selectedEmployeeId != e.target.id) {
                selectedEmployeeId = e.target.id;
                renderEmployees();

                //add employee detail logic
                renderSingleEmployee();
            }

            // DELETE EMPLOYEE LOGIC
            if (e.target.tagName === "BUTTON") {
                console.log("id", e.target.parentNode.id);
                const empIdClicked = e.target.parentNode.id;
                if (confirm("Are you sure to delete this employee?")) {
                    employees = employees.filter((emp) => emp.id != empIdClicked);

                    if (String(selectedEmployeeId) === empIdClicked) {
                        selectedEmployeeId = employees[0] ? employees[0].id : -1;
                        selectedEmployee = employees[0] || {};

                        renderSingleEmployee();
                    }
                    renderEmployees();
                }
            }
        });

        const renderEmployees = () => {
            employeeList.innerHTML = "";
            employees.forEach((emp) => {
                const employee = document.createElement("p");
                employee.classList.add("employee-list-item");
                employee.setAttribute("id", emp.id);

                if (parseInt(selectedEmployeeId, 10) === emp.id) {
                    employee.classList.add("selected");
                    selectedEmployee = emp;
                }

                employee.innerHTML = `${emp.name}`;

                const deleteButton = document.createElement("button");
                deleteButton.classList.add("btn-danger");
                deleteButton.innerHTML = "X";
                employee.append(deleteButton);

                employeeList.append(employee);
            });
        };

        renderEmployees();

        const renderSingleEmployee = () => {
            if (selectedEmployeeId == -1) {
                employeeDetail.innerHTML = "";
                return;
            }

            employeeDetail.innerHTML = `
        <div class="img-container" >
            <img class="employee-avatar" src="${selectedEmployee.imageUrl}" width="150" height="150" />
        </div>
        <h2> ${selectedEmployee.name} (${selectedEmployee.age}) </h2>
        <div class="employee-personal-details">
            <span> ${selectedEmployee.email} | ${selectedEmployee.phone} | ${selectedEmployee.location} </span>
        </div>
        <div class="employee-job-details" >
            <p> ${selectedEmployee.department} </p>
        </div>
        `;
        };

        if (selectedEmployee) {
            renderSingleEmployee();
        }
    } catch (error) {
        console.error("Error loading JSON:", error);
    }
})();
