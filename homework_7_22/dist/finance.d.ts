export declare namespace Finance {
    class LoanCalculator {
        principal: number;
        annualRate: number;
        years: number;
        constructor(principal: number, // сумма кредита
        annualRate: number, // годовая процентная ставка (например, 0.12 = 12%)
        years: number);
        getMonthlyPayment(): number;
    }
    class TaxCalculator {
        income: number;
        taxRate: number;
        constructor(income: number, // доход
        taxRate: number);
        getTaxAmount(): number;
    }
}
//# sourceMappingURL=finance.d.ts.map