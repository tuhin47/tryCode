// var schedule = require('node-schedule');

// var date = new Date();
// date.setSeconds(date.getSeconds()+3);

// var j = schedule.scheduleJob(date, function (fire) {
//     console.log(fire,'here');
//     date.setMinutes(date.getSeconds() + 10);
// });
var schedule = require('node-schedule');
//console.log('now=', new Date(Date.now()).getSeconds());
let times = [{
    start: new Date(Date.now() + 5000),
    end: new Date(Date.now() + 10000),
    rule: '*/1 * * * * *'
}]

// times.forEach(function (time, ind) {

// });
// var j = schedule.scheduleJob(times[0], function () {
//     // your job
//     console.log('new', new Date(Date.now()).getSeconds());
//     schedule.scheduleJob(times[1]);
// });

function newTime(start,end) {
    return {
        start: new Date(Date.now() + start),
        end: new Date(Date.now() + end),
        rule: '*/1 * * * * *'
    }
}

function jobs(name, time, callback) {
    schedule.scheduleJob(name, time,callback);
}

var name=1;
function prints() {
    console.log(this.name);
    jobs('new'+name,newTime(5000,6000),prints);
    name+=1;
    this.cancel();
}

while (this.name,times.length) {
    jobs('name' + name, times.pop(), prints);
    name+=1;
}
