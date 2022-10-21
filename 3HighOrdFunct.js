function sing(callback) {
    console.log('la la la la');
    if(callback instanceof Function) {
        callback();
    }
}


function setup() {

    sing(function() {
        console.log('meow meow');
    });
}