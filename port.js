document.addEventListener('DOMContentLoaded', () => {
    const expenseForm = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');
    const totalExpenses = document.getElementById('total-expenses');
    const currencySelect = document.getElementById('currency');

    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    function renderExpenses() {
        expenseList.innerHTML = '';
        let total = 0;
        expenses.forEach((expense, index) => {
            total += expense.amount;
            const li = document.createElement('li');
            li.innerHTML = `<span>${expense.name}: $${expense.amount} (${expense.category})</span><button class="delete-btn" onclick="deleteExpense(${index})">Delete</button>`;
            expenseList.appendChild(li);
        });
        totalExpenses.textContent = total.toFixed(2);
    }

    window.deleteExpense = function(index) {
        expenses.splice(index, 1);
        localStorage.setItem('expenses', JSON.stringify(expenses));
        renderExpenses();
    };

    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const expenseName = document.getElementById('expense-name').value;
        const expenseAmount = parseFloat(document.getElementById('expense-amount').value);
        const expenseCategory = document.getElementById('expense-category').value;
        if (expenseName && !isNaN(expenseAmount)) {
            addExpense(expenseName, expenseAmount, expenseCategory);
            expenseForm.reset();
        } else {
            alert('Please enter valid expense name and amount.');
        }
    });

    function addExpense(name, amount, category) {
        expenses.push({ name, amount, category });
        localStorage.setItem('expenses', JSON.stringify(expenses));
        renderExpenses();
    }

    // Currency conversion
    currencySelect.addEventListener('change', () => {
        const selectedCurrency = currencySelect.value;
        const USD_to_selectedCurrency = {
            'USD': 1,
            'EUR': 0.88,
            'GBP': 0.78,
            'INR': 73.50, // Approximate conversion rate to INR
            'JPY': 109.55 // Approximate conversion rate to JPY
            // Add more conversion rates as needed
        };
        const conversionRate = USD_to_selectedCurrency[selectedCurrency];
        totalExpenses.textContent = (parseFloat(totalExpenses.textContent) * conversionRate).toFixed(2);
    });
     
        

    renderExpenses();
});
