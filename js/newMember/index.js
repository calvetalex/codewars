function openOrSenior(data){
    return data.map(profile => profile[0] >= 55 && profile[1] > 7 ? 'Senior' : 'Open');
}