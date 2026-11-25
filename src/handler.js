function isEmpty(input) {
  if (input === undefined || input === null) return true;
  if (typeof input === 'string') return input.trim() === '';
  if (Array.isArray(input)) return input.length === 0;
  if (typeof input === 'object') return Object.keys(input).length === 0;
  return false;
}

function handle(input) {
  if (isEmpty(input)) return { status: 400 };
  return { status: 200 };
}

module.exports = { handle };
