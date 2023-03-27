function UpdateTime(){
    let time = new Date;

    let idTime = document.getElementById('time');
    idTime.innerText = ConvertedTime();

    function ConvertedTime(){
        let hour = (time.getHours() < 10 ? '0'+ time.getHours() : time.getHours()) 
        let minutes = (time.getMinutes() < 10 ? '0'+ time.getMinutes() : time.getMinutes()) 
        let seconds = (time.getSeconds() < 10 ? '0'+ time.getSeconds() : time.getSeconds())
        time = `${hour}:${minutes}:${seconds}`
        return time
    }
}

setInterval(function () {UpdateTime()}, 1000);

