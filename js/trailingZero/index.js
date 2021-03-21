function zeros(n) {
    let res = 0;
    while (n = Math.floor(n/5)) res += n; // http://oeis.org/A027868
    return res;
}