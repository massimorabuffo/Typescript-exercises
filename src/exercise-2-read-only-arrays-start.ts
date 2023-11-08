/**
 * START: Follow the instructions below.
 */

// Prevent the array from being modified.
// Use the generic interface type `ReadonlyArray`: ReadonlyArray<type>
// This will cause a type error. Remove the code that now has a type error.

const languages: ReadonlyArray<string> = ["Mongolian", "French", "Basque", "Thai"];


console.log(languages);

// Prevent the array from being modified.
// Use the readonly modifier and the array literal type syntax: readonly type[]
// This will cause a type error. Remove the code that now has a type error.

const currencies: readonly string[] = ["NZD", "THB", "NGN", "EUR", "COP", "INR"];



console.log(currencies);

// ----

export {};
