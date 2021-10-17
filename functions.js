function changeBackgroundColor()
{
	var colorNum = localStorage.getItem("bgcolor");
	if(colorNum == 1)
	{
		localStorage.setItem("bgcolor", 0);
		document.body.style.backgroundColor = "#113E3D";
	}
	else
	{
		localStorage.setItem("bgcolor", 1);
		document.body.style.backgroundColor = "#4DC9C4";
	}
}

window.onload = function()
{
	var color = localStorage.getItem("bgcolor");
	if(color === null)
	{
		localStorage.setItem("bgcolor", 1);
		document.body.style.backgroundColor = "#4DC9C4";
	}
	else
	{
		if(color == 1)
		{
			document.body.style.backgroundColor = "#4DC9C4";
		}
		else
		{
			document.body.style.backgroundColor = "#113E3D";
		}
	}
}