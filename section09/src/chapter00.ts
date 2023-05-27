/**
 * Conditional Types
 */

type A = number extends string ? string : number;

type ObjA = {
	a: number;
};

type ObjB = {
	a: number;
	b: number;
};

type B = ObjB extends ObjA ? number : string;

/**
 * Generic and Conditional Types
 */

type StringNumberSwitch<T> = T extends number ? string : number;