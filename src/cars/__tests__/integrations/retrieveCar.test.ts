import { prisma } from "../../../../prisma/database"
import { carCreateBodyMock } from "../__mocks__/car.mocks"
import { carDefaultExpects } from "../utils/carDefaultExpect";
import { request } from "../utils/request";

describe("Integration test: retrieve car", () => {

    test("should be able to retrieve car successfully", async () => {
        const createdCar = await prisma.car.create({data: carCreateBodyMock});

        const data = await request
        .get(`/cars/${createdCar.id}`)
        .expect(200)
        .then((response) => response.body);

        expect(data).toBeDefined();
        carDefaultExpects(data, carCreateBodyMock);
    });

    test("should throw error when car is invalid", async () => {
        const data = await request
          .get(`/cars/876548sadas`)
          .expect(404)
          .then((response) => response.body);
    
        expect(data.message).toBe("Car not found.");
      });
   
})