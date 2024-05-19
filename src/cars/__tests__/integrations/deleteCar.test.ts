
import { prisma } from "../../../../prisma/database";
import { carCreateBodyMock, carUpdateBodyMock } from "../__mocks__/car.mocks";
import { request } from "../utils/request";


describe("Integration test: delete cars", () => {

  test("should be able to delete cars successfully", async () => {
    const car = await prisma.car.create({
      data: carCreateBodyMock,
    });

    await request.delete(`/cars/${car.id}`).expect(204);
  });

  test("should throw error when car is invalid", async () => {
    const data = await request
      .delete(`/cars/jhgv43`)
      .send(carUpdateBodyMock)
      .expect(404)
      .then((response) => response.body);

    expect(data.message).toBe("Car not found.");
  });
});
