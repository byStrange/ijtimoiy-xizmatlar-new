let search_modal = document.querySelector(".search_nav1")
let navs = document.querySelector(".navin_block1")
let bars_btn = document.querySelector(".navbar-toggle ")
let items = document.querySelectorAll(".items")
let items_dscr = document.querySelectorAll(".items_describtions")
let len = items.length


for(let i = 0;i<len;i+=2){
	items[i].style = "opacity:0; transform:translateX(-40%); transition:all 0.4s;"
	items_dscr[i].style = "opacity:0; transform:translateY(30%); transition:all 0.4s;"
}

for(let z = 1; z<len;z+=2){
	items_dscr[z].style = "opacity:0; transform:translateY(30%); transition:all 0.4s;"
 items[z].style = "opacity:0; transform:translateX(40%); transition:all 0.3s;"

}



function showModal(){
	search_modal.classList = "search_nav1 search_nav1_show"
	navs.classList =  "navin_block1 navin_block1_close"
}
function closeModal(){
	search_modal.classList = "search_nav1 "
	navs.classList =  "navin_block1"
}
window.onload = ()=>{
document.querySelector('.header_section').style = "transform:translateX(0); transition:all 1s;" 
}





window.addEventListener("scroll",()=>{
const mediaQuery = window.matchMedia('(min-width:768px)')
let scroll = Math.ceil(window.scrollY)
function handleTabletChange(e) {

  if (e.matches) {

if(scroll >= 350){
		document.querySelector('.three_icons_main1').style = " opacity:1; transition:all 0.3s; transform:translateX(0%);"
		document.querySelector('.three_icons_main2').style = " opacity:1; transition:all 0.3s; transform:translateY(0%);"
		document.querySelector('.three_icons_main3').style = " opacity:1; transition:all 0.3s; transform:translateX(0%);"
		document.querySelector('.text_main_rotate').style = "transform:rotateX(0deg); transition:all 0.4s;"
	}
	else{
		document.querySelector('.three_icons_main1').style = "opacity:0; transition:all 0.3s; transform:translateX(-70%); "
		document.querySelector('.three_icons_main2').style = "opacity:0; transition:all 0.3s; transform:translateY(-50%); "
		document.querySelector('.three_icons_main3').style = "opacity:0; transition:all 0.3s; transform:translateX(70%); "
	}

	if(scroll >= 700){
		document.querySelector('.text_main_rotate').style = "transform:rotateX(0deg); transition:all 0.4s;"
	}
	else{
			document.querySelector('.text_main_rotate').style = "transform:rotateX(-90deg); transition:all 0.4s;"
	}

	if (scroll >= 950) {
		items[0].style = "opacity:1; transform:translateX(0); transition:all 0.4s;"
		items_dscr[0].style = "opacity:1; transform:translateY(0); transition:all 0.4s;"
	}
	else{
		items[0].style = "opacity:0; transform:translateX(-40%); transition:all 0.4s;"
		items_dscr[0].style = "opacity:0; transform:translateY(30%); transition:all 0.4s;"
	}


	if(scroll >= 1500){
		items[1].style = "opacity:1; transform:translateX(0); transition:all 0.4s;"
		items_dscr[1].style = "opacity:1; transform:translateY(0); transition:all 0.4s;"
	}
	else{
		items[1].style = "opacity:0; transform:translateX(40%); transition:all 0.4s;"
		items_dscr[1].style = "opacity:0; transform:translateY(30%); transition:all 0.4s;"
	}

if (scroll >= 2000) {
		items[2].style = "opacity:1; transform:translateX(0); transition:all 0.4s;"
		items_dscr[2].style = "opacity:1; transform:translateY(0); transition:all 0.4s;"

	}
	else{
		items[2].style = "opacity:0; transform:translateX(-40%); transition:all 0.4s;"
		items_dscr[2].style = "opacity:0; transform:translateY(30%); transition:all 0.4s;"

	}

	if (scroll >= 2500) {
		items[3].style = "opacity:1; transform:translateX(0); transition:all 0.4s;"
		items_dscr[3].style = "opacity:1; transform:translateY(0); transition:all 0.4s;"

	}
	else{
		items[3].style = "opacity:0; transform:translateX(40%); transition:all 0.4s;"
		items_dscr[3].style = "opacity:0; transform:translateY(30%); transition:all 0.4s;"

	}

	if (scroll >=3000) {
		document.getElementById("content_place").style = "opacity:1; transform:translateY(0%); transition:all 0.4s;"
	}
	else{
		document.getElementById("content_place").style = "opacity:0; transform:translateY(30%); transition:all 0.4s;"
	}

	if(scroll >= 3700){
		let anim_left = document.querySelectorAll(".anim_left")
		anim_left[0].style = "opacity:1; transform:translateX(0%); transition:all 0.4s;"
	}
	else{
		let anim_left = document.querySelectorAll(".anim_left")
		anim_left[0].style = "opacity:0; transform:translateX(-30%); transition:all 0.4s;"
	}

	if(scroll >= 4100){
    document.querySelector(".anim_right").style = "opacity:1; transform:translateX(0%); transition:all 0.4s;"
	}
	else{
    document.querySelector(".anim_right").style = "opacity:0; transform:translateX(30%); transition:all 0.4s;"
	}

	if(scroll >= 4500){
		let anim_left = document.querySelectorAll(".anim_left")
		anim_left[1].style = "opacity:1; transform:translateX(0%); transition:all 0.4s;"
	}
	else{
		let anim_left = document.querySelectorAll(".anim_left")
		anim_left[1].style = "opacity:0; transform:translateX(-30%); transition:all 0.4s;"
	}

if(scroll >= 5000){
	document.querySelector(".container_my3").style ="opacity:1; transform:translateY(0%); transition:all 0.4s;"
}
else{
	document.querySelector(".container_my3").style ="opacity:0; transform:translateY(20%); transition:all 0.4s;"
}



  }

  else{


if(scroll >= 100){
		document.querySelector('.three_icons_main1').style = " opacity:1; transition:all 0.3s; transform:translateX(0%);"
	}
	else{
		document.querySelector('.three_icons_main1').style = "opacity:0; transition:all 0.3s; transform:translateX(-70%); "
	}

	if(scroll >= 300){
		document.querySelector('.three_icons_main2').style = " opacity:1; transition:all 0.3s; transform:translateY(0%);"
	}
	else{
		document.querySelector('.three_icons_main2').style = "opacity:0; transition:all 0.3s; transform:translateY(-50%); "
	}
	if (scroll >= 450) {
		document.querySelector('.three_icons_main3').style = " opacity:1; transition:all 0.3s; transform:translateX(0%);"
	}
	else{
	document.querySelector('.three_icons_main3').style = "opacity:0; transition:all 0.3s; transform:translateX(70%); "
	}

	if(scroll >= 750){
		document.querySelector('.text_main_rotate').style = "transform:rotateX(0deg); transition:all 0.4s;"
	}
	else{
			document.querySelector('.text_main_rotate').style = "transform:rotateX(-90deg); transition:all 0.4s;"
	}



	if (scroll >= 1100) {items[0].style = "opacity:1; transform:translateX(0); transition:all 0.4s;"}
	else{items[0].style = "opacity:0; transform:translateX(-40%); transition:all 0.4s;"}

	if (scroll >= 1450) {items_dscr[0].style = "opacity:1; transform:translateY(0); transition:all 0.4s;"}
	else{items_dscr[0].style = "opacity:0; transform:translateY(30%); transition:all 0.4s;"}

	
	if(scroll >= 1800){items[1].style = "opacity:1; transform:translateX(0); transition:all 0.4s;"}
	else{items[1].style = "opacity:0; transform:translateX(40%); transition:all 0.4s;"}

	if (scroll >= 2200) {items_dscr[1].style = "opacity:1; transform:translateY(0); transition:all 0.4s;"}
	else{items_dscr[1].style = "opacity:0; transform:translateY(30%); transition:all 0.4s;"}

	if(scroll >= 2450){items[2].style = "opacity:1; transform:translateX(0); transition:all 0.4s;"}
	else{items[2].style = "opacity:0; transform:translateX(40%); transition:all 0.4s;"}

	if (scroll >= 2850) {items_dscr[2].style = "opacity:1; transform:translateY(0); transition:all 0.4s;"}
	else{items_dscr[2].style = "opacity:0; transform:translateY(30%); transition:all 0.4s;"}

	if(scroll >= 3200){items[3].style = "opacity:1; transform:translateX(0); transition:all 0.4s;"}
	else{items[3].style = "opacity:0; transform:translateX(40%); transition:all 0.4s;"}

	if (scroll >= 3500) {items_dscr[3].style = "opacity:1; transform:translateY(0); transition:all 0.4s;"}
	else{items_dscr[3].style = "opacity:0; transform:translateY(30%); transition:all 0.4s;"}

	if (scroll >= 3900) {document.getElementById("content_place").style = "opacity:1; transform:translateY(0%); transition:all 0.4s;"}
	else{document.getElementById("content_place").style = "opacity:0; transform:translateY(30%); transition:all 0.4s;"}


	if(scroll >=5300){
		let anim_left = document.querySelectorAll(".anim_left")
		anim_left[0].style = "opacity:1; transform:translateX(0%); transition:all 0.4s;"
	}
	else{
		let anim_left = document.querySelectorAll(".anim_left")
		anim_left[0].style = "opacity:0; transform:translateX(-30%); transition:all 0.4s;"
	}

	if(scroll >= 5800){
    document.querySelector(".anim_right").style = "opacity:1; transform:translateX(0%); transition:all 0.4s;"
	}
	else{
    document.querySelector(".anim_right").style = "opacity:0; transform:translateX(30%); transition:all 0.4s;"
	}

	if(scroll >= 6300){
		let anim_left = document.querySelectorAll(".anim_left")
		anim_left[1].style = "opacity:1; transform:translateX(0%); transition:all 0.4s;"
	}
	else{
		let anim_left = document.querySelectorAll(".anim_left")
		anim_left[1].style = "opacity:0; transform:translateX(-30%); transition:all 0.4s;"
	}

	if(scroll >= 6800){
	document.querySelector(".container_my3").style ="opacity:1; transform:translateY(0%); transition:all 0.4s;"
}
else{
	document.querySelector(".container_my3").style ="opacity:0; transform:translateY(20%); transition:all 0.4s;"
}

if(scroll >=8700){
	document.getElementById("footer").style ="opacity:1; transform:translateY(0%); transition:all 0.4s;"
}
else{
	document.getElementById("footer").style ="opacity:0; transform:translateY(30%); transition:all 0.4s;"

}




  }


}

mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery)
})

let counter_next = document.querySelector(".counter_next")
let counter_prew = document.querySelector(".counter_prew")
let num = 0

counter_next.addEventListener("click",()=>{
	num++
	document.querySelector(".counter_res").innerHTML = num 
 if(num >= 10){
 	num = 0
 }

})

counter_prew.addEventListener("click",()=>{
	num--
	document.querySelector(".counter_res").innerHTML = num 
  if(num <= 0 ){
  	num = 10
  }

})



// num = 0
// bars_btn.addEventListener('click',()=>{
//   num++
//   if(num >= 2){
//   	num = 0
//   }
//   if(num == 0){
//   	document.querySelector(".bg_video").style = "height:600px;"
//   	document.querySelector(".main").style = "margin-top:0px;"
//   }
//   else{
//   	document.querySelector(".bg_video").style = "height:790px; "
//   	document.querySelector(".main").style = "margin-top:190px;"
//   }
// })
