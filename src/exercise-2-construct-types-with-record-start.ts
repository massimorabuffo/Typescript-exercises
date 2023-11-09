/**
 * START: Follow the instructions below.
 */

// Fix this use of the `Record` utility type so it constructs a valid type.

const currency: Record<string, string> = {
    name: "United States dollar",
    code: "USD",
    symbol: "$",
};

// Add a type annotation to the `currencies` variable that uses
// the `Record` utility type.
// Hint: Pass the `Currency` type as the second type argument to `Record<>`.

interface Currency {
    name: string;
    code: string;
    symbol: string;
}

const currencies: Record<string, Currency> = {
    france: {
        name: "Euro",
        code: "EUR",
        symbol: "€",
    },
    china: {
        name: "Renminbi",
        code: "CNY",
        symbol: "¥",
    },
    colombia: {
        name: "Colombian peso",
        code: "COP",
        symbol: "$",
    }
};

// ----

export {};
