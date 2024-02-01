import getFields, { character } from '../app';


test('Tests for damaging up with empty health', () => {
  const result = getFields(character);
  
  expect(result).toEqual([
    {
      "description": "Двойной выстрел наносит двойной урон", 
      "icon": "http://...", 
      "id": 8, "name": "Двойной выстрел"
    }, 
    {
      "description": "Описание недоступно", 
      "icon": "http://...", 
      "id": 9, 
      "name": "Нокаутирующий удар"
    }
  ]);
});