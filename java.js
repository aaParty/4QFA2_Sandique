var n1, n2;

function checking ()
{
    if ((n1 >= 2 && n1 <= 10 && n2 >= 2 && n2 <= 10) == false)
    {
        return false;
    }
}

function computing ()
{
    let z = "";

    for (x = 1; x <= n1; x++)
    {
        z = z + '<tr>';

        for (y = 1; y <= n2; y++)
        {
            z = z + '<td>' + x*y + '</td>';
        }

        z = '</tr>' + z;
    }
    
    document.getElementById("table").innerHTML = z;
}

function assigning ()
{
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;

    if (checking () == false)
    {
        alert ("Please enter numbers between 2 and 10.")
        return false;
    }

    computing ();
    return false;
}