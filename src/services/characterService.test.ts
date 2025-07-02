import * as api from "../api/getCharacter";
import { getCharacterName } from "./characterService";

jest.mock("../api/getCharacter");
jest.mock("axios");
test("test mocked axios call", async () => {
  (api.getCharacter as jest.Mock).mockResolvedValue({
    id: 1,
    name: "Rick Sanchez",
  });

  const result = await getCharacterName(1);
  expect(result).toBe("Rick Sanchez");
});
