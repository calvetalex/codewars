def get_count(input_str):
    num_vowels = 0
    for l in input_str:
        num_vowels = (num_vowels + 1) if l in "aeiouAEIOU" else num_vowels
    return num_vowels