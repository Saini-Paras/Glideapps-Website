// ================== NAVBAR =================
const navBar=document.querySelector('nav');
window.addEventListener('scroll', ()=>{
    navBar.classList.toggle('nav_scroll', window.scrollY>100 )
    if(navBar.classList.contains('nav_scroll')){
        navBar.querySelector('.logo').src='./Images/logo-black.png'
    }else{
        navBar.querySelector('.logo').src='./Images/logo-white.png'
    }
})

// ==================END OF NAVBAR=================


// ==================HEADER =================
const videoContainer=document.querySelectorAll('.hero_bottom-videos');
let slide= 0;


setInterval(()=>{
    slide+=20.02;

    if(slide>100.1){
        slide=20.02;
        videoContainer[0].style.transition='none'
        videoContainer[1].style.transition='none'
    }
    // if(slide>50.14){
    //     slide=0;
    //     videoContainer.style.transition='none';
    //     videoContainer.style.transform=`translateX(${0}%)`
    //     setTimeout(()=>{
    //         slide=10.028;
    //         // slide=0;
    //     videoContainer.style.transition= 'all .45s ease';
    //     videoContainer.style.transform=`translateX(-${slide}%)`
    //     },10)
    // }else{
    //     videoContainer.style.transform=`translateX(-${slide}%)`
    // }
    videoContainer.forEach(video=>{
        video.style.transform=`translateX(-${slide}%)`
        video.style.transition= 'all .45s ease';
    })
    
},20000)


// ==================Services Section=================

function showReel(elem){
    if(elem.classList.contains('active')){
        return;
    }else{
        for(let elem of servicesMenubarList){
            elem.classList.remove('active')
        }
        elem.classList.add('active')
        const servicesVideo=document.querySelector('.services_video-showreel video');
        servicesVideo.src=`./Videos/Services/video-${elem.dataset.video}.mp4`
    }
}
const servicesMenubarList=document.querySelectorAll('.services_video-showreel .menubar li')
servicesMenubarList.forEach(list=>{
    list.addEventListener('click',()=>{
       showReel(list);
    })
})



const mouse=document.querySelector('.mouse');
const mouseI=document.querySelector('.mouse i');
const showreelContainer=document.querySelector('.services_video-showreel')
const showreelMenu=document.querySelector('.services_video-showreel .menubar')
const showreelLeft=document.querySelector('.services_video-showreel-left')
const showreelRight=document.querySelector('.services_video-showreel-right')

let i=0;
showreelRight.addEventListener('click',()=>{
    i++;
    if(i<servicesMenubarList.length){
        showReel(servicesMenubarList[i])
    }else{
        i=0;
        showReel(servicesMenubarList[i])
    }
})
showreelLeft.addEventListener('click',()=>{
    i--;
    if(i>=0 && i<servicesMenubarList.length){
        showReel(servicesMenubarList[i])
    }else{
        i=4;
        showReel(servicesMenubarList[i])
    }
})


// 
showreelRight.addEventListener('mousemove',function(e){
    mouse.style.left=`${e.x}px`;
    mouse.style.top=`${e.y}px`;
   mouseI.style.transform= `translate(-50%,-50%) rotate(0deg)`;
})
showreelRight.addEventListener('mouseenter',function(){
    mouse.style.display='block';
})
showreelRight.addEventListener('mouseleave',function(){
    mouse.style.display='none';
})

showreelLeft.addEventListener('mousemove',function(e){
    mouse.style.left=`${e.x}px`;
    mouse.style.top=`${e.y}px`;
   mouseI.style.transform= `translate(-50%,-50%) rotate(-180deg)`;
})
showreelLeft.addEventListener('mouseenter',function(){
    mouse.style.display='block'
})
showreelLeft.addEventListener('mouseleave',function(){
    mouse.style.display='none'
})
showreelMenu.addEventListener('mouseenter',function(){
    mouse.style.display='none'
})
showreelMenu.addEventListener('mouseleave',function(){
    mouse.style.display='block'
})
// ==================END OF Services Section=================

// ==================BUILDING Section=================
const buildingBox=document.querySelectorAll('.building_2 .box');
const buildingBoxOverlay=document.querySelectorAll('.box-overlay');
const duration=[0,6.7,15.8,23];
let buildingI=0;

const buildingVideo=document.querySelector('.building_2-body video')

buildingBox.forEach(box=>{
    box.addEventListener('click',function(){
        buildingVideo.currentTime=duration[box.dataset.item];
        for(let box of buildingBox){
            box.classList.remove('active')
        }
        box.classList.add('active')
    })
})


const boxDuration=[1000,6700,9100,7200];
const boxDuration2=[6.7,9.1,7.2,4];
// setInterval(()=>{
//     if(buildingI>=buildingBox.length){
//         buildingI=0;
//     }
//     for(let box of buildingBox){
//         box.classList.remove('active')
//     }

//     buildingBox[buildingI].classList.add('active');
//     buildingBox[buildingI].querySelector('.box-overlay').style.animationDuration=boxDuration2[buildingI]
//     buildingI++;
// },7000)

// function buildingBlocksMovement(){
//     // animation: 'boxOverlayAnimation 6s ease-out' ;
//     buildingBox[buildingI].querySelector('.box-overlay').style.animation='boxOverlayAnimation 6s ease-out'; 
   
// }

// setInterval(()=>{
//     for(let k of buildingBoxOverlay){
//         k.classList.remove('active')
//     }
//     const overlay=buildingBox[buildingI].querySelector('.box-overlay');
//     overlay.classList.add('active')
//     if(overlay.classList.contains('active')){
//         buildingBox[i].style.transform='scale(1.1)'
//     } 
//     buildingI++
    
// },6000)
// buildingBlocksMovement()
// gsap.to(buildingBoxOverlay,{
//     buildingBlocksMovement:buildingBlocksMovement
// })

// buildingBoxOverlay.forEach((boxOverlay)=>{
//     boxOverlay.addEventListener('animationend',()=>{
//         console.log('nnj');
//         boxOverlay.style.transform='translateX(-100%)'
//     })
// })

// buildingBox.forEach(box=>{
//     box.addEventListener('click',function(){
//         buildingI=this.dataset.item;
//         console.log(buildingBoxOverlay[buildingI]);
//         gsap.to(buildingBoxOverlay[buildingI],{
//             width:'100%',
//             x:0,
//             duration:duration[buildingI],
//             delay:5
//         })
//     })
    
// })





buildingVideo.currentTime=20
console.log(buildingVideo.currentTime);
// ==================END OF BUILDING Section=================

// ==================TESTIMONIAL SECTION=================
const testimonialVideos=document.querySelectorAll('.testimonial_1 video')
setInterval(()=>{
    const randomX=Math.floor(Math.random()*4 + 1);
    const randomY=Math.floor(Math.random()*4 + 1);
    const randomX2=Math.floor(Math.random()*7 + 1);
    const randomY2=Math.floor(Math.random()*10 );
    const randomX3=Math.floor(Math.random()*8 + 1);
    const randomY3=Math.floor(Math.random()*-8 + 3);
    const randomX4=Math.floor(Math.random()*6 + 1);
    const randomY4=Math.floor(Math.random()*-12 + 2);



    testimonialVideos[0].style.transform=`translate(${randomX}px,${randomY}px)`
    testimonialVideos[1].style.transform=`translate(${randomX2}px,${randomY2}px)`
    testimonialVideos[2].style.transform=`translate(${randomX3}px,${randomY3}px)`
    testimonialVideos[3].style.transform=`translate(${randomX4}px,${randomY4}px)`

},1500)


const ctaSection=document.querySelector('.cta_section')
const ctaContainer=document.querySelector('.cta_container')
const ctaScroller=document.querySelector('.cta_scroller');
ctaContainer.addEventListener('mouseenter',()=>{
    ctaSection.style.setProperty('background-color','#000')
    ctaScroller.style.setProperty('background','#000')
})
ctaContainer.addEventListener('mouseleave',()=>{
    ctaSection.style.setProperty('background-color','#fff')
    ctaScroller.style.setProperty('background','#E5E7EB')
})
// ==================END OF TESTIMONIAL SECTION=================



gsap.from('.building_3-top h1',{
    opacity:0,
    x:-50,
    duration:1.5,
    scrollTrigger:{
        trigger:'.building_3',
        scroller:'body',
        start: 'top 50%'
    }
})