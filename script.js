const employeeName = document.querySelectorAll(".js-name");
const imageContainer = document.querySelectorAll(".js-imgContainer");

for (let i=0; i<employeeName.length; i++){
    // Add the ".name-active" and ".active" class to the current element image container and text respectively on mouseenter
    employeeName[i].addEventListener("mouseenter", function(e){
        for (let i=0; i<imageContainer.length; i++){
            imageContainer[i].classList.remove("active");
            employeeName[i].classList.remove("name-active");
        }
        imageContainer[i].classList.add("active");    
        employeeName[i].classList.add("name-active");
    }) 

    // Remove the .name-active and .active class to the current element image container and text respectively on mouseleave
    employeeName[i].addEventListener("mouseleave", function(){
        imageContainer[i].classList.remove("active");
        employeeName[i].classList.remove("name-active");
    }) 

    // Update the current image container position(left & top) with mouse position on mousemove
    employeeName[i].addEventListener("mousemove", function(e){
        let mouseXPosition = e.clientX;
        let mouseYPosition = e.clientY;

        imageContainer[i].style.left = `${mouseXPosition}px`;
        imageContainer[i].style.top =  `${mouseYPosition}px`;
    }) 
}
 
