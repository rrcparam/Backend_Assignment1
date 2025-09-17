import express, { Express,Request, Response } from "express";
import {
  calculatePortfolioPerformance,
  findLargestHolding,
  calculateAssetAllocation,
  Asset
} from "./portfolio/portfolioPerformance";

// Initialize Express application
const app: Express = express();

// Define a route

// Health check endpoint
app.get("/api/v1/health", (req, res) => {
    res.json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    });
});

// Portfolio performnce endpoint
app.get("/api/v1/portfolio/performance", (req: Request, res: Response) => {
  
  const initialInvestment = 10000;
  const currentValue = 12000;

  const result = calculatePortfolioPerformance(initialInvestment, currentValue);
  res.json(result);
});

// Largest holding
app.get("/api/v1/portfolio/largest-holding", (req: Request, res: Response) => {
  
  const assets: Asset[] = [
    { name: "Stocks", value: 5000 },
    { name: "Bonds", value: 7000 },
    { name: "Crypto", value: 3000 },
  ];

  const largest = findLargestHolding(assets);
  res.json(largest);
});

// Asset allocation endpoint
app.get("/api/v1/portfolio/allocation", (req: Request, res: Response) => {
  
  const assets: Asset[] = [
    { name: "Stocks", value: 4000 },
    { name: "Bonds", value: 6000 },
  ];

  const allocation = calculateAssetAllocation(assets);
  res.json(allocation);
});



export default app;




