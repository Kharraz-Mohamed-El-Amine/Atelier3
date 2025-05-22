const numbers = [1, 3, 4];

function fact(nbr) {
    if (nbr === 0 || nbr === 1) {
        return 1;
    }
    return nbr * fact(nbr - 1);
}

const res = (nums) => nums.map(fact);
console.log(res(numbers)); 