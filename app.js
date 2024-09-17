function updateCountdown(){
    const now = new Date();
    const newyear = new Date(2024 , 0 , 1 ,0 , 0, 0);
    
    const timeDiff = newyear - now;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 *60 *60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    const countdownText = `${days}d ${hours}h ${minutes}m ${seconds}s`;


    document.getElementById("countdown").innerHTML = countdownText;


}

setInterval(updateCountdown, 1000);


updateCountdown();



