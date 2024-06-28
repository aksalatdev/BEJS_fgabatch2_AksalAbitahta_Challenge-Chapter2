let saldo = 0;

function tambahSaldo() {
  const jumlahTambah = parseFloat(window.prompt("Masukkan jumlah saldo yang ingin ditambahkan: "));
  saldo += jumlahTambah;

  console.log(`Saldo baru: Rp${saldo}`);
}


function kurangiSaldo() {
  const jumlahKurang = parseFloat(window.prompt("Masukkan jumlah saldo yang ingin dikurangi: "));
  saldo -= jumlahKurang;

  console.log(`Saldo baru: Rp${saldo}`);
}


tambahSaldo(); 
kurangiSaldo(); 

