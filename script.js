//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('output');

    // Function to create a delayed promise
    const delayedPromise = (value, delay) => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(value), delay);
        });
    };

    // Initial promise that resolves after 3 seconds with the array [1, 2, 3, 4]
    delayedPromise([1, 2, 3, 4], 3000)
        .then((arr) => {
            // Filter out odd numbers after 1 second
            return delayedPromise(arr.filter(num => num % 2 === 0), 1000);
        })
        .then((filteredArr) => {
            // Display filtered even numbers
            output.innerHTML = filteredArr.join(',');
            return delayedPromise(filteredArr.map(num => num * 2), 2000);
        })
        .then((transformedArr) => {
            // Display final transformed array
            output.innerHTML = transformedArr.join(',');
        });
});
