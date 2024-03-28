// Assuming 'totalItems' is the total number of items available
const startIndex = (page - 1) * perPage;
const endIndex = Math.min(startIndex + perPage, totalItems);

for (let i = startIndex; i < endIndex; ++i) {
  // code here
}
