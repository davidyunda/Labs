let birds = ['Owl', 'Robin', 'Eagle']
console.log(birds)

birds.forEach( function(bird) {
    // repeat once for each objec in array
    // function will be called for each object in the array
    console.log(bird)
}) 

// traditional for loop
for ( let x=0; x<birds.length; x++ ) {
    let bird = birds[x]
    console.log(x, bird)
}