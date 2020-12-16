
function ripas() {
	
	let lParede = parseInt(document.querySelector('#larguraParede').value)
	let lRipa 	= parseInt(document.querySelector('#larguraRipa').value)
	let gap 		= parseInt(document.querySelector('#gap').value)
	let calcRipa = Math.round(lParede / (lRipa + gap))
	
	let qRipa 	= document.querySelector('#quantidadeRipas')
	qRipa.innerHTML = `Você vai precisar de aproximadamente <strong>${calcRipa}</strong> ripas.`
	qRipa.setAttribute('style', 'display: block;')
	
	return false
}
