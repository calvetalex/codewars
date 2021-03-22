function mix(s1, s2) {
  String.prototype.getOccurrences = function (char) {
    return (this.valueOf().match(new RegExp(char, "g")) || []).length;
  };
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split(''), maximums = {};
  const toCheck1 = s1.match(/[a-z]/g).sort().join("");
  const toCheck2 = s2.match(/[a-z]/g).sort().join("");

  alphabet.forEach((letter) => {
    const value1 = toCheck1.getOccurrences(letter);
    const value2 = toCheck2.getOccurrences(letter);
    if (value1 === value2 && value1 > 1)
      maximums[value1] ? maximums[value1].push({ origin: 3, letter }) : (maximums[value1] = [{ origin: 3, letter }]);
    else if (value1 > value2 && value1 > 1) {
      maximums[value1] ? maximums[value1].push({ origin: 1, letter }) : (maximums[value1] = [{ origin: 1, letter }]);
    } else if (value2 > 1) {
      maximums[value2] ? maximums[value2].push({ origin: 2, letter }) : (maximums[value2] = [{ origin: 2, letter }]);
    }
  });
  return Object.keys(maximums)
    .sort((a, b) => b - a)
    .map((occurrence) =>
      maximums[occurrence]
        .sort((a, b) => a.origin - b.origin)
        .sort((a, b) => a.origin === b.origin ? a.letter.charCodeAt() - b.letter.charCodeAt() : 0)
        .map((e) => `${e.origin === 3 ? "=" : e.origin}:${e.letter.repeat(occurrence)}`)
        .join("/")
    ).join('/');
}

// TEST SECTION
const basic =" In many languages", tester= " there's a pair of functions";
const test = "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt";
const res = mix(basic, tester);
console.log(basic, tester)
console.log(test)
console.log(res)
console.log(test === res)

const basic2 = "A generation must confront the looming ", tester2 = "codewarrs";
const test2 = "1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr";
const res2 = mix(basic2, tester2);
console.log(basic2, tester2);
console.log(test2)
console.log(res2)
console.log(test2 === res2)

const gentilPetitTest = "Saymy?rtul)ooilPnmtb6hcruYwxpe" 
const joliPetitTest = "@afey?cztnMekwcAvnlq:lvvp-kpsk";
const expected = "2:kkk/2:vvv/1:mm/1:oo/1:rr/1:tt/1:uu/1:yy/2:cc/2:ee/2:nn/2:pp/=:ll";
const res3 = mix(gentilPetitTest, joliPetitTest);
console.log(gentilPetitTest, joliPetitTest)
console.log(expected)
console.log(res3)
console.log(res3 === expected)

const taMere = "/lxue*fkpmUbhggUkvlo&qijlKevio", laPute = "1yvckCpsnd=emyf,slpd>tfcx4fbjo";
const res4 = mix(taMere, laPute);
const expected2 = "1:lll/2:fff/1:ee/1:gg/1:ii/1:kk/1:oo/1:vv/2:cc/2:dd/2:pp/2:ss/2:yy"
console.log(taMere, laPute)
console.log(expected2)
console.log(res4)
console.log(res4 === expected2)

const toto = "+vbaeAlxypRvyhu=octpWnkozBkcuz", tata = "UboosKhvdoNabriCshdsXpgiyHflpk";
const res5 = mix(toto, tata); 
const expected3 = '2:ooo/2:sss/1:cc/1:kk/1:uu/1:vv/1:yy/1:zz/2:bb/2:dd/2:hh/2:ii/=:pp';
console.log(toto, tata)
console.log(expected3)
console.log(res5)
console.log(res5 === expected3)



