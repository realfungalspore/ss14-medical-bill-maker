var medications = {
	"Bicaridine":15,
	"Dexalin Plus":10,
	"Saline":4,
	"Dermaline":10,
	"Arithrazine":22,
	"Dylovene":10,
	"Bruizine":30,
	"Puncturase":30,
	"Lacerinol":30,
	"Leporazine":26,
	"Pyrazine":35,
	"Insuzine":36,
	"Sigynate":50,
	"Siderlac":75,
	"Phalanximine":60,
	"Oculine":40,
	"Tricordrazine":12,
	"Omnizine":100,
	"Ambuzol":20,
	"Ambuzol Plus":120
} // per u

var topicals = {
	"Gauze":5,
	"Blood Pack":8,
	"Bruise Pack":20,
	"Ointment":20,
	"Medicated Suture":50,
	"Regenerative Mesh":50
} // per unit

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
	const spacetaxpercent = form.elements['spacetax']
	const stampsection = form.elements['stampsection']
	const frontiermode = form.elements['frontiermode']
	const copyalso = form.elements['copyalso']

	const output = document.getElementById("output"); 
	
	var meds = {}
	var subtotal = 0
	
	for(let i=0;i < med_keys.length;i++){
		var medication_name = med_keys[i]
		var radioButtons = form.elements[medication_name]
		if(radioButtons.value == "on"){
			if(radioButtons[0].checked) {
				meds[medication_name] = 5
			} else if(radioButtons[1].checked) {
				meds[medication_name] = 10
			} else if(radioButtons[2].checked) {
				meds[medication_name] = 15
			} else {
				meds[medication_name] = 20
			}
			subtotal += (meds[medication_name] * medications[medication_name])
		}
	}
	if(Object.keys(meds).length == 0){
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
	if(doctor_name == ""){doctor_name = "Imogen Hanford"}
	if(patient_name == ""){patient_name = " NAME"}
	output.innerHTML += "\nDoctor: [color=#002AAF]" + doctor_name + "[/color]"
	output.innerHTML += "\nPatient: [color=#002AAF]" + patient_name + "[/color]"

	
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

	var spaces_needed = spaceAmount - 8 - (subtotal.toFixed(2)).length
		
	output.innerHTML += `SUBTOTAL` + spaces(spaces_needed) + subtotal.toFixed(2) + "\n"
	
	var total = 0
	
	if(spacetaxpercent.value > 0){
		output.innerHTML += "Space Tax (" + spacetaxpercent.value + "%)"
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
		radioButtons[0].checked = false
		radioButtons[1].checked = false
		radioButtons[2].checked = false
		radioButtons[3].checked = false
	}
	ptfield.value = ""
	
}
