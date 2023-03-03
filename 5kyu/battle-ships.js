function damagedOrSunk(board, attacks) {
  // the battle starts here!

  // preparing data

  const scan = {};

  // scaning board

  (() => {
    const boatTypes = [1, 2, 3, 4];
    const isBoat = (num) => boatTypes.includes(num) && num;

    // scanning here
    board.reverse().forEach((row, y) => {
      row.forEach((col, x) => {
        const coords = { x: x + 1, y: y + 1 };

        if (col === isBoat(col)) {
          // register positon
          scan[col]
            ? scan[col].coords.push(coords)
            : (scan[col] = { coords: [coords] });

          // register health
          scan[col].health = scan[col].coords.length;
        }
      });
    });
  })();

  // attack helpers

  const targetIsBoat = (target) => scan[target];

  const isHit = (boat, attack) => {
    if (!scan[boat]) return false;

    return Boolean(
      scan[boat].coords.find((c) => attack.x === c.x && attack.y === c.y)
    );
  };

  // const checkHealth = () =>

  // main function

  let points = 0;

  attacks.forEach((a) => {
    const attack = {
      // reading attack from bottom left (x cord first)
      target: board.reverse()[a[1] - 1][a[0] - 1],
      coords: { x: a[0], y: a[1] },
    };

    if (targetIsBoat(attack.target)) {
      if (isHit(attack.target, attack.coords)) {
        scan[attack.target].health--;
        points++;
      }
    }
  });

  console.log({ scan, points });
}

var board = [
  [2, 0, 1, 0],
  [0, 2, 1, 0],
  [0, 0, 1, 0],
];

var attacks = [
  [3, 1],
  [3, 2],
  [3, 3],
  [1, 3],
  [2, 2],
];

var result = damagedOrSunk(board, attacks);
