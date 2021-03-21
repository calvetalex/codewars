function DNAStrand(dna){
    const MAP = {A: 'T', T:'A',C:'G', G:'C'};
    return dna.split('').map(e => MAP[e]).join('');
}