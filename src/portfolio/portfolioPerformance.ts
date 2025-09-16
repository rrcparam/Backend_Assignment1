export interface PortfolioPerformance {

  initialInvestment: number;
  currentValue: number;
  profitOrLoss: number;
  percentageChange: number;
  performanceSummary: string;

}


function getPerformanceSummary(percentageChange: number, profitOrLoss: number): string {

  switch (true) {

    case percentageChange > 20:
      return "Portfolio gained significantly with  profit of $${profitOrLoss}.";

    case percentageChange > 10:
      return "Portfolio gained moderately withh profit of $${profitOrLoss}.";

    case percentageChange > 0.1:
      return "Portfolio gained slightly with the profit of $${profitOrLoss}.";

    case percentageChange === 0:
      return "Portfolio has no change.";

    case percentageChange > -10:
      return "Portfolio lost slightly with loss of $${-profitOrLoss}.";

    case percentageChange > -20:
      return "Portfolio lost moderately with the loss of $${-profitOrLoss}.";
      
    default:
      return "Portfolio lost significantly with a loss  of $${-profitOrLoss}.";
  }
}


export function calculatePortfolioPerformance(
  initialInvestment: number,
  currentValue: number
): PortfolioPerformance {
  const profitOrLoss = currentValue - initialInvestment;
  const percentageChange = (profitOrLoss / initialInvestment) * 100;

  const performanceSummary = getPerformanceSummary(percentageChange, profitOrLoss);

  return {
    initialInvestment,
    currentValue,
    profitOrLoss,
    percentageChange,
    performanceSummary,
  };
}
