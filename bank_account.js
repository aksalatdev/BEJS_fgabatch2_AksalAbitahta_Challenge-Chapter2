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
    const jumlah = parseFloat(prompt("Masukkan jumlah saldo yang ingin dikurangi:"));
    if (!isNaN(jumlah)) {
        bankAccount.withdraw(jumlah);
    } else {
        alert("Masukan tidak valid. Silakan masukkan angka.");
    }
}

function cekSaldo() {
    bankAccount.checkBalance();
}

