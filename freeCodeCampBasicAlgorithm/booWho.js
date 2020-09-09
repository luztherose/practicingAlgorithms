/*
    Boo who
    Check if a value is classified as a boolean primitive. Return true or false.
    Boolean primitives are true and false.
*/

function booWho(bool) {
    // validate if the value is a boolean primitive
    // if it's a boolean primitive return true 
    // else return false
    if(bool === true || bool === false) {
        return true;
    } else {
        return false;
    }
}

booWho(null);