let saldo = 0;

function tambahSaldo() {
    const jumlah = parseFloat(prompt("Masukkan jumlah saldo yang ingin ditambahkan:"));
    if (!isNaN(jumlah)) {
        bankAccount.deposit(jumlah);
    } else {
        alert("Masukan tidak valid. Silakan masukkan angka.");
    }
}

function kurangiSaldo() {
  const jumlahKurang = parseFloat(window.prompt("Masukkan jumlah saldo yang ingin dikurangi: "));
  saldo -= jumlahKurang;

  console.log(`Saldo baru: Rp${saldo}`);
}


tambahSaldo(); 
kurangiSaldo(); 

