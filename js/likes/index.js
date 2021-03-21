function likes(names) {
    if (names.length === 0) {
        return 'no one likes this'
    }
    if (names.length < 4) {
        return `${names.map((e, idx) => idx !== (names.length - 1) ? (idx === (names.length - 2) ? `${e} and` : `${e},`) : `${e} ${names.length > 1 ? 'like' : 'likes'} this`).join(' ')}`
    }
    return `${names.slice(0, 2).map((e, idx) => idx === 1 ? `${e} and` : `${e},`).join(' ')} ${names.slice(2).length} others like this`;
}

console.log(likes(['Jacob', 'Alex']))