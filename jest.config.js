

module.exports = {
  collectCoverageFrom: [
    "src/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/dist/**",
    "!src/playground/**"
  ]
}