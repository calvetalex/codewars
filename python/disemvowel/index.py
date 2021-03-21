def disemvowel(string):
    return ''.join([x for x in string if x not in ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U')])