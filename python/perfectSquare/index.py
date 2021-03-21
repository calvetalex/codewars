import math
def find_next_square(sq):
    nb = math.sqrt(sq)
    if (int(str(nb).split('.')[1]) > 0) or nb < 0:
        return -1
    nb += 1
    return nb * nb 