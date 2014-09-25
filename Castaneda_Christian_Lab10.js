/*
 * Christian Castaneda
 * September 25th, 2014
 * SDI
 * Lab 10
 */

// Variables
    var pballNums;
  
// Problem one - Multiples of 3 and 5
    
    var threeNfive = function()
    {
        var threeSum = 0; //<---LOL
        var fiveSum  = 0; //<---LOL
        
        //LOOP for 3
        for(i = 0; i < 334; i++)
        {
            threeSum = threeSum + (3 * i);                
        };
        
        //LOOP for 5
        for(x = 0; x < 190; x++)
        {
            fiveSum = fiveSum + (5 * x);                
        };
          
        //ADD and RETURN the sums
        return threeSum + fiveSum;
        
    };
    
// Problem two - Powerball Generator

    var powerBall = function()
    {
        var pballArray = [];
        var numArray = [];  
        	for(i = 1; i < 60; i++)
            {
                numArray[i] = i;  
            };           

        // 5 NUMS
        for(i = 0; i < 5; i++)
        {
          pballArray[i] = Math.floor(Math.random() * 58) + 1;
          numArray.splice(pballArray[i]);   
        };
        
        //POWERBALL NUM
        pballArray[5] = Math.floor(Math.random() * 34) + 1;
     
        return pballArray;  
    }; 
    
// MAIN

    console.log("The multiples of 3 and 5 of all whole numbers under 1000 is " + threeNfive() + ".");
       
    pballNums = powerBall();
    console.log("Today's lottery numbers are " + pballNums[0] + ", " + pballNums[1] + ", " + pballNums[2] + ", " + pballNums[3] + ", and " + pballNums[4] + "!");
    console.log("And today's powerball number is " + pballNums[5] + "!");

