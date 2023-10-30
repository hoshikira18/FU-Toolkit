const table = document.querySelectorAll("table")
		const weights = table[6].querySelectorAll("td")
		const points = [];
		const weightsValue = [];
		for(let i = 0; i < weights.length-1; i++) {
			let point="";
			let weightValue="";
			if(weights[i].textContent.includes("%") && !weights[i].parentNode.textContent.includes("Total")){
				let pos = weights[i].parentNode.textContent.search("%")
				for(let j = pos+1; j < weights[i].parentNode.textContent.length; j++) {
					point += weights[i].parentNode.textContent[j]
				}
				for(let j = 0; j < weights[i].textContent.search(" %"); j++) {
					weightValue += weights[i].textContent[j]
				}
                weightsValue.push(Number(weightValue))

			if(point != "" && weightValue != ""){
				points.push(Number(point))
				
			}
			else
				points.push(0)
			}
		}
        let total = 0;
        for(let i = 0; i < points.length; i++) {
            total += points[i]*weightsValue[i]/100
        }



        table[6].querySelectorAll("td").forEach((e)=>{
            if(e.parentNode.textContent.includes("Average") && e.parentNode.textContent.includes("Course total") && e.textContent.includes("0.0")) {
                e.textContent = total.toFixed(2)
            }
        })

