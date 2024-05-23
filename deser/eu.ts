// Define a tuple type that represents the mixed data structure
type MixedData = [string, boolean, number];

// Initialize the mixed data array with the specified types
const mixedData: MixedData = ["bye", true, 77];

// Function to process the mixed data
function processMixedData(data: MixedData): void {
  // Destructure the tuple into its individual elements
  const [message, flag, number] = data;

  // Process the string element
  console.log(`String part of the tuple is: ${message}`);

  // Process the boolean element
  console.log(`Boolean part of the tuple is: ${flag ? 'true' : 'false'}`);

  // Process the number element
  console.log(`Number part of the tuple is: ${number}`);
}

// Call the function with the mixed data array
processMixedData(mixedData);
