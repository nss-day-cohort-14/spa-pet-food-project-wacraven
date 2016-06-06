/**********JSON REQUEST**********/
var xhrRequest = new XMLHttpRequest();
function xhrLoadSuccess() {
	var parsedObj = JSON.parse(this.responseText);
	console.log("parsedObj", parsedObj);
/**********WRITE TO DOM**********/
	for (var i = 0; i < parsedObj.dog_brands.length; i++) {
		var currentBrand = parsedObj.dog_brands[i];
		console.log("Brand Name:", currentBrand.name);

		for (var j = 0; j < currentBrand.types.length; j++) {
			var currentType = currentBrand.types[j]
			console.log("Type:", currentType.type);

			for (var k = 0; k < currentType.volumes.length; k++) {
				console.log(currentType.volumes[k])
				document.getElementById('container').innerHTML += `
					<div class="product">
						<div class="title">
							${currentBrand.name}'s ${currentType.type}
						</div>
						<div class="volume">
							Get ${currentType.volumes[k].name} for only ${currentType.volumes[k].price}
						</div>
					</div>`
			}
		}
		console.log("----------end brand----------");
	}
/**********END - WRITE TO DOM**********/
 }
function xhrLoadError() {
	console.log("error");
}
xhrRequest.addEventListener("load", xhrLoadSuccess);
xhrRequest.addEventListener("error", xhrLoadError);
xhrRequest.open("GET", "food.JSON");
xhrRequest.send();
/**********END - JSON REQUEST**********/