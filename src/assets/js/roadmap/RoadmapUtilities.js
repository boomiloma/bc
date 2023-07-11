export default class Roadmap {
  constructor() {
    this.identityDictionary = {
      b: "banker", // banker
      p: "player", // player
      t: "tie", // tie
      q: "banker", // banker banker-pair
      w: "banker", // banker banker-pair player-pair
      e: "banker", // banker player-pair
      f: "player", // player banker-pair
      g: "player", // player banker-pair player-pair
      h: "player", // player player-pair
      i: "tie", // tie banker-pair
      j: "tie", // tie banker-pair player-pair
      k: "tie", // tie player-pair
      l: "banker", // banker
      m: "banker", // banker banker-pair
      n: "banker", // banker banker-pair player-pair
      o: "banker", // banker player-pair
      z: "banker", // lucky 6
      r: "banker", // lucky 6 banker-pair
      s: "banker", // lucky 6 player-pair
      u: "banker", // lucky 6 banker-pair player-pair

      a: "banker", // banker small
      aq: "banker", // banker banker-pair small
      aw: "banker", // banker banker-pair player-pair small
      ae: "banker", // banker player-pair small
      c: "banker", // banker big
      cq: "banker", // banker banker-pair big
      cw: "banker", // banker banker-pair player-pair big
      ce: "banker", // banker player-pair big

      d: "player", // player small
      df: "player", // player banker-pair small
      dg: "player", // player banker-pair player-pair small
      dh: "player", // player player-pair small

      x: "player", // player big
      xf: "player", // player banker-pair big
      xg: "player", // player banker-pair player-pair big
      xh: "player", // player player-pair big

      v: "tie", // tie small
      vi: "tie", // tie banker-pair small
      vj: "tie", // tie banker-pair player-pair small
      vk: "tie", // tie player-pair small

      y: "tie", // tie big
      yi: "tie", // tie banker-pair big
      yj: "tie", // tie banker-pair player-pair big
      yk: "tie", // tie player-pair big

      zh: "banker", // lucky Small
      za: "banker", // lucky 6banker-pair small
      zb: "banker", // lucky 6banker-pair player-pair small
      zc: "banker", // lucky 6player-pair small

      zd: "banker", // lucky 6big
      ze: "banker", // lucky 6banker-pair big
      zf: "banker", // lucky 6banker-pair player-pair big
      zg: "banker", // lucky 6player-pair big
    };
  }

  get bankerIdentities() {
    return Object.entries(this.identityDictionary)
      .filter((x) => x[1] === "banker")
      .map((x) => x[0]);
  }

  get playerIdentities() {
    return Object.entries(this.identityDictionary)
      .filter((x) => x[1] === "player")
      .map((x) => x[0]);
  }

  get tieIdentities() {
    return Object.entries(this.identityDictionary)
      .filter((x) => x[1] === "tie")
      .map((x) => x[0]);
  }

  /**
   * Used as utility getter for sub classes
   */
  get hasFullRow() {
    return this.matrix.some((row) => {
      return !!row[this.cols - 1];
    });
  }

  /**
   * Used as utility getter for sub classes
   */
  truncateFirstColumn() {
    const tail = ([, ...t]) => t;

    return this.matrix.map((row) => {
      return [...tail(row), 0];
    });
  }
  get roadmap() {
    return this.matrix.map((row) => {
      return row.map((col) => {
        return col ? col.value : 0;
      });
    });
  }

  equalizeArrays(isDerived = false) {
    let maxLength = 0;
    let arrays = this.matrix;
    for (let i = 0; i < arrays.length; i++) {
      if (arrays[i].length > maxLength) {
        maxLength = arrays[i].length;
      }
    }

    if(isDerived) {
      if(maxLength % 2 != 0) {
        maxLength+=1
      }
    }
    
    for (let i = 0; i < arrays.length; i++) {
      while (arrays[i].length < maxLength) {
        arrays[i].push(0);
      }
    }
    // for (let i = 0; i < arrays.length; i++) {
    //   if (arrays[i].length % 2 !== 0) {
    //     arrays[i].push(0);
    //   }
    // }
    return arrays;
    // this.matrix = arrays
  }

  /**
   * Used as utility getter for sub classes
   */
  get lastColumn() {
    const [prevRow, prevCol] = this.previousCoordinates;

    return this.matrix[prevRow][prevCol] || null;
  }
}
