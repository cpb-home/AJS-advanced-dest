export const character = {
  name: "Лучник",
  type: "Bowman",
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: "Двойной выстрел",
      icon: "http://...",
      description: "Двойной выстрел наносит двойной урон",
    },
    {
      id: 9,
      name: "Нокаутирующий удар",
      icon: "http://...",
      // <- обратите внимание, описание "засекречено"
    },
  ],
};

export default function getFields(char) {
  const { special } = char;
  special.forEach(el => {
    if (!('description' in el)) {
      el.description = 'Описание недоступно';
    }
  });
  return special;
}

console.log(getFields(character));