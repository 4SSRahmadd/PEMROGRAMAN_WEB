function jumlah() {
    const first = parseInt(document.getElementById("first").value);
    const second = parseInt(document.getElementById("second").value);
    const sumRes = first + second;
    alert(`Hasil Penjumlahan = ${sumRes}`);
}

function reset() {
    document.getElementById("first").value = null;
    document.getElementById("second").value = null;
}