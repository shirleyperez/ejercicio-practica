function convertirCelsius()
{
    var x;
    if (convertir == "C") 
    {
        x = document.getElementById("Celsius").value * 9 / 5 + 32;
        document.getElementById("Fahrenheit").value = Math.round(x);
    } else 
{
        x = (document.getElementById("Fahrenheit").value -32) * 5 / 9;
        document.getElementById("Celsius").value = Math.round(x);
}
}