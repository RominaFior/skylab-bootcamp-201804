//baseclass

var job = function () {
	this.pays = true;
};

/*subclass: got deleted after creating a prototype for techJob print method.

var techJob = function(title, pays){
job.call(this);

this.title = title;
this.pays = pays;
};
*/

techJob.prototype = Object.create(job.prototype);
techJob.prototype.constructor = techJob;

//prototype method (because print is the action, we can call it)

techJob.prototype.print = function () {
	console.log(this.pays ? 'please hire me' : 'no thank you');
};

var softwarePosition = new techJob('JS programmer', true);
var softwarePosition2 = new techJob('vb programmer', false);

console.log(softwarePosition.print());
console.log(softwarePosition2.print());


// -> please hire me
// -> no thank you