import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";

describe("calculatePortfolioPerformance", () => {
    it("returns correct result for profit (current > initial)", () => {

        // ARRANGE
        const initialInvestment = 10000;
        const currentValue = 12000;

        // ACT
        const result = calculatePortfolioPerformance(initialInvestment, currentValue);

        // ASSERT
        expect(result.profitOrLoss).toBe(2000);
        expect(result.percentageChange).toBe(20);
        expect(result.performanceSummary.toLowerCase()).toContain("gained");
    });

    it("returns correct result for loss (current < initial)", () => {


        // ARRANGE
        const initialInvestment = 10000;
        const currentValue = 8000;

        // ACT
        const result = calculatePortfolioPerformance(initialInvestment, currentValue);

        // ASSERT
        expect(result.profitOrLoss).toBe(-2000);
        expect(result.percentageChange).toBe(-20);
        expect(result.performanceSummary.toLowerCase()).toContain("lost");
    });

    it("returns correct result for no change (current = initial)", () => {

        // ARRANGE
        const initialInvestment = 10000;
        const currentValue = 10000;

        // ACT
        const result = calculatePortfolioPerformance(initialInvestment, currentValue);

        // ASSERT
        expect(result.profitOrLoss).toBe(0);
        expect(result.percentageChange).toBe(0);
        expect(result.performanceSummary.toLowerCase()).toContain("no change");
    });

    
});

// Function 1

import { findLargestHolding,Asset } from "../src/portfolio/portfolioPerformance";

describe("findLargestHolding", () => {

  it("should return the asset with the highest value", () => {
    // Arrange
    const assets: Asset[] = [
      { name: "Stocks", value: 15000 },
      { name: "House", value: 500000 },
      { name: "Bonds", value: 30000 },
    ];

    // Act
    const result = findLargestHolding(assets);

    // Assert
    expect(result).toEqual({ name: "House", value: 500000 });
  });

  it("should return null for an empty asset list", () => {
    // Arrange
    const assets: Asset[] = [];

    // Act
    const result = findLargestHolding(assets);

    // Assert
    expect(result).toBeNull();
  });


});

