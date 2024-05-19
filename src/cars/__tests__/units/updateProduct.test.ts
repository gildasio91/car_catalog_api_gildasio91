import { partialUpdateCarService } from "../../services"
import { carMock, carUpdateBodyMock } from "../__mocks__/car.mocks"
import { prismaMock } from "../__mocks__/prisma"

describe("Unit test: update cars",  () => {
    test("update cars should work correctly", async () => {
        const newCarExpect = {...carMock, ...carUpdateBodyMock}

        prismaMock.car.update.mockResolvedValue(newCarExpect);

        const data = await partialUpdateCarService(
            carMock.id,
            carUpdateBodyMock
        )

        expect(data).toStrictEqual(newCarExpect);

    })


})