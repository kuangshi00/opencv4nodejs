import { Mat } from './Mat.d';
import { Rect } from './Rect.d';
import { TrackerCSRTParams } from './TrackerCSRTParams.d';
export * as cv from './cv';

declare module "./cv.js" {
  export class TrackerCSRT {
    constructor();
    constructor(params: TrackerCSRTParams);
    clear(): void;
    init(frame: Mat, boundingBox: Rect): boolean;
    update(frame: Mat): Rect;
  }
}