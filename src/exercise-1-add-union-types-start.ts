/**
 * START: Follow the instructions below.
 */

// The `Currency` type doesn't work for the type of value in the
// `narniaCurrency` variable. Change the `Currency` type into a
// union type that works for both the variables.
//
// This should fix the type error on Line 15.

type Currency = string | boolean;

let indianCurrency: Currency = "Indian rupee";

let narniaCurrency: Currency = false;

// Change the type for the `data` function parameter so it can accept
// the different types of data that are passed when it's being called.
//
// This should fix the type error on Lines 28 and 30.

function outputCountryData(country: string, data: number | string) {
    console.log(`The data for ${country} is: ${data}`);
}

outputCountryData("Italy", 60_317_116);

outputCountryData("Nigeria", "Naira");

outputCountryData("United States of America", "English");

outputCountryData("India", 1_352_642_280);

// ----

export {};
