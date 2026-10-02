/**
 * MoveGap Optimizer
 * -----------------
 * Calculates the minimum number of fixed-capacity operations
 * required to bridge the gap between two numerical values.
 */

/**
 * Returns the minimum number of operations needed.
 *
 * @param {number} currentValue - Starting value.
 * @param {number} targetValue - Desired value.
 * @param {number} capacityPerOperation - Maximum change allowed per operation.
 * @returns {number}
 */
function calculateMinimumOperations(
    currentValue,
    targetValue,
    capacityPerOperation = 10
) {
    const gap = Math.abs(targetValue - currentValue);

    return Math.ceil(gap / capacityPerOperation);
}

// Example usage
const currentValue = 13;
const targetValue = 42;

const requiredOperations = calculateMinimumOperations(
    currentValue,
    targetValue
);

console.log(`Current Value : ${currentValue}`);
console.log(`Target Value  : ${targetValue}`);
console.log(`Operations Needed: ${requiredOperations}`);
