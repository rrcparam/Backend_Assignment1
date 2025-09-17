import request from "supertest";
import app from "../src/app";

describe("API Endpoints", () => {

  describe("GET /api/v1/health", () => {
    it("should return 200 and health info", async () => {

      // Act
      const response = await request(app).get("/api/v1/health");

      // Assert
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("status", "OK");
      expect(response.body).toHaveProperty("uptime");
      expect(response.body).toHaveProperty("timestamp");
      expect(response.body).toHaveProperty("version");
    });
  });

  describe("GET /api/v1/portfolio/performance", () => {
    it("should return portfolio performance with correct structure", async () => {

      // Act
      const response = await request(app).get("/api/v1/portfolio/performance"); 

      // Assert
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("initialInvestment");
      expect(response.body).toHaveProperty("currentValue");
      expect(response.body).toHaveProperty("profitOrLoss");
      expect(response.body).toHaveProperty("percentageChange");
      expect(response.body).toHaveProperty("performanceSummary");
    });
  });

  describe("GET /api/v1/portfolio/largest-holding", () => {
    it("should return the asset with the largest value", async () => {

      // Act
      const response = await request(app).get("/api/v1/portfolio/largest-holding");  

      // Assert
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("name");
      expect(response.body).toHaveProperty("value");
      expect(response.body.value).toBeGreaterThanOrEqual(0);
    });
  });

  describe("GET /api/v1/portfolio/allocation", () => {
    it("should return array of asset allocations with percentages", async () => {

      // Act
      const response = await request(app).get("/api/v1/portfolio/allocation");  
      
      // Assert
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);

      expect(response.body.length).toBeGreaterThan(0);
      expect(response.body[0]).toHaveProperty("name");
      expect(response.body[0]).toHaveProperty("percentage");

      response.body.forEach((allocation: any) => {
        expect(typeof allocation.percentage).toBe("number");
        expect(allocation.percentage).toBeGreaterThanOrEqual(0);
        expect(allocation.percentage).toBeLessThanOrEqual(100);
      });
    });
  });

});
