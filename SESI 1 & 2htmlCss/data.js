const nama = "nabil gusfermanto";
const usia = 14;

function tentukanGenerasi(usia) {
    if (usia < 12) return "generasi anak-anak";
    if (usia < 18) return "generasi remaja";
    if (usia <= 30) return "generasi dewasa";
    return "generasi tua";
}

function generateBiodata(nama, usia) {
    const generasi = tentukanGenerasi(usia);
    document.getElementById('biodata').innerHTML = generasi;
    console.log(`Nama: ${nama}, Usia: ${usia}, Generasi: ${generasi}`);
}

generateBiodata(nama, usia);
