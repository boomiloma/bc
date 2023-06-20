export default class MappingUtils {
  static mappedResults(arr) {
    let keys = "";
    if (arr.includes("1")) {
      keys = "p";
    }
    if (arr.includes("4")) {
      keys = "b";
    }
    if (arr.includes("7")) {
      keys = "t";
    }
    if (arr.includes("1") && arr.includes("3")) {
      // Player Small
      keys = "d";
    }
    if (arr.includes("1") && arr.includes("9")) {
      // Player Big
      keys = "x";
    }
    if (arr.includes("4") && arr.includes("3")) {
      //Banker Small
      keys = "a";
    }
    if (arr.includes("4") && arr.includes("9")) {
      //Banker Big
      keys = "c";
    }
    if (arr.includes("7") && arr.includes("3")) {
      //Tie Small
      keys = "v";
    }
    if (arr.includes("7") && arr.includes("9")) {
      //Tie Big
      keys = "y";
    }
    if (arr.includes("1") && arr.includes("2")) {
      keys = "g";
    }
    if (arr.includes("4") && arr.includes("2")) {
      keys = "w";
    }
    if (arr.includes("7") && arr.includes("2")) {
      keys = "j";
    }
    if (arr.includes("1") && arr.includes("5")) {
      keys = "h";
    }
    if (arr.includes("4") && arr.includes("5")) {
      keys = "e";
    }
    if (arr.includes("7") && arr.includes("5")) {
      keys = "k";
    }
    if (arr.includes("1") && arr.includes("8")) {
      keys = "f";
    }
    if (arr.includes("4") && arr.includes("8")) {
      keys = "q";
    }
    if (arr.includes("7") && arr.includes("8")) {
      keys = "i";
    }
    if (arr.includes("6")) {
      keys = "z";
    }
    if (arr.includes("6") && arr.includes("2")) {
      keys = "u";
    }
    if (arr.includes("6") && arr.includes("5")) {
      keys = "r";
    }
    if (arr.includes("6") && arr.includes("8")) {
      keys = "s";
    }
    // PLAYER WITH SMALL AND BIG
    if (arr.includes("1") && arr.includes("8") && arr.includes("3")) {
      // Player - Banker Pair Small
      keys = "df";
    }
    if (arr.includes("1") && arr.includes("8") && arr.includes("9")) {
      // Player - Banker Pair Big
      keys = "xf";
    }
    if (arr.includes("1") && arr.includes("5") && arr.includes("3")) {
      // Player - Player Pair Small
      keys = "dh";
    }
    if (arr.includes("1") && arr.includes("5") && arr.includes("9")) {
      // Player - Player Pair Big
      keys = "xh";
    }
    if (arr.includes("1") && arr.includes("2") && arr.includes("3")) {
      // Player - Banker & Player Pair Small
      keys = "dg";
    }
    if (arr.includes("1") && arr.includes("2") && arr.includes("9")) {
      // Player - Banker & Player Pair Big
      keys = "xg";
    }
    // BANKER WITH SMALL AND BIG
    if (arr.includes("4") && arr.includes("8") && arr.includes("3")) {
      // Banker - Banker Pair Small
      keys = "aq";
    }
    if (arr.includes("4") && arr.includes("8") && arr.includes("9")) {
      // Banker - Banker Pair Big
      keys = "cq";
    }
    if (arr.includes("4") && arr.includes("5") && arr.includes("3")) {
      // Banker - Player Pair Small
      keys = "ae";
    }
    if (arr.includes("4") && arr.includes("5") && arr.includes("9")) {
      // Banker - Player Pair Big
      keys = "ce";
    }
    if (arr.includes("4") && arr.includes("2") && arr.includes("3")) {
      // Banker - Banker & Player Pair Small
      keys = "aw";
    }
    if (arr.includes("4") && arr.includes("2") && arr.includes("9")) {
      // Banker - Banker & Player Pair Big
      keys = "cw";
    }

    // TIE WITH SMALL AND BIG
    if (arr.includes("7") && arr.includes("8") && arr.includes("3")) {
      // TIE - Banker Pair Small
      keys = "vi";
    }
    if (arr.includes("7") && arr.includes("8") && arr.includes("9")) {
      // TIE - Banker Pair Big
      keys = "yi";
    }
    if (arr.includes("7") && arr.includes("5") && arr.includes("3")) {
      // TIE - Player Pair Small
      keys = "vk";
    }
    if (arr.includes("7") && arr.includes("5") && arr.includes("9")) {
      // TIE - Player Pair
      keys = "yk";
    }
    if (arr.includes("7") && arr.includes("2") && arr.includes("3")) {
      // Tie - Banker & Player Pair Small
      keys = "vj";
    }
    if (arr.includes("7") && arr.includes("2") && arr.includes("9")) {
      // Tie - Banker & Player Pair Big
      keys = "yj";
    }

    if (arr.includes("6") && arr.includes("3")) {
      //Lucky 6 Small
      keys = "zh";
    }
    if (arr.includes("6") && arr.includes("9")) {
      //Lucky 6 Big
      keys = "zd";
    }
    // Lucky 6 with Small and Big Pair
    if (arr.includes("6") && arr.includes("8") && arr.includes("3")) {
      // Lucky 6 - Banker Pair Small
      keys = "za";
    }
    if (arr.includes("6") && arr.includes("8") && arr.includes("9")) {
      // Lucky 6 - Banker Pair Big
      keys = "ze";
    }
    if (arr.includes("6") && arr.includes("5") && arr.includes("3")) {
      // Lucky 6 - Player Pair Small
      keys = "zc";
    }
    if (arr.includes("6") && arr.includes("5") && arr.includes("9")) {
      // Lucky 6 - Player Pair Big
      keys = "zg";
    }
    if (arr.includes("6") && arr.includes("2") && arr.includes("3")) {
      // Lucky 6 - Banker & Player Pair Small
      keys = "zb";
    }
    if (arr.includes("6") && arr.includes("2") && arr.includes("9")) {
      // Lucky 6 - Banker & Player Pair Big
      keys = "zf";
    }

    return keys;
  }

  static reverseMappedResults(input) {
    const mappings = {
      p: "1",
      b: "4",
      t: "7",
      d: "1,3",
      x: "1,9",
      a: "4,3",
      c: "4,9",
      v: "7,3",
      y: "7,9",
      g: "1,2",
      w: "4,2",
      j: "7,2",
      h: "1,5",
      e: "4,5",
      k: "7,5",
      f: "1,8",
      q: "4,8",
      i: "7,8",
      z: "6",
      u: "6,2",
      r: "6,5",
      s: "6,8",
      df: "1,8,3",
      xf: "1,8,9",
      dh: "1,5,3",
      xh: "1,5,9",
      dg: "1,2,3",
      xg: "1,2,9",
      aq: "4,8,3",
      cq: "4,8,9",
      ae: "4,5,3",
      ce: "4,5,9",
      aw: "4,2,3",
      cw: "4,2,9",
      vi: "7,8,3",
      yi: "7,8,9",
      vk: "7,5,3",
      yk: "7,5,9",
      vj: "7,2,3",
      yj: "7,2,9",
      zh: "6,3",
      zd: "6,9",
      za: "6,8,3",
      ze: "6,8,9",
      zc: "6,5,3",
      zg: "6,5,9",
      zb: "6,2,3",
      zf: "6,2,9",
    };

    let arr = [];
    if (typeof input === "string") {
      arr = input.split(",");
    } else if (Array.isArray(input)) {
      arr = input;
    }

    const keys = arr
      .map((item) => mappings[item] || "")
      .join()
      .split(",");

    return keys.filter(Boolean);
  }
  static BeadRoadResult(value) {
    let beadRoadClass = "";
    switch (value) {
      case "b":
        beadRoadClass = "banker";
        break;
      case "p":
        beadRoadClass = "player";
        break;
      case "t":
        beadRoadClass = "tie";
        break;
      case "q":
        beadRoadClass = "banker";
        break;
      case "w":
        beadRoadClass = "banker";
        break;
      case "e":
        beadRoadClass = "banker";
        break;
      case "f":
        beadRoadClass = "player";
        break;
      case "g":
        beadRoadClass = "player";
        break;
      case "h":
        beadRoadClass = "player";
        break;
      case "i":
        beadRoadClass = "tie";
        break;
      case "j":
        beadRoadClass = "tie";
        break;
      case "k":
        beadRoadClass = "tie";
        break;

      case "z":
        beadRoadClass = "banker";
        break;

      case "r":
        beadRoadClass = "banker";
        break;

      case "s":
        beadRoadClass = "banker";
        break;

      case "u":
        beadRoadClass = "banker";
        break;
      case "a":
        beadRoadClass = "banker";
        break;

      case "c":
        beadRoadClass = "banker";
        break;

      case "aq":
        beadRoadClass = "banker";
        break;

      case "aw":
        beadRoadClass = "banker";
        break;

      case "ae":
        beadRoadClass = "banker";
        break;

      case "cq":
        beadRoadClass = "banker";
        break;

      case "cw":
        beadRoadClass = "banker";
        break;

      case "ce":
        beadRoadClass = "banker";
        break;

      case "d":
        beadRoadClass = "player";
        break;

      case "x":
        beadRoadClass = "player";
        break;

      case "df":
        beadRoadClass = "player";
        break;

      case "dg":
        beadRoadClass = "player";
        break;

      case "dh":
        beadRoadClass = "player";
        break;

      case "xf":
        beadRoadClass = "player";
        break;

      case "xg":
        beadRoadClass = "player";
        break;

      case "xh":
        beadRoadClass = "player";
        break;

      case "v":
        beadRoadClass = "tie";
        break;

      case "y":
        beadRoadClass = "tie";
        break;

      case "vi":
        beadRoadClass = "tie";
        break;

      case "vj":
        beadRoadClass = "tie";
        break;

      case "vk":
        beadRoadClass = "tie";
        break;

      case "yi":
        beadRoadClass = "tie";
        break;

      case "yj":
        beadRoadClass = "tie";
        break;

      case "yk":
        beadRoadClass = "tie";
        break;
      case "zh":
        beadRoadClass = "banker";
        break;

      case "za":
        beadRoadClass = "banker";
        break;

      case "zb":
        beadRoadClass = "banker";
        break;

      case "zc":
        beadRoadClass = "banker";
        break;

      case "zd":
        beadRoadClass = "banker";
        break;

      case "ze":
        beadRoadClass = "banker";
        break;

      case "zf":
        beadRoadClass = "banker";
        break;

      case "zg":
        beadRoadClass = "banker";
        break;
      default:
        break;
    }
    return (
      "flex flex-col justify-center items-center relative " + beadRoadClass
    );
  }
  static BeadRoadValue(value) {
    let returnValue = "";
    switch (value) {
      case "b":
        returnValue = "b";
        break;
      case "p":
        returnValue = "p";
        break;
      case "t":
        returnValue = "t";
        break;
      case "q":
        returnValue = "b";
        break;
      case "w":
        returnValue = "b";
        break;
      case "e":
        returnValue = "b";
        break;
      case "f":
        returnValue = "p";
        break;
      case "g":
        returnValue = "p";
        break;
      case "h":
        returnValue = "p";
        break;
      case "i":
        returnValue = "t";
        break;
      case "j":
        returnValue = "t";
        break;
      case "k":
        returnValue = "t";
        break;
      case "z":
        returnValue = "6";
        break;
      case "r":
        returnValue = "6";
        break;
      case "s":
        returnValue = "6";
        break;
      case "u":
        returnValue = "6";
        break;
      case "a":
        returnValue = "b";
        break;
      case "c":
        returnValue = "b";
        break;
      case "aq":
        returnValue = "b";
        break;
      case "aw":
        returnValue = "b";
        break;
      case "ae":
        returnValue = "b";
        break;
      case "cq":
        returnValue = "b";
        break;
      case "cw":
        returnValue = "b";
        break;
      case "ce":
        returnValue = "b";
        break;
      case "d":
        returnValue = "p";
        break;
      case "x":
        returnValue = "p";
        break;
      case "df":
        returnValue = "p";
        break;
      case "dg":
        returnValue = "p";
        break;
      case "dh":
        returnValue = "p";
        break;
      case "xf":
        returnValue = "p";
        break;
      case "xg":
        returnValue = "p";
        break;
      case "xh":
        returnValue = "p";
        break;
      case "v":
        returnValue = "t";
        break;
      case "y":
        returnValue = "t";
        break;
      case "vi":
        returnValue = "t";
        break;
      case "vj":
        returnValue = "t";
        break;
      case "vk":
        returnValue = "t";
        break;
      case "yi":
        returnValue = "t";
        break;
      case "yj":
        returnValue = "t";
        break;
      case "yk":
        returnValue = "t";
        break;

      case "zh":
        returnValue = "6";
        break;

      case "za":
        returnValue = "6";
        break;

      case "zb":
        returnValue = "6";
        break;

      case "zc":
        returnValue = "6";
        break;

      case "zd":
        returnValue = "6";
        break;

      case "ze":
        returnValue = "6";
        break;

      case "zf":
        returnValue = "6";
        break;

      case "zg":
        returnValue = "6";
        break;
      default:
        break;
    }
    return returnValue;
  }
  static BeadRoadBankerPair(value) {
    const allowedValues = [
      "q",
      "w",
      "f",
      "g",
      "i",
      "j",
      "r",
      "u",
      "aq",
      "aw",
      "cq",
      "cw",
      "df",
      "dg",
      "xf",
      "xg",
      "vi",
      "vj",
      "yi",
      "yj",
      "za",
      "zb",
      "ze",
      "zf",
    ];

    return allowedValues.includes(value);
  }
  static BeadRoadPlayerPair(value) {
    const allowedValues = [
      "e",
      "h",
      "g",
      "w",
      "j",
      "k",
      "s",
      "u",
      "ae",
      "aw",
      "ce",
      "cw",
      "dh",
      "dg",
      "xh",
      "xg",
      "yk",
      "vj",
      "yj",
      "vk",
      "zb",
      "zc",
      "zf",
      "zg",
    ];

    return allowedValues.includes(value);
  }

  // FOR BASEINPUTDIALOG
  static ModalContentClass(value) {
    switch (value) {
      case "b":
        return "golden-border-modal-red";
      case "p":
        return "golden-border-modal-blue";
      case "t":
        return "golden-border-modal-green";
      case "q":
        return "golden-border-modal-red";
      case "w":
        return "golden-border-modal-red";
      case "e":
        return "golden-border-modal-red";
      case "f":
        return "golden-border-modal-blue";
      case "g":
        return "golden-border-modal-blue";
      case "h":
        return "golden-border-modal-blue";
      case "i":
        return "golden-border-modal-green";
      case "j":
        return "golden-border-modal-green";
      case "k":
        return "golden-border-modal-green";
      case "a":
        return "golden-border-modal-red";
      case "c":
        return "golden-border-modal-red";
      case "aq":
        return "golden-border-modal-red";
      case "aw":
        return "golden-border-modal-red";
      case "ae":
        return "golden-border-modal-red";
      case "cq":
        return "golden-border-modal-red";
      case "cw":
        return "golden-border-modal-red";
      case "ce":
        return "golden-border-modal-red";

      case "d":
        return "golden-border-modal-blue";
      case "x":
        return "golden-border-modal-blue";
      case "df":
        return "golden-border-modal-blue";
      case "dg":
        return "golden-border-modal-blue";
      case "dh":
        return "golden-border-modal-blue";
      case "xf":
        return "golden-border-modal-blue";
      case "xg":
        return "golden-border-modal-blue";
      case "xh":
        return "golden-border-modal-blue";

      case "v":
        return "golden-border-modal-green";
      case "y":
        return "golden-border-modal-green";

      case "vi":
        return "golden-border-modal-green";
      case "vj":
        return "golden-border-modal-green";
      case "vk":
        return "golden-border-modal-green";
      case "yi":
        return "golden-border-modal-green";
      case "yj":
        return "golden-border-modal-green";
      case "yk":
        return "golden-border-modal-green";
      case "zh":
        return "golden-border-modal-red";

      case "za":
        return "golden-border-modal-red";

      case "zb":
        return "golden-border-modal-red";

      case "zc":
        return "golden-border-modal-red";

      case "zd":
        return "golden-border-modal-red";

      case "ze":
        return "golden-border-modal-red";

      case "zf":
        return "golden-border-modal-red";

      case "zg":
        return "golden-border-modal-red";

      default:
        break;
    }
  }
  static ModalPlayerClass(value) {
    switch (value) {
      case "b":
        return "banker-win";
      case "p":
        return "player-win";
      case "t":
        return "tie-win";
      case "q":
        return "banker-win";
      case "w":
        return "banker-win";
      case "e":
        return "banker-win";
      case "f":
        return "player-win";
      case "g":
        return "player-win";
      case "h":
        return "player-win";
      case "i":
        return "tie-win";
      case "j":
        return "tie-win";
      case "k":
        return "tie-win";
      case "z":
        return "banker-win";
      case "r":
        return "banker-win";
      case "s":
        return "banker-win";
      case "u":
        return "banker-win";
      case "a":
        return "banker-win";
      case "c":
        return "banker-win";
      case "d":
        return "player-win";
      case "x":
        return "player-win";
      case "v":
        return "tie-win";
      case "y":
        return "tie-win";

      case "aq":
        return "banker-win";
      case "aw":
        return "banker-win";
      case "ae":
        return "banker-win";
      case "cq":
        return "banker-win";
      case "cw":
        return "banker-win";
      case "ce":
        return "banker-win";

      case "df":
        return "player-win";
      case "dg":
        return "player-win";
      case "dh":
        return "player-win";
      case "xf":
        return "player-win";
      case "xg":
        return "player-win";
      case "xh":
        return "player-win";

      case "vi":
        return "tie-win";
      case "vj":
        return "tie-win";
      case "vk":
        return "tie-win";
      case "yi":
        return "tie-win";
      case "yj":
        return "tie-win";
      case "yk":
        return "tie-win";
      case "zh":
        return "banker-win";

      case "za":
        return "banker-win";

      case "zb":
        return "banker-win";

      case "zc":
        return "banker-win";

      case "zd":
        return "banker-win";

      case "ze":
        return "banker-win";

      case "zf":
        return "banker-win";

      case "zg":
        return "banker-win";

      default:
        break;
    }
  }
  static ModelContentValue(value) {
    let returnValue = "";
    switch (value) {
      case "b":
        returnValue = "庄";
        break;
      case "p":
        returnValue = "闲";
        break;
      case "t":
        returnValue = "和";
        break;
      case "q":
        returnValue = "庄";
        break;
      case "w":
        returnValue = "庄";
        break;
      case "e":
        returnValue = "庄";
        break;
      case "f":
        returnValue = "闲";
        break;
      case "g":
        returnValue = "闲";
        break;
      case "h":
        returnValue = "闲";
        break;
      case "i":
        returnValue = "和";
        break;
      case "j":
        returnValue = "和";
        break;
      case "k":
        returnValue = "和";
        break;
      case "z":
        returnValue = "6";
        break;
      case "r":
        returnValue = "6";
        break;
      case "s":
        returnValue = "6";
        break;
      case "u":
        returnValue = "6";
        break;
      case "a":
        returnValue = "庄";
        break;
      case "c":
        returnValue = "庄";
        break;
      case "d":
        returnValue = "闲";
        break;
      case "x":
        returnValue = "闲";
        break;
      case "v":
        returnValue = "和";
        break;
      case "y":
        returnValue = "和";
        break;

      case "aq":
        returnValue = "庄";
        break;

      case "aw":
        returnValue = "庄";
        break;

      case "ae":
        returnValue = "庄";
        break;

      case "cq":
        returnValue = "庄";
        break;

      case "cw":
        returnValue = "庄";
        break;

      case "ce":
        returnValue = "庄";
        break;

      case "df":
        returnValue = "闲";
        break;

      case "dg":
        returnValue = "闲";
        break;

      case "dh":
        returnValue = "闲";
        break;

      case "xf":
        returnValue = "闲";
        break;

      case "xg":
        returnValue = "闲";
        break;

      case "xh":
        returnValue = "闲";
        break;

      case "vi":
        returnValue = "和";
        break;

      case "vj":
        returnValue = "和";
        break;

      case "vk":
        returnValue = "和";
        break;

      case "yi":
        returnValue = "和";
        break;

      case "yj":
        returnValue = "和";
        break;

      case "yk":
        returnValue = "和";
        break;
      case "zh":
        returnValue = "6";
        break;
      case "za":
        returnValue = "6";
        break;
      case "zb":
        returnValue = "6";
        break;
      case "zc":
        returnValue = "6";
        break;
      case "zd":
        returnValue = "6";
        break;
      case "ze":
        returnValue = "6";
        break;
      case "zf":
        returnValue = "6";
        break;
      case "zg":
        returnValue = "6";
        break;
      default:
        break;
    }
    return returnValue;
  }
  static Big(value) {
    const allowedValues = [
      "c",
      "x",
      "y",
      "cq",
      "cw",
      "ce",
      "xf",
      "xg",
      "xh",
      "yi",
      "yj",
      "yk",
      "zd",
      "ze",
      "zf",
      "zg",
    ];

    return allowedValues.includes(value);
  }
  static Small(value) {
    const allowedValues = [
      "c",
      "x",
      "y",
      "cq",
      "cw",
      "ce",
      "xf",
      "xg",
      "xh",
      "yi",
      "yj",
      "yk",
      "zd",
      "ze",
      "zf",
      "zg",
      "a",
      "d",
      "v",
      "aq",
      "aw",
      "ae",
      "df",
      "dg",
      "dh",
      "vi",
      "vj",
      "vk",
      "zh",
      "za",
      "zb",
      "zc",
    ];

    return allowedValues.includes(value);
  }

  // FOR CUSTOMPLATE
  static CustomPlateClass(value) {
    let customPlateClass = "";
    switch (value) {
      case "b":
        customPlateClass = "banker_custom_big_eye";
        break;
      case "p":
        customPlateClass = "player_custom_big_eye";
        break;
      case "t":
        customPlateClass =
          "bg-green-500 rounded-full border-4 border-green-700 w-8 h-8";
        break;
      case "q":
        customPlateClass = "banker_custom_big_eye";
        break;
      case "w":
        customPlateClass = "banker_custom_big_eye";
        break;
      case "e":
        customPlateClass = "banker_custom_big_eye";
        break;
      case "f":
        customPlateClass = "player_custom_big_eye";
        break;
      case "g":
        customPlateClass = "player_custom_big_eye";
        break;
      case "h":
        customPlateClass = "player_custom_big_eye";
        break;
      case "z":
        customPlateClass = "banker_custom_big_eye";
        break;
      case "r":
        customPlateClass = "banker_custom_big_eye";
        break;
      case "s":
        customPlateClass = "banker_custom_big_eye";
        break;
      case "u":
        customPlateClass = "banker_custom_big_eye";
        break;
      case "a":
        customPlateClass = "banker_custom_big_eye";
        break;
      case "aq":
        customPlateClass = "banker_custom_big_eye";
        break;
      case "aw":
        customPlateClass = "banker_custom_big_eye";
        break;
      case "ae":
        customPlateClass = "banker_custom_big_eye";
        break;
      case "c":
        customPlateClass = "banker_custom_big_eye";
        break;
      case "cq":
        customPlateClass = "banker_custom_big_eye";
        break;
      case "cw":
        customPlateClass = "banker_custom_big_eye";
        break;
      case "ce":
        customPlateClass = "banker_custom_big_eye";
        break;
      case "d":
        customPlateClass = "player_custom_big_eye";
        break;
      case "df":
        customPlateClass = "player_custom_big_eye";
        break;
      case "dg":
        customPlateClass = "player_custom_big_eye";
        break;
      case "dh":
        customPlateClass = "player_custom_big_eye";
        break;
      case "x":
        customPlateClass = "player_custom_big_eye";
        break;
      case "xf":
        customPlateClass = "player_custom_big_eye";
        break;
      case "xg":
        customPlateClass = "player_custom_big_eye";
        break;
      case "xh":
        customPlateClass = "player_custom_big_eye";
        break;
      case "v":
        customPlateClass =
          "bg-green-500 rounded-full border-4 border-green-700 w-8 h-8";
        break;
      case "vi":
        customPlateClass =
          "bg-green-500 rounded-full border-4 border-green-700 w-8 h-8";
        break;
      case "vj":
        customPlateClass =
          "bg-green-500 rounded-full border-4 border-green-700 w-8 h-8";
        break;
      case "vk":
        customPlateClass =
          "bg-green-500 rounded-full border-4 border-green-700 w-8 h-8";
        break;
      case "y":
        customPlateClass =
          "bg-green-500 rounded-full border-4 border-green-700 w-8 h-8";
        break;
      case "yi":
        customPlateClass =
          "bg-green-500 rounded-full border-4 border-green-700 w-8 h-8";
        break;
      case "yj":
        customPlateClass =
          "bg-green-500 rounded-full border-4 border-green-700 w-8 h-8";
        break;
      case "yk":
        customPlateClass =
          "bg-green-500 rounded-full border-4 border-green-700 w-8 h-8";
        break;
      case "zh":
        customPlateClass = "banker_custom_big_eye";
        break;
      case "za":
        customPlateClass = "banker_custom_big_eye";
        break;
      case "zb":
        customPlateClass = "banker_custom_big_eye";
        break;
      case "zc":
        customPlateClass = "banker_custom_big_eye";
        break;
      case "zd":
        customPlateClass = "banker_custom_big_eye";
        break;
      case "ze":
        customPlateClass = "banker_custom_big_eye";
        break;
      case "zf":
        customPlateClass = "banker_custom_big_eye";
        break;
      case "zg":
        customPlateClass = "banker_custom_big_eye";
        break;
      default:
        break;
    }
    return (
      "flex flex-col justify-center items-center relative " + customPlateClass
    );
  }

  // FOR BIGROAD
  static BigRoadResult(value) {
    let bigRoadClass = "";
    switch (value) {
      case "b":
        bigRoadClass = "banker_big_road";
        break;
      case "p":
        bigRoadClass = "player_big_road";
        break;
      case "t":
        bigRoadClass = "border-green-500 bg-transparent  border-4";
        break;
      case "q":
        bigRoadClass = "banker_big_road";
        break;
      case "w":
        bigRoadClass = "banker_big_road";
        break;
      case "e":
        bigRoadClass = "banker_big_road";
        break;
      case "f":
        bigRoadClass = "player_big_road";
        break;
      case "g":
        bigRoadClass = "player_big_road";
        break;
      case "h":
        bigRoadClass = "player_big_road";
        break;
      case "i":
        bigRoadClass = "border-green-500 bg-transparent  border-4";
        break;
      case "j":
        bigRoadClass = "border-green-500 bg-transparent  border-4";
        break;
      case "k":
        bigRoadClass = "border-green-500 bg-transparent  border-4";
        break;
      case "z":
        bigRoadClass = "banker_big_road";
        break;
      case "r":
        bigRoadClass = "banker_big_road";
        break;
      case "s":
        bigRoadClass = "banker_big_road";
        break;
      case "u":
        bigRoadClass = "banker_big_road";
        break;
      case "a":
        bigRoadClass = "banker_big_road";
        break;
      case "aq":
        bigRoadClass = "banker_big_road";
        break;
      case "aw":
        bigRoadClass = "banker_big_road";
        break;
      case "ae":
        bigRoadClass = "banker_big_road";
        break;
      case "c":
        bigRoadClass = "banker_big_road";
        break;
      case "cq":
        bigRoadClass = "banker_big_road";
        break;
      case "cw":
        bigRoadClass = "banker_big_road";
        break;
      case "ce":
        bigRoadClass = "banker_big_road";
        break;
      case "d":
        bigRoadClass = "player_big_road";
        break;
      case "df":
        bigRoadClass = "player_big_road";
        break;
      case "dg":
        bigRoadClass = "player_big_road";
        break;
      case "dh":
        bigRoadClass = "player_big_road";
        break;
      case "x":
        bigRoadClass = "player_big_road";
        break;
      case "xf":
        bigRoadClass = "player_big_road";
        break;
      case "xg":
        bigRoadClass = "player_big_road";
        break;
      case "xh":
        bigRoadClass = "player_big_road";
        break;
      case "v":
        bigRoadClass = "border-green-500 bg-transparent  border-4";
        break;
      case "vi":
        bigRoadClass = "border-green-500 bg-transparent  border-4";
        break;
      case "vj":
        bigRoadClass = "border-green-500 bg-transparent  border-4";
        break;
      case "vk":
        bigRoadClass = "border-green-500 bg-transparent  border-4";
        break;
      case "y":
        bigRoadClass = "border-green-500 bg-transparent  border-4";
        break;
      case "yi":
        bigRoadClass = "border-green-500 bg-transparent  border-4";
        break;
      case "yj":
        bigRoadClass = "border-green-500 bg-transparent  border-4";
        break;
      case "yk":
        bigRoadClass = "border-green-500 bg-transparent  border-4";
        break;
      case "zh":
        bigRoadClass = "banker_big_road";
        break;
      case "za":
        bigRoadClass = "banker_big_road";
        break;
      case "zb":
        bigRoadClass = "banker_big_road";
        break;
      case "zc":
        bigRoadClass = "banker_big_road";
        break;
      case "zd":
        bigRoadClass = "banker_big_road";
        break;
      case "ze":
        bigRoadClass = "banker_big_road";
        break;
      case "zf":
        bigRoadClass = "banker_big_road";
        break;
      case "zg":
        bigRoadClass = "banker_big_road";
        break;
      default:
        break;
    }
    return "flex flex-col justify-center items-center relative " + bigRoadClass;
  }
}
