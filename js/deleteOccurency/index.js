function deleteNth(arr,n){
    const seen = {};

    return arr.filter(e => {
        seen[e] = (seen[e] ? seen[e] : 0) + 1
        return seen[e] <= n;
    });
}