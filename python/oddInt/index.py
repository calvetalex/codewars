def find_it(seq):
    count = 0
    for i in range(len(seq)):
        for j in range(len(seq)):
            count += 1 if seq[i] == seq[j] else 0
        if count % 2 != 0:
            return seq[i]
    return -1