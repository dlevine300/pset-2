const ReadlineSync = require("readline-sync");

const ANNUAL_SALARY = Number(ReadlineSync.question("\nAnnual Salary: "));

const PRETAX = 0.07;
const FED_INCOME_TAX = 0.157;
const STATE_INCOME_TAX = 0.0447;
const SOC_SEC_TAX = 0.062;
const MED_TAX = 0.0145;
const BI_MONTHLY_PAY = 24;
const PayCheck = ANNUAL_SALARY;
const PreTaxSalary = PayCheck - (PayCheck * PRETAX);
const TotalDeductionPercentage = FED_INCOME_TAX + STATE_INCOME_TAX + SOC_SEC_TAX + MED_TAX;
const AnnualPayCheck = PreTaxSalary - (PreTaxSalary * TotalDeductionPercentage);
const NetPayCheck = (AnnualPayCheck / BI_MONTHLY_PAY).toLocaleString('en', { minimunFractionDigits: 2, maximumFractionDigits: 2});

console.log("\nYour take-home pay each check will be " + NetPayCheck + ".");
