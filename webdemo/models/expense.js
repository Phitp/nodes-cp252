class Expense {
  /**
   Represents a Expense.
   @constructor
   @param {date} date - The date of the expense.
   @param {float} income - The author of the book.
   @param {float} expense - This is expense.
   @param {string} detail - This is detail.
 */
  constructor(date, income, expense, detail) {
    this.date = date;
    this.income = parseFloat(income) || 0;
    this.expense = parseFloat(expense) || 0;
    this.detail = detail || '';
  }
}

/**
 * Class ExpenseModel.
 * @class
 */
class ExpenseModel {
  constructor() {
    this.expenses = [];
  }

/**
 * add expense numbers passed to the function.
 * @param {float} expense - A positive number.
 */
  add(expense) {
    this.expenses.push(expense);
  }

/**
 * return expense numbers from stack.
 * @return {array} expense - array of positive number
 */
  getAll() {
    return this.expenses;
  }

  /**
   * Calculates the total income from the expenses array.
   * @return {number} The sum of all income properties.
   */
  getTotalIncome() {
    return this.expenses.reduce((sum, exp) => sum + (exp.income || 0), 0);
  }

  /**
   * Calculates the total expenses.
   * @return {number} The sum of all expense properties.
   */
  getTotalExpense() {
    return this.expenses.reduce((sum, exp) => sum + (exp.expense || 0), 0);
  }

  /**
   * Calculates the remaining balance.
   * @return {number} Total Income minus Total Expense.
   */
  getMoneyLeft() {
    return this.getTotalIncome() - this.getTotalExpense();
  }
}

module.exports = { Expense, ExpenseModel };
