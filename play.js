/**
 * Establishes connection with the game server
 */
const { connect } = require('./client');
const { setupInput } = require('./input');
let connection; 

console.log('Connecting ...');

setupInput(connect());
