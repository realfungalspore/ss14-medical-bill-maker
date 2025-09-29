var medications = {
	"Bicaridine":75,
	"Dexalin Plus":50,
	"Saline":20,
	"Dermaline":50,
	"Arithrazine":110,
	"Dylovene":50,
	"Bruizine":150,
	"Puncturase":150,
	"Lacerinol":150,
	"Leporazine":130,
	"Pyrazine":175,
	"Insuzine":180,
	"Sigynate":250,
	"Siderlac":375,
	"Phalanximine":300,
	"Oculine":200,
	"Tricordrazine":60,
	"Omnizine":700,
	"Cryoxadone":300,
	"Aloxadone":500,
	"Stelloxadone":600
} // per u

var topicals = {
	"Gauze":500,
	"Blood Pack":500,
	"Bruise Pack":1700,
	"Ointment":1700,
	"Medicated Suture":4000,
	"Regenerative Mesh":3500
} // per unit

/*var medipens = {
	"Emergency Medipen":{
		"Tranexamic Acid":20
	},
}*/

var med_amount_limit = 6
var topical_amount_limit = 5

var med_keys = Object.keys(medications)
var medications_section = document.getElementById("medications_section"); 
var price_settings_section = document.getElementById("pricesettings"); 
for(let i=0;i < med_keys.length;i++){
	
	// could be done a different way :)
	
	var this_very_medication = document.createElement("div")
	if(i%2==0){
		this_very_medication.classList.add("every_other_line")
	}
	medications_section.appendChild(this_very_medication)
	
	
	for(let r=1;r<(med_amount_limit + 1);r++){
		var radio_element = document.createElement("input")
		radio_element.type = "radio"
		radio_element.name = med_keys[i]
		radio_element.id = med_keys[i] + (5 * r) + "u"
		this_very_medication.appendChild(radio_element)
		
		var radio_label = document.createElement("label")
		radio_label.innerHTML = (5 * r) + "u"
		radio_label.setAttribute("for", med_keys[i] + (5 * r) + "u")
		this_very_medication.appendChild(radio_label)
	}
	
	/*
	var radio5u = document.createElement("input")
	radio5u.type = "radio"
	radio5u.name = med_keys[i]
	radio5u.id = med_keys[i] + "5u"
	this_very_medication.appendChild(radio5u)
	
	var radio5ulabel = document.createElement("label")
	radio5ulabel.innerHTML = "5u"
	radio5ulabel.setAttribute("for", med_keys[i] + "5u")
	this_very_medication.appendChild(radio5ulabel)

	
	var radio10u = document.createElement("input")
	radio10u.type = "radio"
	radio10u.name = med_keys[i]
	radio10u.id = med_keys[i] + "10u"
	this_very_medication.appendChild(radio10u)
	
	var radio10ulabel = document.createElement("label")
	radio10ulabel.innerHTML = "10u"
	radio10ulabel.setAttribute("for", med_keys[i] + "10u")
	this_very_medication.appendChild(radio10ulabel)

	
	var radio15u = document.createElement("input")
	radio15u.type = "radio"
	radio15u.name = med_keys[i]
	radio15u.id = med_keys[i] + "15u"
	this_very_medication.appendChild(radio15u)
	
	var radio15ulabel = document.createElement("label")
	radio15ulabel.innerHTML = "15u"
	radio15ulabel.setAttribute("for", med_keys[i] + "15u")
	this_very_medication.appendChild(radio15ulabel)


	var radio20u = document.createElement("input")
	radio20u.type = "radio"
	radio20u.name = med_keys[i]
	radio20u.id = med_keys[i] + "20u"
	this_very_medication.appendChild(radio20u)
	
	var radio20ulabel = document.createElement("label")
	radio20ulabel.innerHTML = "20u"
	radio20ulabel.setAttribute("for", med_keys[i] + "20u")
	this_very_medication.appendChild(radio20ulabel)
	*/

	this_very_medication.innerHTML += "........"

	var label = document.createElement("label")
	label.innerHTML = med_keys[i]
	label.for = med_keys[i]
	this_very_medication.appendChild(label)
	
	//medications_section.innerHTML += "<br>"
	
	// price settings section
	
	var setting_div = document.createElement("div")
	
	var setting_textbox = document.createElement("input")
	setting_textbox.type = "number"
	setting_textbox.size = "4"
	setting_textbox.med = med_keys[i]
	setting_textbox.value = medications[med_keys[i]] * 5
	setting_div.appendChild(setting_textbox)
	
	setting_textbox.addEventListener("input",(event) => {
		console.log(event)
		medications[event.target.med] = (event.target.value / 5)
	})
	
	var label = document.createElement("label")
	label.innerHTML = " " + med_keys[i]
	setting_div.appendChild(label)
	

	price_settings_section.appendChild(setting_div)
	
}

medications_section.appendChild(document.createElement("hr"))
medications_section.innerHTML += `<div>Number is per pack (usually a stack of 10), not per unit used</div>`

var topical_keys = Object.keys(topicals)
for(let i=0;i<topical_keys.length;i++){
	var topical_container = document.createElement("div")
	if(i%2==0){
		topical_container.classList.add("every_other_line")
	}
	
	for(let r=1;r<(topical_amount_limit + 1);r++){
		var radio_element = document.createElement("input")
		radio_element.type = "radio"
		radio_element.name = topical_keys[i]
		radio_element.id = topical_keys[i] + r
		topical_container.appendChild(radio_element)
		
		var radio_label = document.createElement("label")
		radio_label.innerHTML = r
		radio_label.setAttribute("for", topical_keys[i] + r)
		topical_container.appendChild(radio_label)
	}
	
	topical_container.innerHTML += "........"

	var label = document.createElement("label")
	label.innerHTML = topical_keys[i]
	label.for = topical_keys[i]
	topical_container.appendChild(label)
	
	medications_section.appendChild(topical_container)
	
}

function spaces(number){
	var output = ""
	for(let i = 0; i < number;i++){
		output += " "
	}
	return output
}

function submitForm() {
	const form = document.getElementById('genform')
	const drfield = form.elements['drname']
	const ptfield = form.elements['ptname']
	const iff = form.elements['vesselIFF']
	const spacetaxpercent = form.elements['spacetax']
	const stampsection = form.elements['stampsection']
	const frontiermode = form.elements['frontiermode']
	const revivalfee = form.elements['revivalfee']
	const copyalso = form.elements['copyalso']

	const output = document.getElementById("output"); 
	
	var meds = {}
	var tops = {}
	var subtotal = 0
	
	for(let i=0;i < med_keys.length;i++){
		var medication_name = med_keys[i]
		var radioButtons = form.elements[medication_name]
		if(radioButtons.value == "on"){
			
			meds[medication_name] = 5
			for(let j=0;j < radioButtons.length;j++){
				if(radioButtons[j].checked) {
					meds[medication_name] = 5 + (5 * j)
				}
			}

			subtotal += (meds[medication_name] * medications[medication_name])
		}
	}
	for(let i=0;i<topical_keys.length;i++){
		var topical_name = topical_keys[i]
		var radioButtons = form.elements[topical_name]
		
		if(radioButtons.value == "on"){
			
			tops[topical_name] = 1
			for(let j=0;j < radioButtons.length;j++){
				if(radioButtons[j].checked) {
					tops[topical_name] = 1 + j
				}
			}

			subtotal += (tops[topical_name] * topicals[topical_name])
		}
	}
	
	
	
	if(Object.keys(meds).length == 0 && Object.keys(tops).length == 0){
		return
	}
	
	
	
	output.innerHTML = ""
	if(!frontiermode.checked){
		output.innerHTML += `[color=white]░░░[/color][color=#5b97bc]██[/color][color=white]░░░[/color]    [head=3]Nanotrasen Medical Department [/head]
	[color=white]░[/color][color=#5b97bc]▐████▌[/color][color=white]░[/color]                      [color=#5b97bc][bold]Medical Invoice[/bold][/color]
	[color=white]░░░[/color][color=#5b97bc]██[/color][color=white]░░░[/color]                                                       [color=#aaa]Document MD-INV[/color]
	──────────────────────────────────────────
	Thank you for choosing Nanotrasen's medical department for your healthcare needs. The below is a summary regarding the charges you owe for your care.\n`
	} else {
		output.innerHTML += `[color=white]░░░[/color][color=#5b97bc]██[/color][color=white]░░░[/color]    [head=3]Frontier Medical Services [/head]
	[color=white]░[/color][color=#5b97bc]▐████▌[/color][color=white]░[/color]                      [color=#5b97bc][bold]Medical Invoice[/bold][/color]
	[color=white]░░░[/color][color=#5b97bc]██[/color][color=white]░░░[/color]                                                       [color=#aaa]Document MD-INV[/color]
	──────────────────────────────────────────
	Thank you for choosing our exclusive premium medical services for your healthcare needs. The below is a summary regarding the charges you owe for your care.\n`
	}
	var doctor_name = drfield.value
	var patient_name = ptfield.value
	var iff_name = iff.value
	if(doctor_name == ""){doctor_name = "Imogen Hanford"}
	if(patient_name == ""){patient_name = " NAME"}
	output.innerHTML += "\nDoctor: [color=#002AAF]" + doctor_name + "[/color]"
	output.innerHTML += "\nPatient: [color=#002AAF]" + patient_name + "[/color]"
	if(frontiermode.checked && !iff_name == ""){
		output.innerHTML += "\nVessel: [color=#002AAF]" + iff_name + "[/color]"
	}

	
	output.innerHTML += `\n──────────────────────────────────────────
[mono][bold]DESCRIPTION                                              AMOUNT[/bold]\n`
	//36 characters from start to the chr before "AMOUNT"
	var spaceAmount = 36
	var meds_keys = Object.keys(meds)
	for(let i=0;i<meds_keys.length;i++){
		var medication = meds_keys[i]
		var description = meds[medication] + "u " + medication.toUpperCase()
		var charge = (meds[medication] * medications[medication]).toFixed(2)
		
		var spaces_needed = spaceAmount - description.length - charge.length
		
		output.innerHTML += description + spaces(spaces_needed) + charge + "\n"
	}
	
	var tops_keys = Object.keys(tops)
	for(let i=0;i<tops_keys.length;i++){
		var medication = tops_keys[i]
		var description = tops[medication] + " STACK " + medication.toUpperCase()
		var charge = (tops[medication] * topicals[medication]).toFixed(2)
		
		var spaces_needed = spaceAmount - description.length - charge.length
		
		output.innerHTML += description + spaces(spaces_needed) + charge + "\n"
	}

	var spaces_needed = spaceAmount - 8 - (subtotal.toFixed(2)).length
		
	output.innerHTML += `SUBTOTAL` + spaces(spaces_needed) + subtotal.toFixed(2) + "\n"
	
	var total = 0
	
	if(revivalfee.value > 0){
		var revival_fee = Number(revivalfee.value)
		
		var spaces_needed = spaceAmount - 13 - revival_fee.toFixed(2).length
		output.innerHTML += `Revival Fee: ` + spaces(spaces_needed) + revival_fee.toFixed(2) + "\n"
		subtotal += revival_fee
		
	}
	
	if(spacetaxpercent.value > 0){
		output.innerHTML += `Space Tax (` + spacetaxpercent.value + `%)`
		subtotal = Math.ceil(subtotal + subtotal * (spacetaxpercent.value / 100))
		total = subtotal.toFixed(2) + " SPESOS"
	} else {
		subtotal = Math.ceil(subtotal)
		total = subtotal.toFixed(2) + " SPESOS"
	}
	var spaces_needed = spaceAmount - 3 - (total).length
		
	output.innerHTML += `\nTOTAL OWED` + spaces(spaces_needed) + total + "\n"
	
	
	output.innerHTML += `[/mono]\n\nPlease pay at your earliest convenience.`

	if(stampsection.checked){
		output.innerHTML += `\n\n                 [italic]STAMP BELOW     STAMP BELOW     STAMP BELOW[/italic]  
──────────────────────────────────────────`
	}
	
	if(copyalso.checked){
		 navigator.clipboard.writeText(output.innerHTML);
	}
	
	
	//reset stuff that we usually reset
	for(let i=0;i < med_keys.length;i++){
		var medication_name = med_keys[i]
		var radioButtons = form.elements[medication_name]
		for(let j=0;j < radioButtons.length;j++){
			radioButtons[j].checked = false
		}
	}
	for(let i=0;i < tops_keys.length;i++){
		var medication_name = tops_keys[i]
		var radioButtons = form.elements[medication_name]
		for(let j=0;j < radioButtons.length;j++){
			radioButtons[j].checked = false
		}
	}
	
	ptfield.value = ""
	
}
