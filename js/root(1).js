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
let container = document.createElement('div');
function createOpen() {
	container.className = "modal-cont";
	let html = `
	<div class="modal-bx box-mini" style="min-height:0;">
            <form class="form">
                <h4><span class="item-type"></span>Ariza tekshirish</h4>
                <div class="form-group">
					<div class="row">
						<div class="col-sm-6">
							<div class="form-group">
								<label for="pname">Ariza turi</label>
								<select class="form-control" required>
									<option disabled>Tanlang</option>
									<option>Sihatgoh uchun ariza</option>
									<option>Tibbiy buyum uchun ariza</option>
								</select>
							</div>
						</div>
						<div class="col-sm-6">
							<div class="form-group">
								<label for="series">Pasport seriyasi</label>
								<input type="submit" class="form-control btn btn-primary" id="submit" value="Ariza berish" required="">
							</div>
						</div>
					</div>
				</div>
                <span class="close-modal" tabindex="1" onclick="closee()">&times</span>
            </form>
        </div>`
		container.innerHTML = html;
		document.body.appendChild(container);
		anime({
			targets:['.modal-bx.box-mini', '.modal-box.box-mini .form-group'],
			translateX:  [function () {return anime.random(-1200,100)}, 0],
			translateY : [function () {return anime.random(-1300,100)},0],
			opacity : [0,1],
			delay: anime.stagger(150),
			easing: 'easeOutExpo'
		})
		document.querySelector('.modal-bx.box-mini').parentElement.style = 'background:rgba(0,0,0,.5);z-index:5'
}

function closee() {
	anime({
		targets: ['.modal-bx.box-mini', '.modal-bx.box-mini.form-group'],
		translateX: [0,function () {return anime.random(-550,50)}],
		translateY: [0,function () {return anime.random(-550,50)}],
		opacity: 0
	})
		document.querySelector('.modal-bx.box-mini').parentElement.style = 'background:transparent;z-index:-5'
}
