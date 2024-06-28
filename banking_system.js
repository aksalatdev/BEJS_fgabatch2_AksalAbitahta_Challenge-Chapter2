class BankAccount {
    constructor(initialBalance = 0) {
        this.balance = initialBalance;
    }

    deposit(amount) {
        // asinkron deposit
        setTimeout(() => {
            if (amount > 0) {
                this.balance += amount;
                alert(`Deposit berhasil. Saldo baru: ${this.balance}`);
            } else {
                alert("Jumlah deposit harus lebih dari 0");
            }
        }, 1000); // Delay 1 detik
    }

    withdraw(amount) {
        // asinkron penarikan
        setTimeout(() => {
            if (amount > 0) {
                if (this.balance >= amount) {
                    this.balance -= amount;
                    alert(`Penarikan berhasil. Saldo baru: ${this.balance}`);
                } else {
                    alert("Saldo tidak mencukupi");
                }
            } else {
                alert("Jumlah penarikan harus lebih dari 0");
            }
        }, 1000); // Delay 1 detik
    }

    checkBalance() {
        // Menampilkan saldo secara langsung
        alert(`Saldo saat ini: ${this.balance}`);
    }
}


const bankAccount = new BankAccount(0);