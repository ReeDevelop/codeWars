/* Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455. */

function sumTwoSmallestNumbers(numbers) {  
    // grab smallest int
    const smallInt1 = Math.min(...numbers);
    // remove smallest int
    const removeInt1 = numbers.splice(numbers.indexOf(smallInt1), 1);
    // find second smallest int 
    const smallInt2 = Math.min(...numbers);
    // add two smallest ints
    return smallInt1 + smallInt2
}

function sumTwoSmallestNumbers(numbers){  
    numbers = numbers.sort(function(a, b){return a - b; });
    return numbers[0] + numbers[1];
};