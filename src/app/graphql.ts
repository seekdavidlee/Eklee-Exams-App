export type Maybe<T> = T | null;

export interface GuidfilterInput {
  /** Equal. */
  equal?: Maybe<string>;
}

export interface StringfilterInput {
  /** String contains. */
  contains?: Maybe<string>;
  /** String ends with. */
  endsWith?: Maybe<string>;
  /** String equal. */
  equal?: Maybe<string>;
  /** String starts with. */
  startsWith?: Maybe<string>;
}

export interface DatefilterInput {
  /** Equal. */
  equal?: Maybe<Date>;
  /** Greater equal than. */
  greaterEqualThan?: Maybe<Date>;
  /** Greater than. */
  greaterThan?: Maybe<Date>;
  /** Less equal than. */
  lessEqualThan?: Maybe<Date>;
  /** Less than. */
  lessThan?: Maybe<Date>;
  /** Not equal. */
  notEqual?: Maybe<Date>;
}

export interface SearchfilterInput {
  /** String equal. */
  equal?: Maybe<string>;
}

export interface CandidateInput {
  /** Determines whether the candidate is active. */
  active: boolean;
  /** Date/time of when the candidate account was created. */
  created: Date;
  /** Id of the candidate */
  id?: Maybe<string>;
  /** The display name of the candidate. */
  name: string;
  /** Type of candidate. Either student, full time employed, part time employed. */
  type: string;
}

export interface CandidatesearchInput {
  /** Id of the candidate */
  id?: Maybe<string>;
  /** The display name of the candidate. */
  name: string;
}

export interface ExamInput {
  /** Id of the candidate. */
  candidateId?: Maybe<string>;
  /** Category of the exam */
  category: string;
  /** Id of the exam template used. */
  examTemplateId?: Maybe<string>;
  /** Id of the exam. */
  id?: Maybe<string>;
  /** Name of the exam */
  name: string;
  /** Date/time of when the exm was taken. */
  taken: Date;
}

export interface ExamtemplateInput {
  /** Category of the exam */
  category: string;
  /** Date in which exam was created. */
  created: Date;
  /** Date in which exam is released for use. */
  effective: Date;
  /** Date in which exam is retired for use. */
  expires: Date;
  /** Id of the exam template. */
  id?: Maybe<string>;
  /** Name of the exam */
  name: string;
}

export interface ExamtemplatesearchInput {
  /** Category of the exam */
  category: string;
  /** Id of the exam template. */
  id?: Maybe<string>;
  /** Name of the exam */
  name: string;
}

export interface ItemwithguididInput {
  /** Id of the item instance. */
  id?: Maybe<string>;
}

/** The `Date` scalar type represents a year, month and day in accordance with the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
export type Date = any;

/** The `DateTime` scalar type represents a date and time. `DateTime` expects timestamps to be formatted in accordance with the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
export type DateTime = any;

/** The `DateTimeOffset` scalar type represents a date, time and offset from UTC. `DateTimeOffset` expects timestamps to be formatted in accordance with the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
export type DateTimeOffset = any;

export type Decimal = any;

/** The `Milliseconds` scalar type represents a period of time represented as the total number of milliseconds. */
export type Milliseconds = any;

/** The `Seconds` scalar type represents a period of time represented as the total number of seconds. */
export type Seconds = any;
