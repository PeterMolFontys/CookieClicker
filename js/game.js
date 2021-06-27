document.addEventListener("DOMContentLoaded", function(){
    resizeCanvas();
    let namefield = document.getElementById("namefield");
    let playfield = document.getElementById("playfield");
    let highscorefield = document.getElementById("highscorefield");
    let highscoresList = document.getElementById("highscoresList");
    let scorefield = document.getElementById("score");
    let persecondfield = document.getElementById("persecond");

    document.getElementById("cookie").addEventListener("click", AddScore);
    
    document.getElementById("cursorup1").addEventListener("click", CursorUp1);
    document.getElementById("cursorup2").addEventListener("click", CursorUp2);
    document.getElementById("grandmaup1").addEventListener("click", GrandmaUp1);
    
    document.getElementById("submit").addEventListener("click", StartGame);
    document.getElementById("name").addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            StartGame();
            resizeCanvas();
        }
    });
    document.getElementById("back").addEventListener("click", GoBack);

    let score = 0;
    let clicks = 0;
    let perSecond = 0;
    let name = "";
    let cursorPrice = 10;
    let cursorAmount = 0;
    let cursorMultiplier = 1;
    let cursorMath = 0;
    let cursorShownPrice = 10;
    let grandmaPrice = 100;
    let grandmaAmount = 0;
    let grandmaMultiplier = 1;
    let grandmaMath = 0;
    let grandmaShownPrice = 100;
    let farmPrice = 1100;
    let farmAmount = 0;
    let farmMultiplier = 1;
    let farmMath = 0;
    let farmShownPrice = 1100;
    let minePrice = 12000;
    let mineAmount = 0;
    let mineMultiplier = 1;
    let mineMath = 0;
    let mineShownPrice = 12000;
    let interval = 1000;
    let cursorUpg1 = false;
    let cursorUpg2 = false;
    let grandmaUpg1 = false;
    let perSecondAnimate = 10000;

    

    const cursorbtn = document.getElementById('addcursor');
    const grandmabtn = document.getElementById('addgrandma');
    const farmbtn = document.getElementById('addfarm');
    const minebtn = document.getElementById('addmine');

    if(cursorbtn) {
        cursorbtn.parentElement.setAttribute('data-interactive', '');
        cursorbtn.removeAttribute('hidden');
        cursorbtn.addEventListener('click', evt => {
            evt.preventDefault();

            Cursor();
        });
    }
    
    if(grandmabtn) {
        grandmabtn.parentElement.setAttribute('data-interactive', '');
        grandmabtn.removeAttribute('hidden');
        grandmabtn.addEventListener('click', evt => {
            evt.preventDefault();

            Grandma();
        });
    }
    
    if(farmbtn) {
        farmbtn.parentElement.setAttribute('data-interactive', '');
        farmbtn.removeAttribute('hidden');
        farmbtn.addEventListener('click', evt => {
            evt.preventDefault();

            Farm();
        });
    }
    
    if(minebtn) {
        minebtn.parentElement.setAttribute('data-interactive', '');
        minebtn.removeAttribute('hidden');
        minebtn.addEventListener('click', evt => {
            evt.preventDefault();

            Mine();
        });
    }
    
    function StartGame()
    {
        name = document.getElementById("name").value;
        namefield.style.display = "none";
        playfield.style.display = "block";
        if(name == "admin100"){
            console.log("welcome admin");
            OverTime();
            Available();
            cursorMultiplier = 100;
        }else if(name == "admin1000"){
            console.log("welcome admin");
            OverTime();
            Available();
            cursorMultiplier = 1000;
        }else if(name == "admin10000"){
            console.log("welcome admin");
            OverTime();
            Available();
            cursorMultiplier = 10000;
        }else{
            OverTime();
            Available();
        }
        
    }

    
    
    /* My own mouseclicks */
    
    function AddScore()
    {
        score = score + 1 * cursorMultiplier;
        scorefield.innerHTML = score.toLocaleString("en") + " cookies";
        clicks++;
    }
    
    /* All automated cookies */
    
    function OverTime() {
        if(perSecond == 0){
            null;
        }
        else if (perSecond < 50 ){
            interval = 1000 / perSecond;
            score++;      
            scorefield.innerHTML = score.toLocaleString("en") + " cookies";
        }
        else if (perSecond < 90){
            interval = 1000 / perSecond * 2;
            score = score + 2;
            scorefield.innerHTML = score.toLocaleString("en") + " cookies";
        }
        else if (perSecond < 180){
            interval = 1000 / perSecond * 4;
            score = score + 4;      
            scorefield.innerHTML = score.toLocaleString("en") + " cookies";
        }
        else if (perSecond < 350){
            interval = 1000 / perSecond * 9;
            score = score + 9;      
            scorefield.innerHTML = score.toLocaleString("en") + " cookies";
        }
        else if (perSecond < 650){
            interval = 1000 / perSecond * 17;
            score = score + 17;      
            scorefield.innerHTML = score.toLocaleString("en") + " cookies";
        }
        else if (perSecond < 900){
            interval = 1000 / perSecond * 41;
            score = score + 41;      
            scorefield.innerHTML = score.toLocaleString("en") + " cookies";
        }
        else if (perSecond < 1700){
            interval = 1000 / perSecond * 63;
            score = score + 63;      
            scorefield.innerHTML = score.toLocaleString("en") + " cookies";
        }
        else if (perSecond < 3300){
            interval = 1000 / perSecond * 111;
            score = score + 111;      
            scorefield.innerHTML = score.toLocaleString("en") + " cookies";
        }
        else{
            interval = 1000 / perSecond * 1111;
            score= score + 1111;      
            scorefield.innerHTML = score.toLocaleString("en") + " cookies";
        }
    setTimeout(OverTime, interval);
    }
    
    function CursorAvailable(){
        if(score >= cursorPrice){
            document.getElementById("addcursor").disabled = false;
            document.getElementById("curbox").style.opacity = "1";
        }
        else{
            document.getElementById("addcursor").disabled = true;
            document.getElementById("curbox").style.opacity = "0.7";
        }
    }
    
    function Cursor(){
        if(score >= cursorShownPrice){
            score = score - cursorPrice.toFixed(0);
            cursorPrice = cursorPrice * 1.1 + 1;
            cursorAmount = cursorAmount + 1;
            cursorMath = 0.1 * cursorAmount * cursorMultiplier;
            perSecond = cursorMath + grandmaMath + farmMath + mineMath;
            perSecondAnimate = 1000 / perSecond;
            persecondfield.innerHTML = "Per second: " + perSecond.toFixed(1);
            scorefield.innerHTML = score.toLocaleString("en") + " cookies";
            document.getElementById("curamount").innerHTML = cursorAmount;
            cursorShownPrice = cursorPrice + 1;
            document.getElementById("curprice").innerHTML = "Price: " + cursorShownPrice.toFixed(0);
            document.getElementById("curmath").innerHTML = "Total cps: " + cursorMath.toFixed(1);
        }
        else{
            alert("not enough cookies to buy this");
        }
    }
        
    function GrandmaAvailable(){
        if(score >= grandmaPrice){
            document.getElementById("addgrandma").disabled = false;
            document.getElementById("grabox").style.opacity = "1";
        }
        else{
            document.getElementById("addgrandma").disabled = true;
            document.getElementById("grabox").style.opacity = "0.7";
        }
    }
    
    function Grandma(){
        if(score >= grandmaPrice){
            score = score - grandmaPrice.toFixed(0);
            grandmaPrice = grandmaPrice * 1.1; 
            grandmaAmount = grandmaAmount + 1;
            grandmaMath = 1 * grandmaAmount * grandmaMultiplier;
            perSecond = cursorMath + grandmaMath + farmMath + mineMath;
            perSecondAnimate = 1000 / perSecond;
            persecondfield.innerHTML = "Per second: " + perSecond.toFixed(1);
            scorefield.innerHTML = score.toLocaleString("en") + " cookies";
            document.getElementById("graamount").innerHTML = grandmaAmount;
            grandmaShownPrice = grandmaPrice + 1;
            document.getElementById("graprice").innerHTML = "Price: " + grandmaShownPrice.toFixed(0);
            document.getElementById("gramath").innerHTML = "Total cps: " + grandmaMath.toFixed(1);
        }
        else{
            alert("not enough cookies to buy this");
        }
    }

    function FarmAvailable(){
        if(score >= farmPrice){
            document.getElementById("addfarm").disabled = false;
            document.getElementById("farbox").style.opacity = "1";
        }
        else{
            document.getElementById("addfarm").disabled = true;
            document.getElementById("farbox").style.opacity = "0.7";
        }
    }
    
    function Farm(){
        if(score >= farmPrice){
            score = score - farmPrice.toFixed(0);
            farmPrice = farmPrice * 1.1; 
            farmAmount = farmAmount + 1;
            farmMath = 8 * farmAmount * farmMultiplier;
            perSecond = cursorMath + grandmaMath + farmMath + mineMath;
            perSecondAnimate = 1000 / perSecond;
            persecondfield.innerHTML = "Per second: " + perSecond.toFixed(1);
            scorefield.innerHTML = score.toLocaleString("en") + " cookies";
            document.getElementById("faramount").innerHTML = farmAmount;
            farmShownPrice = farmPrice + 1;
            document.getElementById("farprice").innerHTML = "Price: " + farmShownPrice.toFixed(0);
            document.getElementById("farmath").innerHTML = "Total cps: " + farmMath.toFixed(1);
        }
        else{
            alert("not enough cookies to buy this");
        }
    }
    
    function MineAvailable(){
        if(score >= minePrice){
            document.getElementById("addmine").disabled = false;
            document.getElementById("minebox").style.opacity = "1";
        }
        else{
            document.getElementById("addmine").disabled = true;
            document.getElementById("minebox").style.opacity = "0.7";
        }
    }
    
    function Mine(){
        if(score >= minePrice){
            score = score - minePrice.toFixed(0);
            minePrice = minePrice * 1.1; 
            mineAmount = mineAmount + 1;
            mineMath = 100 * mineAmount * mineMultiplier;
            perSecond = cursorMath + grandmaMath + farmMath + mineMath;
            perSecondAnimate = 1000 / perSecond;
            persecondfield.innerHTML = "Per second: " + perSecond.toFixed(1);
            scorefield.innerHTML = score.toLocaleString("en") + " cookies";
            document.getElementById("mineamount").innerHTML = mineAmount;
            mineShownPrice = minePrice + 1;
            document.getElementById("mineprice").innerHTML = "Price: " + mineShownPrice.toFixed(0);
            document.getElementById("minemath").innerHTML = "Total cps: " + mineMath.toFixed(1);
        }
        else{
            alert("not enough cookies to buy this");
        }
    }
    
    /* All the upgrades */
    /* Cursor upgrades */
    function CursorUp1Available(){
        if(clicks >= 10 && cursorUpg1 == false){
            document.getElementById("cursorup1").style.display = "inline";
            if(score >= 50){
                document.getElementById("cursorup1").disabled = false;
            }
            else{
                document.getElementById("cursorup1").disabled = true;
            }
        }
        else{
            document.getElementById("cursorup1").style.display = "none";
        }
        
    }
    
    function CursorUp1(){
        cursorUpg1 = true;
        score = score - 50;
        cursorMultiplier = cursorMultiplier * 2;
        cursorMath = 0.1 * cursorAmount * cursorMultiplier;
        cursorCps = 0.1 * cursorMultiplier;
        perSecond = cursorMath + grandmaMath + farmMath + mineMath;
        perSecondAnimate = 1000 / perSecond;
        persecondfield.innerHTML = "Per second: " + perSecond.toFixed(1);
        scorefield.innerHTML = score.toFixed(0) + " cookies";
        document.getElementById("cursorup1").style.display = "none";
        document.getElementById("curmath").innerHTML = "Total cps: " + cursorMath.toFixed(1);
        document.getElementById("addcursor").title="A cursor that autoclicks for you for " + cursorCps + " cookies per second."
    }
    
    function CursorUp2Available(){
        if(cursorAmount >= 10 && cursorUpg2 == false){
            document.getElementById("cursorup2").style.display = "inline";
            if(score >= 200){
                document.getElementById("cursorup2").disabled = false;
            }
            else{
                document.getElementById("cursorup2").disabled = true;
            }
        }
        else{
            document.getElementById("cursorup2").style.display = "none";
        }
    }
    
    function CursorUp2(){
        cursorUpg2 = true;
        score = score - 200;
        cursorMultiplier = cursorMultiplier * 2;
        cursorMath = 0.1 * cursorAmount * cursorMultiplier;
        cursorCps = 0.1 * cursorMultiplier;
        perSecond = cursorMath + grandmaMath + farmMath + mineMath;
        perSecondAnimate = 1000 / perSecond;
        persecondfield.innerHTML = "Per second: " + perSecond.toFixed(1);
        document.getElementById("cursorup2").style.display = "none";
        scorefield.innerHTML = score.toFixed(0) + " cookies";
        document.getElementById("curmath").innerHTML = "Total cps: " + cursorMath.toFixed(1);
        document.getElementById("addcursor").title="A cursor that autoclicks for you for " + cursorCps + " cookies per second."
    }
    
    /* Grandma Upgrades */
    function GrandmaUp1Available(){
        if(grandmaAmount >= 10 && grandmaUpg1 == false){
            document.getElementById("grandmaup1").style.display = "inline";
            if(score >= 1000){
                document.getElementById("grandmaup1").disabled = false;
            }
            else{
                document.getElementById("grandmaup1").disabled = true;
            }
        }
        else{
            document.getElementById("grandmaup1").style.display = "none";
        }
        
    }
    
    function GrandmaUp1(){
        grandmaUpg1 = true;
        score = score - 1000;
        grandmaMultiplier = grandmaMultiplier * 2;
        grandmaMath = 1 * grandmaAmount * grandmaMultiplier;
        grandmaCps = 1 * grandmaMultiplier;
        perSecond = cursorMath + grandmaMath + farmMath + mineMath;
        perSecondAnimate = 1000 / perSecond;
        persecondfield.innerHTML = "Per second: " + perSecond.toFixed(1);
        scorefield.innerHTML = score.toFixed(0) + " cookies";
        document.getElementById("grandmaup1").style.display = "none";
        document.getElementById("gramath").innerHTML = "Total cps: " + grandmaMath.toFixed(1);
        document.getElementById("addgrandma").title="Grandma that bakes cookies for you for " + grandmaCps + " cookies per second."
    }
    
    
    
    function Available(){
        CursorAvailable();
        GrandmaAvailable();
        FarmAvailable();
        MineAvailable();
        
        CursorUp1Available();
        CursorUp2Available();
        GrandmaUp1Available();
        
        setTimeout(Available, 100);
    }
    
    /* Canvas */
    function resizeCanvas(){
        var canvs = document.getElementById("canvasid");
        canvs.width = window.innerWidth * 0.8;
        canvs.height = window.innerHeight;
        console.log("hello");
    }

    // get a refrence to the canvas and its context
    var canvas = document.getElementById("canvasid");
    var ctx = canvas.getContext("2d");

    // newly spawned objects start at Y=25
    var spawnLineY = -10;

    // spawn a new object every 1500ms
    var spawnRate = 10000;

    // set how fast the objects will fall
    var spawnRateOfDescent = 1.5;

    // when was the last object spawned
    var lastSpawn = -1;

    // this array holds all spawned object
    var objects = [];

    // save the starting time (used to calc elapsed time)
    var startTime = Date.now();

    // start animating
    animate();


function spawnRandomObject() {
    // create the new object
    var object = {
        // set x randomly but at least 15px off the canvas edges
        x: Math.random() * (canvas.width - 30) + 15,
        // set y to start on the line where objects are spawned
        y: spawnLineY,
    }

    // add the new object to the objects[] array
    objects.push(object);
}



function animate() {

    // get the elapsed time
    var time = Date.now();

    // see if its time to spawn a new object
    if(perSecond == 0){
        null;
    }else if(perSecond < 1){
        if (time > (lastSpawn + 10000)) {
            lastSpawn = time;
            spawnRandomObject();
        }
    } else if (perSecond < 10){
        if (time > (lastSpawn + 5000)) {
            lastSpawn = time;
            spawnRandomObject();
        }
    } else if (perSecond < 100){
        if (time > (lastSpawn + 1000)) {
            lastSpawn = time;
            spawnRandomObject();
        }
    }else if (perSecond < 1000){
        if (time > (lastSpawn + 500)) {
            lastSpawn = time;
            spawnRandomObject();
        }
    }else if (perSecond < 10000){
        if (time > (lastSpawn + 250)) {
            lastSpawn = time;
            spawnRandomObject();
        }
    }else if (perSecond < 100000){
        if (time > (lastSpawn + 100)) {
            lastSpawn = time;
            spawnRandomObject();
        }
    }else{
        if (time > (lastSpawn + 50)) {
            lastSpawn = time;
            spawnRandomObject();
        }
    }

    // request another animation frame
    requestAnimationFrame(animate);

    // clear the canvas so all objects can be 
    // redrawn in new positions
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw the line where new objects are spawned
    ctx.beginPath();
    ctx.moveTo(0, spawnLineY);
    ctx.lineTo(canvas.width, spawnLineY);
    ctx.stroke();

    // move each object down the canvas
    for (var i = 0; i < objects.length; i++) {
        var object = objects[i];
        object.y += spawnRateOfDescent;
        ctx.beginPath();
        ctx.arc(object.x, object.y, 30, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = "#84563c";
        ctx.fill();
    }

}
    
    function GoBack()
    {
        highscorefield.style.display = "none";
        namefield.style.display = "block";
        timerfield.innerHTML = timer;
        scorefield.innerHTML = 0;
        time = timer;
        score = 0;
    }
    
});