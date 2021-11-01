	function max(el,n) {
	if(el) {
		if( el instanceof HTMLInputElement ) {
			el.onkeyup = function () {
				el.value = el.value.slice(0, n  || Number(n) )
			}
		}
	}
}
el = document.querySelector('#num');
	close = document.querySelector('#close');
	// new Cleave(el, {
	// 	blocks:[4,2,3,2,2],
	// 	prefix: '+998',
	// 	number: true
	// })
	function opener() {
		anime({
			targets:['.modal-bx', '.form-group'],
			translateX:  [function () {return anime.random(-1200,100)}, 0],
			translateY : [function () {return anime.random(-1300,100)},0],
			opacity : [0,1],
			delay: anime.stagger(150),
			easing: 'easeOutExpo'
		})
		document.querySelector('.modal-cont').style = 'background:rgba(0,0,0,.5);z-index:5'
	}
	 function closer() {
		anime({
			targets: ['.modal-bx', '.form-group'],
			translateX: [0,function () {return anime.random(-550,50)}],
			translateY: [0,function () {return anime.random(-550,50)}],
			opacity: 0
			
		})
		document.querySelector('.modal-cont').style = 'background:transparent;z-index:-5'
	}
closer()
// window.onmousedown = checkEvent 
// function checkEvent(e) {
// 	el = document.querySelector('.modal-cont')
// 	var event = e || window.event
// 	if(event.target == el) {
// 		closer()
// 	}
// }
new Cleave('#number', {
	number: true
})