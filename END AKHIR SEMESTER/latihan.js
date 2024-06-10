const siswa = [
    {
    nama: "nabil gusfermanto",
    alamat: "Jl.tp sriwijaya No.71",
    usia: 14,
    semester: 2
},
{
    nama: "gusfermanto nabil",
    alamat: "Jl.tp sriwijaya No.72",
    usia: 16,
    semester: 4
}
]

function getDetailData() {
    siswa.map(function(result, i){
        console.table(result);
    })
    // console.log(`data yang anda cari adalah: ${siswa.nama}`);
}

