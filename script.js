window.onload = function ()
{   var x1;
    var x2;
    for(x1=1;x1<10;x1++)
    {
        for(x2=1;x2<10;x2++)
        {
            document.getElementById("r"+x1+""+x2).classList="hidden";
        }

    }
}

function generateRandom(min, max,...exclude) 
{
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    var x;
    for (x=0;x<exclude.length;x++)
    {
        if (num === exclude [x])
             num = generateRandom(min,max,...exclude);
        else
            continue;
    }
    return num;
}
function doall(num)
{

    var x1;
    var x2;
    document.getElementById("selected").innerText = num + "x" + num;

    for (x1 = num+1;x1<10;x1++)
    {   
       for(x2 = 1; x2<10; x2++)
        document.getElementById("r"+x1+""+x2).classList="hidden";
    }
    for(x1=1;x1<=num;x1++)
    {
        for(x2 = 3;x2<10;x2++)
        {
            document.getElementById("r"+x1+""+x2).classList="hidden";
        }
    }
    for (x1 = 1;x1<=num;x1++)
    {   
       for(x2 = 1; x2<=num; x2++)
        document.getElementById("r"+x1+""+x2).classList.remove("hidden");
    }
    var exclude = new Array(num*num).fill(0);
    var x;
    for(x=0;x<exclude.length;x++)
    {
        exclude[x] = generateRandom(1,num*num,...exclude);
    }
    var x33 =0 ;
    for (x1 = 1;x1<=num;x1++)
    {   
       for(x2 = 1; x2<=num; x2++)
        {
            document.getElementById("r"+x1+""+x2).innerText = exclude[x33];
            x33++;
        }
    }


}

let num ;

document.getElementById("number").onchange = function () 
{
    num = parseInt(document.getElementById("number").value);
    if(num<2 ||num>9)
        alert("Enter a valid number");
      else
        doall(num);

    document.getElementById("number").value = ""; 
}


function checkwinner ()
{
    var yz;
    if(num === 2)
    {   
        var numbers1 = document.getElementById("row1").innerText.match(/(\d[\d\.]*)/g);
        var numbers2 = document.getElementById("row2").innerText.match(/(\d[\d\.]*)/g);
        for (yz = 0 ; yz<numbers1.length;yz++)
            {
                if(numbers1[yz] == 1 && numbers1[yz+1] == 2 && numbers2[yz] == 3 && numbers2[yz+1] == 4)
                    {
                        winner();
                    }
            }
    }
    else if(num === 3)
    {
        var numbers1 = document.getElementById("row1").innerText.match(/(\d[\d\.]*)/g);
        var numbers2 = document.getElementById("row2").innerText.match(/(\d[\d\.]*)/g);
        var numbers3 = document.getElementById("row3").innerText.match(/(\d[\d\.]*)/g);
        for (yz = 0 ; yz<numbers1.length;yz++)
        {
            if(numbers1[yz] == 1 && numbers1[yz+1] == 2 && numbers1[yz+2] == 3 && numbers2[yz] == 4 && numbers2[yz+1] == 5 && numbers2[yz+2] == 6 && numbers3[yz] == 7 && numbers3[yz+1] == 8 && numbers3[yz+2] == 9 )
            {
                winner();
            }
        }
    }
    else if(num === 4)
    {
        var numbers1 = document.getElementById("row1").innerText.match(/(\d[\d\.]*)/g);
        var numbers2 = document.getElementById("row2").innerText.match(/(\d[\d\.]*)/g);
        var numbers3 = document.getElementById("row3").innerText.match(/(\d[\d\.]*)/g);
        var numbers4 = document.getElementById("row4").innerText.match(/(\d[\d\.]*)/g);
        for (yz = 0 ; yz<numbers1.length;yz++)
        {
            if(numbers1[yz] == 1 && numbers1[yz+1] == 2 && numbers1[yz+2] == 3 && numbers1[yz+3] == 4 )
            {
                if(numbers2[yz] == 5 && numbers2[yz+1] == 6 && numbers2[yz+2] == 7 && numbers2[yz+3] == 8)
                {
                    if(numbers3[yz] == 9 && numbers3[yz+1] == 10 && numbers3[yz+2] == 11 && numbers3[yz+3] == 12)
                    {
                        if(numbers4[yz] == 13 && numbers4[yz+1] == 14 && numbers4[yz+2] == 15 && numbers4[yz+3] == 16)
                            {
                                 winner();
                            }      
                    }
                }    
            }
        }
    }


    else if(num === 5)
    {
        var numbers1 = document.getElementById("row1").innerText.match(/(\d[\d\.]*)/g);
        var numbers2 = document.getElementById("row2").innerText.match(/(\d[\d\.]*)/g);
        var numbers3 = document.getElementById("row3").innerText.match(/(\d[\d\.]*)/g);
        var numbers4 = document.getElementById("row4").innerText.match(/(\d[\d\.]*)/g);
        var numbers5 = document.getElementById("row5").innerText.match(/(\d[\d\.]*)/g);
        for (yz = 0 ; yz<numbers1.length;yz++)
        {
            if(numbers1[yz] == 1 && numbers1[yz+1] == 2 && numbers1[yz+2] == 3 && numbers1[yz+3] == 4 && numbers1[yz+4] == 5 )
            {
                if(numbers2[yz] == 6 && numbers2[yz+1] == 7 && numbers2[yz+2] == 8 && numbers2[yz+3] == 9 && numbers1[yz+4] == 10 )
                {
                    if(numbers3[yz] == 11 && numbers3[yz+1] == 12 && numbers3[yz+2] == 13 && numbers3[yz+3] == 14 && numbers1[yz+4] == 15 )
                    {
                        if(numbers4[yz] == 16 && numbers4[yz+1] == 17 && numbers4[yz+2] == 18 && numbers4[yz+3] == 19 && numbers1[yz+4] == 20 )
                            {
                                if(numbers5[yz] == 21 && numbers5[yz+1] == 22 && numbers5[yz+2] == 23 && numbers5[yz+3] == 24 && numbers1[yz+4] == 25 )
                                {
                                     winner();
                                }
                            }      
                    }
                }    
            }
        }
    }

    else if(num === 6)
    {
        var numbers1 = document.getElementById("row1").innerText.match(/(\d[\d\.]*)/g);
        var numbers2 = document.getElementById("row2").innerText.match(/(\d[\d\.]*)/g);
        var numbers3 = document.getElementById("row3").innerText.match(/(\d[\d\.]*)/g);
        var numbers4 = document.getElementById("row4").innerText.match(/(\d[\d\.]*)/g);
        var numbers5 = document.getElementById("row5").innerText.match(/(\d[\d\.]*)/g);
        var numbers6 = document.getElementById("row6").innerText.match(/(\d[\d\.]*)/g);
        for (yz = 0 ; yz<numbers1.length;yz++)
        {
            if(numbers1[yz] == 1 && numbers1[yz+1] == 2 && numbers1[yz+2] == 3 && numbers1[yz+3] == 4 && numbers1[yz+4] == 5 && numbers1[yz+5] == 6 )
            {
                if(numbers2[yz] == 7 && numbers2[yz+1] == 8 && numbers2[yz+2] == 9 && numbers2[yz+3] == 10 && numbers2[yz+4] == 11 && numbers2[yz+5] == 12 )
                {
                    if(numbers3[yz] == 13 && numbers3[yz+1] == 14 && numbers3[yz+2] == 15 && numbers3[yz+3] == 16 && numbers3[yz+4] == 17 && numbers3[yz+5] == 18)
                    {
                        if(numbers4[yz] == 19 && numbers4[yz+1] == 20 && numbers4[yz+2] == 21 && numbers4[yz+3] == 22 && numbers4[yz+4] == 23 && numbers4[yz+5] == 24)
                            {
                                if(numbers5[yz] == 25 && numbers5[yz+1] == 26 && numbers5[yz+2] == 27 && numbers5[yz+3] == 28 && numbers5[yz+4] == 29 && numbers5[yz+5] == 30)
                                {
                                    if(numbers6[yz] == 31 && numbers6[yz+1] == 32 && numbers6[yz+2] == 33 && numbers6[yz+3] == 34 && numbers6[yz+4] == 35 && numbers6[yz+5] == 36)
                                    {
                                         winner();
                                    }
                                }
                            }      
                    }
                }    
            }
        }
    }
    else if(num === 7)
    {
        var numbers1 = document.getElementById("row1").innerText.match(/(\d[\d\.]*)/g);
        var numbers2 = document.getElementById("row2").innerText.match(/(\d[\d\.]*)/g);
        var numbers3 = document.getElementById("row3").innerText.match(/(\d[\d\.]*)/g);
        var numbers4 = document.getElementById("row4").innerText.match(/(\d[\d\.]*)/g);
        var numbers5 = document.getElementById("row5").innerText.match(/(\d[\d\.]*)/g);
        var numbers6 = document.getElementById("row6").innerText.match(/(\d[\d\.]*)/g);
        var numbers7 = document.getElementById("row7").innerText.match(/(\d[\d\.]*)/g);
        for (yz = 0 ; yz<numbers1.length;yz++)
        {
            if(numbers1[yz] == 1 && numbers1[yz+1] == 2 && numbers1[yz+2] == 3 && numbers1[yz+3] == 4 && numbers1[yz+4] == 5 && numbers1[yz+5] == 6 && numbers1[yz+6] == 7 )
            {
                if(numbers2[yz] == 8 && numbers2[yz+1] == 9 && numbers2[yz+2] == 10 && numbers2[yz+3] == 11 && numbers2[yz+4] == 12 && numbers2[yz+5] == 13 && numbers2[yz+6] == 14 )
                {
                    if(numbers3[yz] == 15 && numbers3[yz+1] == 16 && numbers3[yz+2] == 17 && numbers3[yz+3] == 18 && numbers3[yz+4] == 19 && numbers3[yz+5] == 20 && numbers3[yz+6] == 21)
                    {
                        if(numbers4[yz] == 22 && numbers4[yz+1] == 23 && numbers4[yz+2] == 24 && numbers4[yz+3] == 25 && numbers4[yz+4] == 26 && numbers4[yz+5] == 27 && numbers4[yz+6] == 28)
                            {
                                if(numbers5[yz] == 29 && numbers5[yz+1] == 30 && numbers5[yz+2] == 31 && numbers5[yz+3] == 32 && numbers5[yz+4] == 33 && numbers5[yz+5] == 34 && numbers5[yz+6] == 35)
                                {
                                    if(numbers6[yz] == 36 && numbers6[yz+1] == 37 && numbers6[yz+2] == 38 && numbers6[yz+3] == 39 && numbers6[yz+4] == 40 && numbers6[yz+5] == 41 && numbers6[yz+6] == 42)
                                    {
                                        if(numbers7[yz] == 43 && numbers7[yz+1] == 44 && numbers7[yz+2] == 45 && numbers7[yz+3] == 46 && numbers7[yz+4] == 47 && numbers7[yz+5] == 48 && numbers7[yz+6] == 49)
                                        {
                                             winner();
                                        }
                                    }
                                }
                            }      
                    }
                }    
            }
        }
    }
    else if(num === 8)
    {
        var numbers1 = document.getElementById("row1").innerText.match(/(\d[\d\.]*)/g);
        var numbers2 = document.getElementById("row2").innerText.match(/(\d[\d\.]*)/g);
        var numbers3 = document.getElementById("row3").innerText.match(/(\d[\d\.]*)/g);
        var numbers4 = document.getElementById("row4").innerText.match(/(\d[\d\.]*)/g);
        var numbers5 = document.getElementById("row5").innerText.match(/(\d[\d\.]*)/g);
        var numbers6 = document.getElementById("row6").innerText.match(/(\d[\d\.]*)/g);
        var numbers7 = document.getElementById("row7").innerText.match(/(\d[\d\.]*)/g);
        var numbers8 = document.getElementById("row8").innerText.match(/(\d[\d\.]*)/g);
        for (yz = 0 ; yz<numbers1.length;yz++)
        {
            if(numbers1[yz] == 1 && numbers1[yz+1] == 2 && numbers1[yz+2] == 3 && numbers1[yz+3] == 4 && numbers1[yz+4] == 5 && numbers1[yz+5] == 6 && numbers1[yz+6] == 7 && numbers1[yz+7] == 8  )
            {
                if(numbers2[yz] == 9 && numbers2[yz+1] == 10 && numbers2[yz+2] == 11 && numbers2[yz+3] == 12 && numbers2[yz+4] == 13 && numbers2[yz+5] == 14 && numbers2[yz+6] == 15 && numbers2[yz+7] == 16 )
                {
                    if(numbers3[yz] == 17 && numbers3[yz+1] == 18 && numbers3[yz+2] == 19 && numbers3[yz+3] == 20 && numbers3[yz+4] == 21 && numbers3[yz+5] == 22 && numbers3[yz+6] == 23 && numbers3[yz+7] == 24)
                    {
                        if(numbers4[yz] == 25 && numbers4[yz+1] == 26 && numbers4[yz+2] == 27 && numbers4[yz+3] == 28 && numbers4[yz+4] == 29 && numbers4[yz+5] == 30 && numbers4[yz+6] == 31 && numbers4[yz+7] == 32)
                            {
                                if(numbers5[yz] == 33 && numbers5[yz+1] == 34 && numbers5[yz+2] == 35 && numbers5[yz+3] == 36 && numbers5[yz+4] == 37 && numbers5[yz+5] == 38 && numbers5[yz+6] == 39 && numbers5[yz+7] == 40)
                                {
                                    if(numbers6[yz] == 41 && numbers6[yz+1] == 42 && numbers6[yz+2] == 43 && numbers6[yz+3] == 44 && numbers6[yz+4] == 45 && numbers6[yz+5] == 46 && numbers6[yz+6] == 47 && numbers6[yz+7] == 48)
                                    {
                                        if(numbers7[yz] == 49 && numbers7[yz+1] == 50 && numbers7[yz+2] == 51 && numbers7[yz+3] == 52 && numbers7[yz+4] == 53 && numbers7[yz+5] == 54 && numbers7[yz+6] == 55 && numbers7[yz+7] == 56)
                                        {
                                            if(numbers8[yz] == 57 && numbers8[yz+1] == 58 && numbers8[yz+2] == 59 && numbers8[yz+3] == 60 && numbers8[yz+4] == 61 && numbers8[yz+5] == 62 && numbers8[yz+6] == 63 && numbers8[yz+7] == 64)
                                            {
                                                 winner();
                                            }
                                        }
                                    }
                                }
                            }      
                    }
                }    
            }
        }
    }
    else if(num === 9)
    {
        var numbers1 = document.getElementById("row1").innerText.match(/(\d[\d\.]*)/g);
        var numbers2 = document.getElementById("row2").innerText.match(/(\d[\d\.]*)/g);
        var numbers3 = document.getElementById("row3").innerText.match(/(\d[\d\.]*)/g);
        var numbers4 = document.getElementById("row4").innerText.match(/(\d[\d\.]*)/g);
        var numbers5 = document.getElementById("row5").innerText.match(/(\d[\d\.]*)/g);
        var numbers6 = document.getElementById("row6").innerText.match(/(\d[\d\.]*)/g);
        var numbers7 = document.getElementById("row7").innerText.match(/(\d[\d\.]*)/g);
        var numbers8 = document.getElementById("row8").innerText.match(/(\d[\d\.]*)/g);
        var numbers9 = document.getElementById("row9").innerText.match(/(\d[\d\.]*)/g);
        for (yz = 0 ; yz<numbers1.length;yz++)
        {
            if(numbers1[yz] == 1 && numbers1[yz+1] == 2 && numbers1[yz+2] == 3 && numbers1[yz+3] == 4 && numbers1[yz+4] == 5 && numbers1[yz+5] == 6 && numbers1[yz+6] == 7 && numbers1[yz+7] == 8 && numbers1[yz+8] == 9  )
            {
                if(numbers2[yz] == 10 && numbers2[yz+1] == 11 && numbers2[yz+2] == 12 && numbers2[yz+3] == 13 && numbers2[yz+4] == 14 && numbers2[yz+5] == 15 && numbers2[yz+6] == 16 && numbers2[yz+7] == 17 && numbers2[yz+8] == 18 )
                {
                    if(numbers3[yz] == 19 && numbers3[yz+1] == 20 && numbers3[yz+2] == 21 && numbers3[yz+3] == 22 && numbers3[yz+4] == 23 && numbers3[yz+5] == 24 && numbers3[yz+6] == 25 && numbers3[yz+7] == 26 && numbers3[yz+8] == 27)
                    {
                        if(numbers4[yz] == 28 && numbers4[yz+1] == 29 && numbers4[yz+2] == 30 && numbers4[yz+3] == 31 && numbers4[yz+4] == 32 && numbers4[yz+5] == 33 && numbers4[yz+6] == 34 && numbers4[yz+7] == 35 && numbers4[yz+8] == 36)
                            {
                                if(numbers5[yz] == 37 && numbers5[yz+1] == 38 && numbers5[yz+2] == 39 && numbers5[yz+3] == 40 && numbers5[yz+4] == 41 && numbers5[yz+5] == 42 && numbers5[yz+6] == 43 && numbers5[yz+7] == 44 && numbers5[yz+8] == 45)
                                {
                                    if(numbers6[yz] == 46 && numbers6[yz+1] == 47 && numbers6[yz+2] == 48 && numbers6[yz+3] == 49 && numbers6[yz+4] == 50 && numbers6[yz+5] == 51 && numbers6[yz+6] == 52 && numbers6[yz+7] == 53 && numbers6[yz+8] == 54)
                                    {
                                        if(numbers7[yz] == 55 && numbers7[yz+1] == 56 && numbers7[yz+2] == 57 && numbers7[yz+3] == 58 && numbers7[yz+4] == 59 && numbers7[yz+5] == 60 && numbers7[yz+6] == 61 && numbers7[yz+7] == 62 && numbers7[yz+8] == 63)
                                        {
                                            if(numbers8[yz] == 64 && numbers8[yz+1] == 65 && numbers8[yz+2] == 66 && numbers8[yz+3] == 67 && numbers8[yz+4] == 68 && numbers8[yz+5] == 69 && numbers8[yz+6] == 70 && numbers8[yz+7] == 71 && numbers8[yz+8] == 72)
                                            {
                                                if(numbers9[yz] == 73 && numbers9[yz+1] == 74 && numbers9[yz+2] == 75 && numbers9[yz+3] == 76 && numbers9[yz+4] == 77 && numbers9[yz+5] == 78 && numbers9[yz+6] == 79 && numbers9[yz+7] == 80 && numbers9[yz+8] == 81)
                                            {
                                                 winner();
                                            }
                                            }
                                        }
                                    }
                                }
                            }      
                    }
                }    
            }
        }
    }
    

    

}

function winner()
{
    window.location.href = "/onsuccess.html";
}


let dragindex=0;
let dropindex=0;
let clone="";

function allowDrop(ev) {
    ev.preventDefault();

}

function drag(ev) {
    
    ev.dataTransfer.setData("text", ev.target.id);
    
}

function drop(ev) {

    ev.preventDefault();
    var src = document.getElementById(ev.dataTransfer.getData("text"));

    var srcParent = src.parentNode;
    var tgt = ev.currentTarget.firstElementChild;

    ev.currentTarget.replaceChild(src, tgt);
    srcParent.appendChild(tgt);
    checkwinner();
}
