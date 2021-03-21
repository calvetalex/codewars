function highAndLowNotOpti(numbers){
    const nbs = numbers.split(' ').map(e => parseInt(e));
    let max = -Infinity, min = Infinity;
    nbs.forEach(nb => {
        if (nb > max) {
            max = nb;
        }
        if (nb < min) {
            min = nb;
        }
    })
    return `${max} ${min}`;
}

function highAndLow(numbers) {
    const nbs = numbers.split(' ').map(e => parseInt(e));
    return `${Math.max(...nbs)} ${Math.min(...nbs)}`;
}