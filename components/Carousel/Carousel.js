class Carousel {
    constructor(carouselElement){
        this.carouselElement = carouselElement;
        this.leftClick = document.querySelector(".left-button");
        this.rightClick = document.querySelector(".right-button");
        let currentIndex = 0;
        const images = document.querySelectorAll("div.carousel > img");
        this.initialize(images);
        this.leftClick.addEventListener("click", () => this.scrollLeft(currentIndex++,images));
        this.rightClick.addEventListener("click", () => this.scrollRight(currentIndex--,images));
    }
    initialize(images) {
        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        let index = getRndInteger(0,images.length-1);
        console.log(index);
        images[index].style.display = "flex";
    }
    scrollLeft(currentIndex,images) {
        images.forEach(function (currentValue,index){
            if (index == currentIndex) {
                currentValue.style.display = "flex";
            }
            else{
                currentValue.style.display = "none";
            }            
        });
    } 
    scrollRight(currentIndex, images) {
        images.forEach(function callback(currentValue, index) {
          if (index == currentIndex) {
                currentValue.style.display = "flex";
            }
            else {
                currentValue.style.display = "none";
            }
        });

    }
}

let carousel = document.querySelectorAll(".carousel").forEach(items => new Carousel(items));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/