import { prisma } from "../../../../prisma/database"
import { carListCreateBodyMock, carListMock } from "../__mocks__/car.mocks"
import { carDefaultExpects } from "../utils/carDefaultExpect";
import { request } from "../utils/request";

describe("Integration test: get many products", () => {

    test("should be able to get many cars successfully", async () => {
        await prisma.car.createMany({data: carListCreateBodyMock});

        const data = await request
        .get("/cars")
        .expect(200)
        .then((response) => response.body);

        expect(data).toHaveLength(carListMock.length);

        expect(data[0]).toBeDefined()
        carDefaultExpects(data[0], carListMock[0]);

        expect(data[1]).toBeDefined()
        carDefaultExpects(data[1], carListMock[1]);

    })
})