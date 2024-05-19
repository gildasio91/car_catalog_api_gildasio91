import {  listCarsService } from "../../services";
import { carListMock } from "../__mocks__/car.mocks"
import { prismaMock } from "../__mocks__/prisma"
import { carDefaultExpects } from "../utils/carDefaultExpect";

describe("Unit test: get many cars", () => {

    test("get many cars should work correctly", async () => {
        prismaMock.car.findMany.mockResolvedValue(carListMock);

        const data = await listCarsService();

        expect(data).toHaveLength(carListMock.length);
        carDefaultExpects(data[0], carListMock[0]);
        carDefaultExpects(data[1], carListMock[1]);

    })
})  