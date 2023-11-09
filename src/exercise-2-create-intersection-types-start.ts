/**
 * START: Follow the instructions below.
 */

interface Country {
    name: string;
    code: string;
}

interface CountryStatistics {
    population: number;
}

interface CountryLanguages {
    languages: string[];
}

// Change the `CountryWithLanguages` type into an intersection type
// that uses the interfaces defined above.
//
// This should fix the type error on Line 28.

type CountryWithLanguages = Country & CountryLanguages;

const countryA: CountryWithLanguages = {
    name: "Greece",
    code: "GR",
    languages: ["Greek"]
};

// Create an intersection type named `CountryWithStatistics` that
// describes the shape of the object below. Use the interfaces
// defined above.
//
// Use the type alias syntax: type CountryWithStatistics = type;
//
// Add a type annotation with the `CountryWithStatistics` type on
// the variable `countryB`.

type CountryWithStatistics = Country & CountryStatistics;

const countryB: CountryWithStatistics = {
    name: "China",
    code: "CN",
    population: 1_412_600_000
};

// ----

export {};
