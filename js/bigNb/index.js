function add(a, b) {
    let res = '', store = 0;
    a = a.split('');
    b = b.split('');

    while (a.length || b.length || store) {
        store += ~~(a.pop()) + ~~(b.pop()); // use double not instead of number cast because array could be empty
        res = (store % 10) + res;
        store = store > 9;
    }
    return res;
}