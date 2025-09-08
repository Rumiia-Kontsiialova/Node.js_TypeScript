// Задание 2
// Пространства имен для финансовых операций
// Создайте файл `finance.ts`, в котором определите пространство имен `Finance`. 
// Внутри него создайте классы:
// `LoanCalculator`, который рассчитывает ежемесячные платежи по кредиту по формуле аннуитета.
// `TaxCalculator`, который рассчитывает налог на доход.
// Используйте эти классы в файле `main.ts` для расчета платежей по кредиту и налога на примерных данных.

export namespace Finance {
  // --- Класс для расчёта кредита ---
  export class LoanCalculator {
    constructor(
      public principal: number,   // сумма кредита
      public annualRate: number,  // годовая процентная ставка (например, 0.12 = 12%)
      public years: number        // срок кредита в годах
    ) {}

    // Метод: рассчитывает ежемесячный платёж (аннуитетная формула)
    getMonthlyPayment(): number {
      const monthlyRate = this.annualRate / 12;   // переводим ставку в месяцы
      const n = this.years * 12;                  // всего месяцев

      // Формула аннуитета:
      // P * r * (1 + r)^n / ((1 + r)^n - 1)
      return (
        (this.principal * monthlyRate * Math.pow(1 + monthlyRate, n)) /
        (Math.pow(1 + monthlyRate, n) - 1)
      );
    }
  }

  // --- Класс для расчёта налога ---
  export class TaxCalculator {
    constructor(
      public income: number,   // доход
      public taxRate: number   // ставка налога (например, 0.2 = 20%)
    ) {}

    // Метод: возвращает сумму налога
    getTaxAmount(): number {
      return this.income * this.taxRate;
    }
  }
}
