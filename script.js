//Menampilkan Nama Kelompok Menggunakan Function Map (Pengolahan Array)
const anggota = [
  { nama: "Erlin Sofia" },
  { nama: "Fauzan Zaman" },
  { nama: "Fachrul" },
  { nama: "Muhamad Ikhsan" },
];

document.getElementById("textkelompok").innerHTML = anggota.map(getKelompok);

function getKelompok(item) {
    return [item.nama];
  }
  
  function filterData(query) {
    return data.filter((el) => el.nama_lengkap.toLowerCase().includes(query.toLowerCase()));
  }
//Fungsi Temukan
window.temukan =  () => {
  const filteredData = input.value == "" ? alert("Input Tidak Boleh Kosong!") : filterData(input.value)
  result.innerHTML = ''
  !filteredData.length ? result.innerHTML = '<p>Data Tidak Ditemukan</p>' :
    filteredData.forEach((el) => {
      result.innerHTML += `<h1>${el.nama_lengkap}</h1>
                <table>
                    <tr>
                        <td>Nama Lengkap</td>
                        <td>:</td>
                        <td>${el.nama_lengkap}</td>
                    </tr>
                    <tr>
                        <td>Nama Panggilan</td>
                        <td>:</td>
                        <td>${el.nama_panggilan}</td>
                    </tr>
                    <tr>
                        <td>NIM</td>
                        <td>:</td>
                        <td>${el.nim}</td>
                    </tr>
                    <tr>
                        <td>Nomor Telepon</td>
                        <td>:</td>
                        <td>${el.nomor_telepon}</td>
                    </tr>
                    <tr>
                        <td>ID Line</td>
                        <td>:</td>
                        <td>${el.id_line}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>:</td>
                        <td>${el.email}</td>
                    </tr>
                    <tr>
                        <td>Hobi</td>
                        <td>:</td>
                        <td>${el.hobi}</td>
                    </tr>
                    <tr>
                        <td>Tanggal Lahir</td>
                        <td>:</td>
                        <td>${el.tanggal_lahir}</td>
                    </tr>
                </table>`
    })
}
