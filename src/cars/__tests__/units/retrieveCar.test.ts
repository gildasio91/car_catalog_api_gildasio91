import { retrieveCarService } from './../../services';

import {  carMock } from "../__mocks__/car.mocks"
import { prismaMock } from "../__mocks__/prisma"
import { carDefaultExpects } from "../utils/carDefaultExpect";

describe("Unit test: retrieve car", () => {

    test("retrieve car should work correctly", async () => {
        prismaMock.car.findUnique.mockResolvedValue(carMock);

        const data = await retrieveCarService(carMock.id);

        expect(data.id).toBeDefined();

        carDefaultExpects(data, carMock);
    })
});  