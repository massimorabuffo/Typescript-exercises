/**
 * START: Follow the instructions below.
 */

class Currency {
    // Add types for these fields and make them private.
    // Hint: Look at the type of values being passed when `new Currency()`
    // is called below.

    #name: string;
    #code: string;
    #symbol: string;

    // Add types to the constructor parameters.

    constructor(name: string, code: string, symbol: string) {
        this.#name = name;
        this.#code = code;
        this.#symbol = symbol;

        // Store the `code` and `symbol` parameter values in
        // their corresponding class fields.


    }

    // Methods are public by default.
    // Add a visibility modifier to make it clear this method is public.
    //
    // Add a return type for this method
    // Hint: Look at the inferred return type.

    describe(): string {
        // Replace the `null` values below with the appropriate field values.
        // Hint: Access field values with: this.fieldName

        let description = `The ${this.#name} currency `;
        description += `has the code ${this.#code} `;
        description += `and uses the symbol ${this.#symbol}.`;
        console.log(description);
        return description;
    }
}

// ----

const currencyNaira = new Currency("Naira", "NGN", "₦");

console.log(currencyNaira);

// Call the `describe()` method on the `currencyNaira` object.

currencyNaira.describe();

// ----

const currencyUsDollar = new Currency("United States dollar", "USD", "$");

console.log(currencyUsDollar);

// Call the `describe()` method on the `currencyUsDollar` object.

currencyUsDollar.describe();

// ----

export {};
