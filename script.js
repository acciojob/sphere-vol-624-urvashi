function volume_sphere(e) {
	e.preventDefault();
	let radius = parseFloat(document.getElementById("radius").value);

	let volume = ( 4/3)*Math.PI*Math.pow(radius, 3);

	document.getElementById("volume").value = volume;

	return volume;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
