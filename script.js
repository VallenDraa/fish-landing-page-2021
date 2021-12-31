const hamburger = document.querySelector(".fa-bars")
const x = document.querySelector(".fa-times")
const menu = document.querySelector(".menu")

hamburger.addEventListener("click", function(){
    menu.classList.toggle("menu")
})

x.addEventListener("click", function(){
    menu.classList.toggle("menu")
})


// add new choices of the week

// const choices = {
//     title: "test",
//     shortDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, excepturi.",
//     characteristics: [1,2,3]
// }

// const target = document.querySelector(".swiper-wrapper")

// let content = ` 
// <!--added through javascript-->
// <div class="swiper-slide text-center bg-red-300 grid grid-cols-1 2xl:grid-cols-2 px-10 lg:px-24 xl:px-32 2xl:px-40 py-32 gap-5 swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="0" style="width: 1135px;" role="group" aria-label="1 / 3">
//     <div class="text-center 2xl:text-justify flex flex-col justify-around order-2 2xl:order-none">
//         <h3 class=" text-3xl md:text-5xl mb-5">${choices.title}</h3>
//         <p class="mx-auto 2xl:m-0 mb-7 xl:text-base 2xl:text-xl text-gray-800 2xl:w-4/5">${choices.shortDesc}</p>
//         <p class="font-bold text-base md:text-lg">CHARACTERISTICS:</p>
//         <ul class="list-none xl:list-disc pl-0 xl:pl-4 text-sm md:text-base font-light">
//         ${choices.characteristics.map(characteristic =>{`<li>${characteristic}</li>`})}
//         </ul>
//         <a href="#" class=" mx-auto mt-5 2xl:m-0 self-center xl:self-start bg-red-500 hover:bg-red-700 text-white uppercase w-full xl:w-4/5 2xl:w-1/2  text-center py-2 rounded-md font-bold text-base md:text-lg duration-300 hover:shadow-xl">Details</a>                            
//     </div>
//     <img src="https://picsum.photos/500/300?random=4" alt="" class=" w-full p-2 md:p-4 bg-white rounded-xl shadow-xl order-1 2xl:order-none">
// </div>`

// function appendContent(target, content) {
//     target.innerHTML += content
// }