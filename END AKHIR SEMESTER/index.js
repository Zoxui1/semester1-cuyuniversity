class Hewan {
    warna
    keahlian
    constructor(nama) {
        this.nama = nama
    }

    set newColor(color) {
        this.warna = color
    }
    set newSkill(skill) {
        this.keahlian = skill
    }

    get detail() {
        return `Nama saya: ${this.nama}, warna saya: ${this.warna}, dan keahlian saya: ${this.keahlian}.`
    }
}

const kucing = new Hewan('cofee');
kucing.newColor = 'hitam';
kucing.newSkill = 'berlari';

console.log(kucing.detail);

