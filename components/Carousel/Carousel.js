class Carousel {
    constructor(carouselElement){
        this.carouselElement = carouselElement;
        this.leftClick = document.querySelector(".left-button");
        this.rightClick = document.querySelector(".right-button");
        this.leftClick.addEventListener("click", () => this.scrollLeft());
        this.rightClick.addEventListener("click", () => this.scrollRight());
    }
    scrollLeft() {
        const images = document.querySelectorAll("img");
        images.forEach(image => {
            image.style.display = "flex";
        })
    }
    scrollRight(){
        const images = document.querySelectorAll("img");
        images.forEach(image=>{
            image.style.display = "flex";
        })
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