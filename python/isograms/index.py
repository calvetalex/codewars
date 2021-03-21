def is_isogram(string):
    string = string.lower()
    return (string and len(set(string)) == len(string) or len(string) == 0)