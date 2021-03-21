function towerBuilder(nFloors) {
    const building = [];
    for (let i = 1, block = 1; i <= nFloors; i+= 1, block+=2) {
        spaces = ' '.repeat(nFloors - i);
        building.push(`${spaces}${'*'.repeat(block)}${spaces}`)
    }
    return building;
}