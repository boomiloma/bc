import RoadmapUtilities from "./RoadmapUtilities";

import _findLastIndex from "lodash/findLastIndex";
import _defaultsDeep from "lodash/defaultsDeep";
import _get from "lodash/get";

export default class BigRoad extends RoadmapUtilities {
  constructor(_options) {
    super();

    /**
     * Define options
     */
    const options = _defaultsDeep(_options, {
      results: [],
      rows: 6,
      cols: 30,
    });

    for (const key in options) {
      this[key] = options[key];
    }

    /**
     * Define initial values
     */
    this.previousCoordinates = [0, 0];
    this.previousIdentity = null;
    this.index = 0;
    this.isCol = false;

    this.matrix = Array.from({ length: this.rows }, () => {
      return Array.from({ length: this.cols }, () => 0);
    });

    /**
     * Push results
     */
    this.results.forEach(this.push.bind(this));
  }

  getNextCoordinate(identity) {
    const [prevRow, prevColumn] = this.previousCoordinates;

    /**
     * If initial data
     */
    if (this.previousIdentity === null) {
      return [0, 0];
    }

    /**
     * If same identity
     */
    if (this.previousIdentity === identity) {
      const bottomPosition = _get(this.matrix, [prevRow + 1, prevColumn]);
      // let findIndxe = _findIndex(this.prevRow)
      // if (this.isCol && bottomPosition == 0 && prevRow != 0) {
      //   return [prevRow, prevColumn + 1];
      // }
      /**
       * Bottom position is empty
       */
      if (bottomPosition === 0) {
        // this.isCol = false;
        return [prevRow + 1, prevColumn];
      }
      /**
       * Else, just increment column to the right
       */
      // this.isCol = true;
      return [prevRow, prevColumn + 1];
    }
    // this.isCol = false;
    /**
     * Fallback. If not the same identity
     */
    const lastColIdx = _findLastIndex(this.matrix[0], Boolean);
    const initialPosition = _get(this.matrix, [0, lastColIdx]);

    if (initialPosition === 0) {
      return [0, lastColIdx];
    }
    /**
     * Else, just increment column to the right
     */
    return [0, lastColIdx + 1];
  }

  push(key) {
    // key = p, or b,
    const identity = this.identityDictionary[key];
    if (!identity) {
      return console.warn(`${key} is not a valid key.`);
    }

    const isTie = this.tieIdentities.includes(key);

    const [nextRow, nextCol] = this.getNextCoordinate(identity);

    const [prevRow, prevCol] = JSON.parse(
      JSON.stringify(this.previousCoordinates)
    );

    const prevColValue = _get(this.matrix[prevRow][prevCol], "value");
    const isPrevNonTie = !this.tieIdentities.includes(prevColValue); // Check if previous value is non-tie

    /**
     * If previous col is tie and the current identity
     * is also tie
     */
    if (isTie) {
      return this.matrix[prevRow][prevCol].tie_count++;
    }

    this.previousCoordinates = [nextRow, nextCol];
    this.previousIdentity = identity;
    console.log("isTie===", isTie);
    if (!isTie) {
      this.matrix[nextRow][nextCol] = {
        value: key,
        index: this.index++,
        tie_count: 0,
      };
    } else {
      // console.log("this.matrix[prevRow][prevCol]===", this.matrix[prevRow][prevCol], prevRow, prevCol)
      // console.log("isAnotherTie", isAnotherTie);
      // this.matrix[prevRow][prevCol].tie_count +=1;
    }
    this.matrix = this.equalizeArrays();
    console.log("matricx=======================================", this.matrix);

    if (!this.hasFullRow) {
      // this.matrix = this.truncateFirstColumn();
      // this.previousCoordinates = [nextRow, nextCol - 1];
    }
  }
}
