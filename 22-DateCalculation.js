const birthDate = new Date('1993-03-02');
const today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();

// Adjust for a past birthday
if (
  today.getMonth() < birthDate.getMonth() ||
  (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
) {
  age--;
}

console.log(`Age: ${age}`); // Output: 34 (if today's date is 2024-11-22)