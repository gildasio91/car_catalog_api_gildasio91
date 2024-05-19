import { deleteCarService } from "../../services";
import { carMock } from "../__mocks__/car.mocks";

describe("Unit test: delete products", () => {
    test("delete products should work correctly", async () => {
      
      await deleteCarService(carMock.id)
    });
  });
  