def unique_in_order(iterable):
    if not iterable:
        return []
    res = [iterable[0]]
    return res + [it for i, it in enumerate(iterable[1:], start=1) if it is not iterable[(i - 1)]]