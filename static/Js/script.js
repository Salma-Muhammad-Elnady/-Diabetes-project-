document.addEventListener("DOMContentLoaded", () => {
    const infoSection = document.getElementById("info-section");
    const tips = document.querySelectorAll(".tips li");
    
    setTimeout(() => {
        infoSection.classList.add("visible");
        let delay = 500;
        
        tips.forEach((tip, index) => {
            setTimeout(() => {
                tip.style.opacity = 1;
                tip.classList.add("typing");
            }, delay * (index + 1));
        });
    }, 2000);
});
