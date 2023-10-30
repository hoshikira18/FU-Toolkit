
	if(window.location.href == "https://fap.fpt.edu.vn/Thongbao.aspx") {
		window.location.href = "https://fap.fpt.edu.vn/Student.aspx";
	}

    const selectEl = document.querySelector("#ctl00_mainContent_ddlCampus");

	if (selectEl.selectedIndex !== 1) {
		// change value of select to Hola
		selectEl.selectedIndex = 1;
		__doPostBack('ctl00$mainContent$ddlCampus','');
	} else {
		const loginBtn = document.querySelector("#ctl00_mainContent_btnLogin");

		// click button
		loginBtn.click();
	}


	if(window.location.href == "https://fap.fpt.edu.vn/Grade/StudentGrade.aspx/*") {
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
				console.log(weights[i].textContent)
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
		console.log(points);
		console.log(weightsValue);
        console.log(total);


        table[6].querySelectorAll("td").forEach((e)=>{
            if(e.parentNode.textContent.includes("Average") && e.parentNode.textContent.includes("Course total") && e.textContent.includes("0.0")) {
                e.textContent = total.toFixed(2)
            }
        })

	}
		

