var tinggi,berat,keterangan,bmi;
function hitung() {
	tinggi = parseFloat(document.getElementById("ipt_t").value);
	tinggi /= 100;
	berat = parseFloat(document.getElementById("ipt_b").value);
	bmi = berat / (tinggi * tinggi);

	if (bmi >= 30) {
		keterangan = "Berat badan mu sangat gemuk";
	}else if ((bmi >= 25) & (bmi <= 29)){
		keterangan = "Berat badan mu gemuk";
	}else if ((bmi >= 19) & (bmi <= 24)){
		keterangan = "Berat badan mu normal";
	} else if ((bmi >= 0) & (bmi <= 18)){
		keterangan = "Berat badan mu kurus";
	}else {
		keterangan = "Data Tidak Ditemukan";
	}
	document.getElementById('bmi').innerHTML = "Hasil perhitungan BMI : " + bmi.toFixed(1);
	document.getElementById('keterangan').innerHTML = keterangan;
}