#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char *solution(int n) {
  char *res = NULL;
  int nb[13] = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
  char *roman[13] = {"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};
  
  if (!(res = malloc(sizeof(*res))))
      return NULL;
  for (int numberIdx = 0; numberIdx < 13; numberIdx++) {
    if (n / nb[numberIdx] > 0) {
      for (int tmp = 0; tmp < (n / nb[numberIdx]); tmp++) {
        if (!(res = realloc(res, (sizeof(*res) * (strlen(res) + 1)))))
            return NULL;
        res = strcat(res, roman[numberIdx]);
      }
      n = n % nb[numberIdx];
    }
  }
  return res;
}