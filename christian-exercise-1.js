"use strict";

// Write a JavaScript program to create a Clock. Go to the editor
// Note: The output will come every second.

function Clock()
{
    this.day = new Date();
    this.hrs = this.day.getHours();
    this.mins = this.day.getMinutes();
    this.secs = this.day.getSeconds();
}
Clock.prototype.run = function ()
{
    setInterval(this.update.bind(this), 1000);
};
Clock.prototype.update = function ()
{
    this.updateTime(1);
    console.log(this.hrs + ":" + this.mins + ":" + this.secs);
};
Clock.prototype.updateTime = function (secs)
{
    this.secs+= secs;
    if (this.secs >= 60)
    {
        this.mins++;
        this.secs = 0;
    }
    if (this.mins >= 60)
    {
        this.hrs++;
        this.mins = 0;
    }
    if (this.hrs >= 24)
    {
        this.hrs = 0;
    }
};
var Clock = new Clock();
Clock.run();
