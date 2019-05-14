class Carousel {
    constructor(carouselElement){
        this.carouselElement = carouselElement;
        this.leftClick = document.querySelector(".left-button");
        this.rightClick = document.querySelector(".right-button");
        let currentIndex = 0;
        const images = document.querySelectorAll("div.carousel > img");
        this.initialize(images);
        this.leftClick.addEventListener("click", () => this.scroll(++currentIndex,images));
        this.rightClick.addEventListener("click", () => this.scroll(--currentIndex,images));
    }

    initialize(images) {
        //Randomizes the initial loaded image. It will range from zero(inclusive) to the length (exlusive)
        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        let index = getRndInteger(0,images.length);
        images[index].style.display = "flex";
    }

    //Method for scrolling images
    scroll(currentIndex,images) {
        //Keeps the index from going higher than the max length or lower than 0
        if (currentIndex<0){
            return;
        }else if (currentIndex>3){
            return;
        }   
        images.forEach(function (currentValue,index){
            console.log(currentValue);
            if (index == currentIndex) {
                currentValue.style.display = "flex";
            }
            else{
                currentValue.style.display = "none";
            }            
        });
    }    
}

//Getting all the carousel elements
let carousel = document.querySelectorAll(".carousel").forEach(items => new Carousel(items));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/