let nums = [1, 2, 3, 2, 4, 5, 5];

//solution 1 for find duplicates count
function findDuplicates(arr) {
    const counts = {}; // To store the count of each element
    let maxCount = 0; // To track the maximum count
    let maxElements = []; // To store elements with the maximum count
  
    // Count occurrences
    for (let num of arr) {
      counts[num] = (counts[num] || 0) + 1; // Increment the count
    }
  
    // Find the maximum count and corresponding elements
    for (let key in counts) {
      if (counts[key] > maxCount) {
        maxCount = counts[key];
        maxElements = [Number(key)]; // Reset to the current max element
      } else if (counts[key] === maxCount) {
        maxElements.push(Number(key)); // Add to the list of max elements
      }
    }
  
    return {
      duplicatesCount: counts, // Object with all counts
      maxDuplicates: maxElements, // Elements with maximum duplicates
      maxCount: maxCount, // Maximum duplicate count
    };
  }
  
  // Example Usage
  const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
  const result = findDuplicates(arr);
  console.log("Duplicates Count:", result.duplicatesCount);
  console.log("Maximum Duplicates Array:", result.maxDuplicates);
  console.log("Maximum Duplicate Count:", result.maxCount);