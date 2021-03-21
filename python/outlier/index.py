def find_outlier(integers):
    even, odd = 0, 0
    for nb in integers:
        if nb % 2 == 0:
            even += 1
        else:
            odd += 1
    if even > odd:
        for nb in integers:
            if nb % 2 != 0:
                return nb
    else:
        for nb in integers:
            if nb % 2 == 0:
                return nb