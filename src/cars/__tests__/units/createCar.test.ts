import { createCarService } from "../../services";
import { carCreateBodyMock, carMock } from "../__mocks__/car.mocks"
import { prismaMock } from "../__mocks__/prisma"

describe("Unit test: create car", () => {
    test("create car should work successfully", async () => {
        prismaMock.car.create.mockResolvedValue(carMock);

        const data = await createCarService(carCreateBodyMock)

        expect(data).toStrictEqual(carMock);
    })
})