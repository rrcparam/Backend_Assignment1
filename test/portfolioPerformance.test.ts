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

// Function 1 tests

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

//function 2 tests
import { calculateAssetAllocation, } from '../src/portfolio/portfolioPerformance';

describe('calculateAssetAllocation', () => {

  it('should return 50% allocation for two equal assets', () => {
   
    // Arrange
    const assets: Asset[] = [
      { name: 'Stocks', value: 5000 },
      { name: 'Bonds', value: 5000 },
    ];

    // Act
    const result = calculateAssetAllocation(assets);

    // Assert
    expect(result).toEqual([
      { name: 'Stocks', percentage: 50 },
      { name: 'Bonds', percentage: 50 },
    ]);
  });

  it('should handle uneven asset values correctly', () => {
    
    // Arrange
    const assets: Asset[] = [
      { name: 'Real Estate', value: 7000 },
      { name: 'Crypto', value: 3000 },
    ];

    // Act
    const result = calculateAssetAllocation(assets);

    // Assert
    expect(result).toEqual([
      { name: 'Real Estate', percentage: 70 },
      { name: 'Crypto', percentage: 30 },
    ]);
  });

  it('should return an empty array if all asset values are zero', () => {
    // Arrange
    const assets: Asset[] = [
      { name: 'Stocks', value: 0 },
      { name: 'Bonds', value: 0 },
    ];

    // Act
    const result = calculateAssetAllocation(assets);

    // Assert
    expect(result).toEqual([]);
  });

  it('should return an empty array for empty input', () => {
    // Arrange
    const assets: Asset[] = [];

    // Act
    const result = calculateAssetAllocation(assets);

    // Assert
    expect(result).toEqual([]);
  });
});


