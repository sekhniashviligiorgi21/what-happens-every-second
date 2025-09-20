let seconds=0
let child=0
let iphone=0
let lightning=0
let tree=0
let coca=0
let water=0
let msg=0
let hrt=0
const time = document.getElementById("time")
//--------------------------timer function----------------------------------
function updateTime(){
    if (seconds==1){
        time.innerText="It's been " + seconds + " second"
    }
    else {
        time.innerText="It's been " + seconds + " seconds"
    }
}
function timer(){
    updateTime()
    setInterval(()=>{
        seconds ++
        updateTime()
    }, 1000)
}

timer()
//-------------------------children function------------------------------------
function updatechild(){
    document.getElementById("children").innerText = child + " children were born."}
function childfun(){
    updatechild()
    setInterval(()=>{
        child++
        updatechild()
    }, 250)
}
childfun()
//-----------------------------iphones sold--------------------------------------
function updateiphone(){
    document.getElementById("iphone").innerText = iphone + " iPhones were sold."}
function iphones(){
    updateiphone()
    setInterval(()=>{
        iphone++
        updateiphone()
    }, 140)
}
iphones()
//-----------------------------lightning strikes----------------------------------
function updatelightning(){
    document.getElementById("lightning-strike").innerText = "There were " + lightning +" lightning strikes on Earth"}
function lightning1(){
    updatelightning()
    setInterval(()=>{
        lightning+=5
        updatelightning()
    }, 50)
}
lightning1()
//-----------------------------trees cut-------------------------------------------
function updatetree(){
    document.getElementById("tree").innerText = tree.toLocaleString() + " trees were cut down."}
function trees(){
    updatetree()
    setInterval(()=>{
        tree+=25
        updatetree()
    }, 50)
}
trees()
//------------------------------coca-cola sold---------------------------------------
function updatecocacola(){
    document.getElementById("cocacola").innerText = coca.toLocaleString() + " bottles of Coca-Cola were sold."}
function cokes(){
    updatecocacola()
    setInterval(()=>{
        coca+=1113
        updatecocacola()
    }, 50)
}
cokes()
//-----------------------------water consumed---------------------------------------
function updatewater(){
    document.getElementById("water").innerText = water.toLocaleString() + " gallons of water were drank."}
function waters(){
    updatewater()
    setInterval(()=>{
        water+=3112
        updatewater()
    }, 50)
}
waters()
//-------------------------------messages sent------------------------------------------
function updatemessage(){
    document.getElementById("message").innerText = msg.toLocaleString() + " messages were sent across all platforms."}
function msgs(){
    updatemessage()
    setInterval(()=>{
        msg+=190243
        updatemessage()
    }, 50)
}
msgs()
//-------------------------------heart beats-------------------------------------------
function updateheartbeat(){
    document.getElementById("heartbeat").innerText = "There were " + hrt.toLocaleString() + " human heartbeats worldwide."}
function beat(){
    updateheartbeat()
    setInterval(()=>{
        hrt+=471916667
        updateheartbeat()
    }, 50)
}
beat()