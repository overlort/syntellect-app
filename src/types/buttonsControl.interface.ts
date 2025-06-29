export interface ButtonControl {
  text: string;
  cb: Function;
  position: Position;
}

export enum Position {
  'L' = 'L',
  'R' = 'R',
}