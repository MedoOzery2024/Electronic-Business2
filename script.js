// تحديث الساعة والتاريخ
function updateClock() {
    const clockElement = document.getElementById('clock');
    const dateElement = document.getElementById('date');
    const now = new Date();

    const time = now.toLocaleTimeString('ar-EG');
    const date = now.toLocaleDateString('ar-EG', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    clockElement.textContent = time;
    dateElement.textContent = date;
}

setInterval(updateClock, 1000);

// إدارة الأصناف
function calculateRemaining() {
    const total = parseInt(document.getElementById('total-items').value) || 0;
    const sold = parseInt(document.getElementById('sold-items').value) || 0;
    const remaining = total - sold;

    document.getElementById('remaining-items').textContent = `الأصناف المتبقية: ${remaining}`;
}

function calculateTotal() {
    const quantity = parseInt(document.getElementById('item-quantity').value) || 0;
    const price = parseFloat(document.getElementById('item-price').value) || 0;
    const total = quantity * price;

    document.getElementById('total-price').textContent = `السعر الإجمالي: ${total} جنيه`;
}

// إدارة الموظفين
let employees = [];
let attendance = 0;
let absence = 0;

function addEmployee() {
    const name = document.getElementById('employee-name').value;
    const address = document.getElementById('employee-address').value;
    const phone = document.getElementById('employee-phone').value;

    if (name && address && phone) {
        employees.push({ name, address, phone });
        updateEmployeeList();
    } else {
        alert('يرجى إدخال جميع البيانات');
    }
}

function markAttendance() {
    attendance++;
    updateAttendanceSummary();
}

function markAbsence() {
    absence++;
    updateAttendanceSummary();
}

function updateEmployeeList() {
    const list = document.getElementById('employee-list');
    list.innerHTML = '';

    employees.forEach((employee, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${employee.name} - ${employee.address} - ${employee.phone}`;
        list.appendChild(listItem);
    });
}

function updateAttendanceSummary() {
    const summary = document.getElementById('attendance-summary');
    summary.textContent = `الحضور: ${attendance} | الغياب: ${absence}`;
}

// طباعة التقرير
function printReport() {
    window.print();
}
