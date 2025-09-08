// // task 1
// import { capitalize, reverseString } from "./stringUtils.js";
// console.log(capitalize("hello world")); // Hello world
// console.log(reverseString("TypeScript")); // tpircSpeyT
// task 2
import { Finance } from './finance.js';
// Создаём объект для кредита
const loan = new Finance.LoanCalculator(100000, 0.12, 5);
// 100000 евро, 12% годовых, срок 5 лет
console.log("Ежемесячный платёж:", loan.getMonthlyPayment().toFixed(2));
// Создаём объект для налога
const tax = new Finance.TaxCalculator(50000, 0.2);
// доход 50000 евро, налог 20%
console.log("Сумма налога:", tax.getTaxAmount().toFixed(2));
//# sourceMappingURL=index.js.map