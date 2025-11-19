/**
 * Undernode - A simple Node.js project
 */

function greet(name = 'World') {
  return `Hello, ${name}!`;
}

function add(a, b) {
  return a + b;
}

function main() {
  console.log(greet());
  console.log(greet('Undernode'));
  console.log('2 + 3 =', add(2, 3));
}

// Run main if this file is executed directly
if (require.main === module) {
  main();
}

module.exports = { greet, add };
