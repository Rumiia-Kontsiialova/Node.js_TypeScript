// Задание 2
// Пространства имен для финансовых операций
// Создайте файл `finance.ts`, в котором определите пространство имен `Finance`. 
// Внутри него создайте классы:
// `LoanCalculator`, который рассчитывает ежемесячные платежи по кредиту по формуле аннуитета.
// `TaxCalculator`, который рассчитывает налог на доход.
// Используйте эти классы в файле `main.ts` для расчета платежей по кредиту и налога на примерных данных.
export var Finance;
(function (Finance) {
    // --- Класс для расчёта кредита ---
    class LoanCalculator {
        principal;
        annualRate;
        years;
        constructor(principal, // сумма кредита
        annualRate, // годовая процентная ставка (например, 0.12 = 12%)
        years // срок кредита в годах
        ) {
            this.principal = principal;
            this.annualRate = annualRate;
            this.years = years;
        }
        // Метод: рассчитывает ежемесячный платёж (аннуитетная формула)
        getMonthlyPayment() {
            const monthlyRate = this.annualRate / 12; // переводим ставку в месяцы
            const n = this.years * 12; // всего месяцев
            // Формула аннуитета:
            // P * r * (1 + r)^n / ((1 + r)^n - 1)
            return ((this.principal * monthlyRate * Math.pow(1 + monthlyRate, n)) /
                (Math.pow(1 + monthlyRate, n) - 1));
        }
    }
    Finance.LoanCalculator = LoanCalculator;
    // --- Класс для расчёта налога ---
    class TaxCalculator {
        income;
        taxRate;
        constructor(income, // доход
        taxRate // ставка налога (например, 0.2 = 20%)
        ) {
            this.income = income;
            this.taxRate = taxRate;
        }
        // Метод: возвращает сумму налога
        getTaxAmount() {
            return this.income * this.taxRate;
        }
    }
    Finance.TaxCalculator = TaxCalculator;
})(Finance || (Finance = {}));
//# sourceMappingURL=finance.js.map