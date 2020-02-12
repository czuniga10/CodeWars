var fibCalc = (n) => {
    if(n <= 1) {
        return n
    }
    return fibCalc(n-1) + fibCalc(n-2)
}
console.log(fibCalc(4))

//0,1,1,2,3,5,8,13,21