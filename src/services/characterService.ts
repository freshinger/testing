import { Character, getCharacter } from "../api/getCharacter";

export async function getCharacterName(id: number): Promise<string> {
  const character = await getCharacter(id);
  console.log("test 2");
  return character.name;
}
