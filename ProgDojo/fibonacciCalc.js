var fibCalc = (n) => {
    let foo = n - 1;
    if(foo <= 1) {
        return foo
    }
    return fibCalc(foo) + fibCalc(foo-1)
}
console.log(fibCalc(4))

//0,1,1,2,3,5,8,13,21