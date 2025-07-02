export interface Character {
  id: number;
  name: string;
}

export async function getCharacter(id: number): Promise<any> {
  const character = await axios.get<any>(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  console.log("test 1");
  return character;
}
