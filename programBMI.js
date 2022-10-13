var tinggi,berat,keterangan,bmi;
function hitung() {
	tinggi = parseFloat(document.getElementById("ipt_t").value);
	tinggi = tinggi / 100;
	berat = parseFloat(document.getElementById("ipt_b").value);
	bmi = berat / (tinggi * tinggi);

	if (bmi >= 30) {
		document.getElementById('bmi').innerHTML = bmi.toFixed(1);
		document.getElementById('keterangan').innerHTML = "Berat badan mu sangat gemuk";
	}else if ((bmi >= 25) & (bmi <= 29)){
		document.getElementById('bmi').innerHTML =  bmi.toFixed(1);
		document.getElementById('keterangan').innerHTML = "Berat badan mu gemuk";
	}else if ((bmi >= 19) & (bmi <= 24)){
		document.getElementById('bmi').innerHTML = bmi.toFixed(1);
		document.getElementById('keterangan').innerHTML = "Berat badan mu kurus";
	} else if ((bmi >= 0) & (bmi <= 18)){
		document.getElementById('bmi').innerHTML = bmi.toFixed(1);
		document.getElementById('keterangan').innerHTML = "Berat badan mu kurus";
	} else{
		document.getElementById('bmi').innerHTML = 0;
		document.getElementById('keterangan').innerHTML = "Data Tidak Ditemukan";
	}
}