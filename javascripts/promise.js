$(document).ready(function() {

//     var dinosaurs = [];


    function writeDOM() {
        var domString = "";
        for (var i = 0; i < dinosaurs.length; i++) {
            domString += `<h1>${dinosaurs[i].type}</h1>`;
        }
        $("#promises").append(domString);
    }


//     $.ajax("./db/dinosaurs1.json").done(function(data1) {
//         console.log("data1", data1.dinosaurs1);
//         dinosaurs = data1.dinosaurs1
//         $.ajax("./db/dinosaurs2.json").done(function(data2) {
//             console.log("data2", data2.dinosaurs2);
//             data2.dinosaurs2.forEach(function(dino) {
//                 dinosaurs.push(dino);
//             })
//             $.ajax("./db/dinosaurs3.json").done(function(data3) {
//                 console.log("data3", data3.dinosaurs3);
//                 data3.dinosaurs3.forEach(function(dino) {
//                     dinosaurs.push(dino);
//                 })
//                 writeDOM();
//             }).fail(function(error3) {
//                 console.log(error3);
//             })
//         }).fail(function(error2) {
//             console.log(error2);
//         })
//     }).fail(function(error1) {
//         console.log(error1);
//     })

var firstDinosaurJSON = function(){
	return new Promise(function(resolve, reject){
		$.ajax("./db/dinosaurs1.json").done(function(data1){
			resolve(data1.dinosaurs1);
		}).fail(function(error1){
			reject(error1);
		})
	})
};

var secondDinosaurJSON = function(){
	return new Promise(function(resolve, reject){
		$.ajax("./db/dinosaurs2.json").done(function(data2){
			resolve(data2.dinosaurs2);
		}).fail(function(error2){
			reject(error2);
		})
	})
};

var thirdDinosaurJSON = function(){
	return new Promise(function(resolve, reject){
		$.ajax("./db/dinosaurs3.json").done(function(data3){
			resolve(data3.dinosaurs3);
		}).fail(function(error3){
			reject(error3);
		})
	})
};

// firstDinosaurJSON().then(function(jsonData1){
// 	console.log(jsonData1);
// 	dinosaurs = jsonData1;
// 	writeDOM();
// }).catch(function(jsonDataFail1){
// 	console.log(jsonDataFail1);
// });

Promise.all([firstDinosaurJSON(), secondDinosaurJSON(), thirdDinosaurJSON()])
	.then(function(resultz){
		console.log("resultz", resultz);
		resultz.forEach(function(ajaxCalls){
			ajaxCalls.forEach(function(dino){
			dinosaurs.push(dino);
		})
	})
	writeDOM();
})

});