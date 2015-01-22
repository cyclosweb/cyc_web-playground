

//document.onkeypress = Tastendruck;
document.onkeyup = Tastendruck;

$(document).ready(function() {
    
    $('body').click(function() {
        reset();
        showEmpty();
    });

});

function Tastendruck(Ereignis)
{
    if(!Ereignis)
    {
        Ereignis = window.event;
    }
    
    myKey = Ereignis.keyCode;
    console.log('>>> '+myKey);
    
    if(myKey == 49)
    {
        showPrice(1);   
    }

    else if(myKey == 50)
    {
        showPrice(2);
    }

    else if(myKey == 51)
    {
        showPrice(3);
    }
    
    else if(myKey == 32)
    {
        reset();
        showEmpty();
    }

    else
    {
        reset();
        showSorry();
    }
}

function showEmpty()
{
    $('#emptyScreen').fadeIn(10);
}


function showSorry()
{
    $('#sorryScreen').fadeIn(10);
}

function showPrice(p)
{
    reset();
    $('#preis'+p).fadeIn(1000);

}

function reset()
{
    $('.preisScreen').fadeOut(10);
    $('#sorryScreen').fadeOut(10);
    $('#emptyScreen').fadeOut(10);
}