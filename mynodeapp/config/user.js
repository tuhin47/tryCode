process.env.TZ='UTC'
const execSync = require('child_process').execSync;
const output = execSync('date', { encoding: 'utf-8' }); 
console.log('UTC = '+output);

process.env.TZ='GMT'
const output2 = execSync('date', { encoding: 'utf-8' }); 
console.log('GMT = '+output2);