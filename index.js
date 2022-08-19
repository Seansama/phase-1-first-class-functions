function receivesAFunction(something){
    return something();
}

function returnsANamedFunction(){
    return receivesAFunction;
}

function  returnsAnAnonymousFunction(){
    return function(){
        return `Hi`}
}