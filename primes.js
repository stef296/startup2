#!/usr/bin/env node

var fs = require('fs');
var outfile = "primes.txt";

// Fibonacci
// http://en.wikipedia.org/wiki/Fibonacci_number
//var fibonacci = function(n) {
//    if(n < 1) { return 0;}
//    else if(n == 1 || n == 2) { return 1;}
//    else if(n > 2) { return fibonacci(n - 1) + fibonacci(n - 2);}
//};

// Fibonacci: closed form expression
// http://en.wikipedia.org/wiki/Golden_ratio#Relationship_to_Fibonacci_sequence
//var fibonacci2 = function(n) {
//    var phi = (1 + Math.sqrt(5))/2;
//    return Math.round((Math.pow(phi, n) - Math.pow(1-phi, n))/Math.sqrt(5));
//};

// Try to find the first k primes by searching through numbers 1...n 
// by using the Sieve of Eratosthenes 
var firstkprimes = function(k,n) {
    var i = 1;
    var arr = [];
    for (i = 1; i < n+1; i++) {
        arr.push(true);
    }
    //console.log("Initialised " + arr.length + " numbers.");
    var sqrt_n =  Math.floor(Math.sqrt(n));
    for (i = 2; i <= sqrt_n; i++) {
        var j = 0;
        if (arr[i] == true)
        {
	   for ( j = i*i; j <=n; j=j+i)
	       arr[j]=false;
        }
    }
    //console.log("Finished sieve. Sqrt_n = " + sqrt_n);
    //console.log("arr("+arr.length+")= " + fmt(arr));
    var arr2 = [];
    var prime_count = 0;
    for ( i=2; i<n+1; i++) {
        if (prime_count < k) {
            if (arr[i]==true) {
               arr2.push(i);
               prime_count++;
            }
        }
        else
	    break;	
    } 
    //console.log("Found " + arr2.length + " primes.");
    return arr2;
};

// Print to console
var fmt = function(arr) {
    return arr.join(",");
};

var k = 100;
var n = 600;
//console.log("firstkprimes(" + k + "," + n + ")");
var res = fmt(firstkprimes(k,n));
console.log(res);
fs.writeFileSync(outfile,res);
