let selectedShape = "";
let selectedOperation = "";

// Function to handle shape selection

function pilihBentuk(shape) {
  selectedShape = shape;

  // Hapus kelas 'selected' dari semua tombol dalam 'pilihanBentuk'
  const buttons = document.querySelectorAll("#pilihanBentuk button");
  buttons.forEach((button) => {
    button.classList.remove("selected");
  });

  // Tambahkan kelas 'selected' pada tombol yang diklik
  event.target.classList.add("selected");

  // Tampilkan bagian 'pilihanOperasi' dan sembunyikan bagian lainnya
  document.getElementById("pilihanOperasi").style.display = "block";
  document.getElementById("rumus").style.display = "none";
  document.getElementById("inputNilai").style.display = "none";
  document.getElementById("hasil").style.display = "none";
}

// Function to handle operation selection
function pilihOperasi(operation) {
  selectedOperation = operation;

  // Hapus kelas 'selected' dari semua tombol dalam 'pilihanOperasi'
  const buttons = document.querySelectorAll("#pilihanOperasi button");
  buttons.forEach((button) => {
    button.classList.remove("selected");
  });

  // Tambahkan kelas 'selected' pada tombol yang diklik
  event.target.classList.add("selected");

  // Tampilkan rumus yang sesuai dan bagian input nilai
  tampilkanRumus();
  document.getElementById("inputNilai").style.display = "block";
  document.getElementById("hasil").style.display = "none";
}

// Function to display the relevant formula and image
function tampilkanRumus() {
  const gambarRumus = document.getElementById("gambarRumus");
  const teksRumus = document.getElementById("teksRumus");

  if (selectedShape === "persegi") {
    if (selectedOperation === "luas") {
      gambarRumus.src = "assets/Persegi.png"; // Update with actual image path
      teksRumus.innerText = "Rumus Luas Persegi: L = s × s";
    } else {
      gambarRumus.src = "assets/Persegi.png"; // Update with actual image path
      teksRumus.innerText = "Rumus Keliling Persegi: K = 4 × s";
    }
    document.getElementById("inputPersegi").style.display = "block";
    document.getElementById("inputPersegiPanjang").style.display = "none";
  } else if (selectedShape === "persegiPanjang") {
    if (selectedOperation === "luas") {
      gambarRumus.src = "assets/Persegi_Panjang.png"; // Update with actual image path
      teksRumus.innerText = "Rumus Luas Persegi Panjang: L = p × l";
    } else {
      gambarRumus.src = "assets/Persegi_Panjang.png"; // Update with actual image path
      teksRumus.innerText = "Rumus Keliling Persegi Panjang: K = 2 × (p + l)";
    }
    document.getElementById("inputPersegi").style.display = "none";
    document.getElementById("inputPersegiPanjang").style.display = "block";
  }
  document.getElementById("rumus").style.display = "block";
}

// Function to perform the calculation
function hitung() {
  let hasil = 0;
  let validInput = true;

  if (selectedShape === "persegi") {
    const sisi = parseFloat(document.getElementById("sisi").value);
    if (isNaN(sisi) || sisi <= 0) {
      validInput = false;
    } else {
      hasil = selectedOperation === "luas" ? sisi * sisi : 4 * sisi;
    }
  } else if (selectedShape === "persegiPanjang") {
    const panjang = parseFloat(document.getElementById("panjang").value);
    const lebar = parseFloat(document.getElementById("lebar").value);
    if (isNaN(panjang) || panjang <= 0 || isNaN(lebar) || lebar <= 0) {
      validInput = false;
    } else {
      hasil = selectedOperation === "luas" ? panjang * lebar : 2 * (panjang + lebar);
    }
  }

  if (!validInput) {
    alert("Masukkan nilai yang valid dan lebih dari 0.");
    return;
  }

  document.getElementById("teksHasil").innerText = `Hasil perhitungan ${selectedOperation} ${selectedShape.replace(/([A-Z])/g, " $1").toLowerCase()}: ${hasil}`;
  document.getElementById("hasil").style.display = "block";
}

// Function to reset the form
function resetForm() {
  selectedShape = "";
  selectedOperation = "";
  document.getElementById("pilihanOperasi").style.display = "none";
  document.getElementById("rumus").style.display = "none";
  document.getElementById("inputNilai").style.display = "none";
  document.getElementById("hasil").style.display = "none";
  document.getElementById("sisi").value = "";
  document.getElementById("panjang").value = "";
  document.getElementById("lebar").value = "";
}
