$(document).ready(function () {
	$('#Promos').click(function () {
		$('#PromosHide').toggle(500)
		$('#Inicio #Isologo').toggle(500);
		$('#Sucursales p').toggle(500);
		$('#Menu p').toggle(500);
	});

	$('#Menu').click(function () {
		$('#MenuHide').toggle(500);
		$('#Inicio #Isologo').toggle(500);
		$('#Sucursales p').toggle(500);
		$('#Promos p').toggle(500);
	});

	$('#Sucursales').click(function () {
		$('#SucursalesHide').toggle(500)
		$('#Inicio #Isologo').toggle(500);
		$('#Menu p').toggle(500);
		$('#Promos p').toggle(500);
	});
});