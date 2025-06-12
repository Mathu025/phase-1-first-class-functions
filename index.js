function receivesAFunction(cb) {
    console.log(cb())
}

function returnsANamedFunction() {
    function namedFunction() {
        return 'Exam'
    }
return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log('Hi')
    }
    
}


