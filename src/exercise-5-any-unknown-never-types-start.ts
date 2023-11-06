/**
 * START: Follow the instructions below.
 */

// Add the `any` type to fix the type errors in the following code.

let currency:any = { name: "Indian rupee" };

currency.code = "THB";

currency = "Baht";

// Fix the if statement in this function so the type of `value` is narrowed to `string`.

function countryNameLength(value: unknown) {
    if (typeof value === "string") {
        console.log(value.length);
    }
}

countryNameLength("United States of America");

// Fix the type error we see when calling this function.
// Hint: Replace one of the `never` types with a different type.

function throwCountryError(message: string): never {
    throw new Error(`Could not find country: ${message}`);
}

throwCountryError("Narnia");

// ----

export {};
