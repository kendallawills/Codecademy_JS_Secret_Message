let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 
'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015', 'Chris', 'Pine,', 
'Learn', 'JavaScript'];

// Remove last string

secretMessage.pop();

// Check length

console.log(secretMessage.length);

// Add strings to end of array

secretMessage.push('to', 'Program');

// Replace word

// console.log(secretMessage.indexOf('easily'));

secretMessage[7] = 'right';

// Remove first string

secretMessage.shift();

// Add string to beginning of array

secretMessage.unshift('Programming');

// Remove strings and replace with one string

// console.log(secretMessage.indexOf('get'));

secretMessage.splice(6, 11, 'know');