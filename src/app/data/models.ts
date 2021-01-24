export interface WordType {
  word: string;
  type: Type;
  correct?: boolean;
}

export enum Type {
  NOUN = 0,
  VERB = 1,
}
