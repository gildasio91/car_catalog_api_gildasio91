import { prisma } from "../../../../prisma/database"
import { carCreateBodyMock, carUpdateBodyMock } from "../__mocks__/car.mocks"
import { request } from "../utils/request";

describe("Integration test: update cars", () => {

    test("should be able to update products successfully", async () => {
        const car = await prisma.car.create({
            data:carCreateBodyMock
        });

        const data = await request
        .patch(`/cars/${car.id}`)
        .send(carUpdateBodyMock)
        .expect(200)
        .then((response) => response.body);

        const newCar = {...car, ...carUpdateBodyMock};

        expect(data).toStrictEqual(newCar);
    })

    test("should throw error when car is invalid", async () => {
        const data = await request
          .patch(`/cars/876548sadas`)
          .send(carUpdateBodyMock)
          .expect(404)
          .then((response) => response.body);
    
        expect(data.message).toBe("Car not found.");
      });
   
});