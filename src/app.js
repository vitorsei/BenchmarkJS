// performance.js
var Benchmark = require( 'benchmark' );
var suite = new Benchmark.Suite;
var arrayPushAndIncrement = require( './arrayPushAndIncrement' );
var arrayPushAndForeach= require( './arrayPushAndForeach' );
var arrayPushAndReduce = require( './arrayPushAndReduce' );
var noArrayForLoop = require( './noArrayForLoop' );
// add tests
suite.add( 'arrayPushAndIncrement', function() {
    arrayPushAndIncrement(45678)
})
    .add( 'arrayPushAndForeach', function() {
        arrayPushAndForeach(45678)
    })
    .add( 'arrayPushAndReduce', function() {
        arrayPushAndReduce(45678)
    })
    .add( 'noArrayForLoop', function() {
        noArrayForLoop(45678)
    })
    // add listeners
    .on( 'cycle', function( event ) {
        console.log( String( event.target ));
    })
    .on( 'complete', function() {
        console.log( 'Fastest is ' + this.filter( 'fastest' ).map( 'name' ));
    })
    // run async
    .run({ 'async': true });