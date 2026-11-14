const expense = document.getElementById("expense");
const amount = document.getElementById("amount");
const category = document.getElementById("category");
const date = document.getElementById("date");
const addExpense = document.getElementById("addExpense");

let total = 0;

addExpense.addEventListener("click", function () {

    let expenseName = expense.value;
    let expenseAmount = amount.value;
    let expenseCategory = category.value;
    let expenseDate = date.value;

    if (
        expenseName === "" ||
        expenseAmount === "" ||
        expenseCategory === "" ||
        expenseDate === ""
    ) {
        alert("Please fill all fields");
        return;
    }

    // Get month
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    let month = months[new Date(expenseDate).getMonth()];

    // Create row
    let row = document.createElement("tr");
    

    row.innerHTML = `
        <td>${expenseName}</td>
        <td>₹${expenseAmount}</td>
        <td>${expenseCategory}</td>
        <td>${expenseDate}</td>
        <td>${month}</td>
        <td>
            <button onclick sty="deleteExpense(this)" >
                Delete
            </button>
        </td>
    `;

    document.querySelector("table").appendChild(row);

    // Total expense
    total = total + Number(expenseAmount);

document.getElementById("total").innerText = total;
document.getElementById("total").style.textAlign = "center";

    // Monthly total

    if (month === "January") {
        document.getElementById("january").innerText =
            Number(document.getElementById("january").innerText) 
            Number(expenseAmount);
    }

    if (month === "February") {
        document.getElementById("february").innerText =
            Number(document.getElementById("february").innerText) +
            Number(expenseAmount);
    }

    if (month === "March") {
        document.getElementById("march").innerText =
            Number(document.getElementById("march").innerText) +
            Number(expenseAmount);
    }

    if (month === "April") {
        document.getElementById("april").innerText =
            Number(document.getElementById("april").innerText) +
            Number(expenseAmount);
    }

    if (month === "May") {
        document.getElementById("may").innerText =
            Number(document.getElementById("may").innerText) +
            Number(expenseAmount);
    }

    if (month === "June") {
        document.getElementById("june").innerText =
            Number(document.getElementById("june").innerText) +
            Number(expenseAmount);
    }

    if (month === "July") {
        document.getElementById("july").innerText =
            Number(document.getElementById("july").innerText) +
            Number(expenseAmount);
    }

    if (month === "August") {
        document.getElementById("august").innerText =
            Number(document.getElementById("august").innerText) +
            Number(expenseAmount);
    }

    if (month === "September") {
        document.getElementById("september").innerText =
            Number(document.getElementById("september").innerText) +
            Number(expenseAmount);
    }

    if (month === "October") {
        document.getElementById("october").innerText =
            Number(document.getElementById("october").innerText) +
            Number(expenseAmount);
    }

    if (month === "November") {
        document.getElementById("november").innerText =
            Number(document.getElementById("november").innerText) +
            Number(expenseAmount);
    }

    if (month === "December") {
        document.getElementById("december").innerText =
            Number(document.getElementById("december").innerText) +
            Number(expenseAmount);
    }


    // Clear inputs
    expense.value = "";
    amount.value = "";
    category.value = "";
    date.value = "";
});


function deleteExpense(button) {

    button.parentElement.parentElement.remove();

}