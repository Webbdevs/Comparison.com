
function searchIt()
{
	let allText = document.querySelectorAll(".texts")
	let searchTxt = document.getElementById('search-box')
	for(let element of allText)
	{
		element.style.backgroundColor = "#D8D8D8"
		if(element.innerText.includes(searchTxt.value))
		{
			
			console.log('ss')
			element.style.backgroundColor = "limegreen"
			element.scrollIntoView()
		}
	}
}