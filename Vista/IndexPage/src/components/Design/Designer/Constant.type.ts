export type Shape = {
    id: string;
    color: string;
    x?: number;
    y?: number;
  };
  
export type Rectangle = Shape & {
    width: number;
    height: number;
    x: number;
    y: number;
  };
  
export type Scribble = Shape & {
    points: number[];
  };
  
export type Lines = Shape & {
    points: [number, number, number, number];
  };