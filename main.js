
  const tabs = document.querySelectorAll(".tab-btn");
  const cards = document.querySelectorAll(".product-card");

  tabs.forEach(btn => {
    btn.addEventListener("click", () => {

      // Remove active style
      tabs.forEach(b => b.classList.remove("bg-white", "text-[#081b29]"));
      tabs.forEach(b => b.classList.add("text-gray-300"));

      // Activate clicked tab
      btn.classList.add("bg-white", "text-[#081b29]");
      btn.classList.remove("text-gray-300");

      const tab = btn.dataset.tab;

      // Show/hide products
      cards.forEach(card => {
        const category = card.dataset.category;

        if (tab === "all" || tab === category) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });

  
  document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("heroSlider");
  const slides = slider.children;
  const total = slides.length;

  let index = 0;

  function move() {
    slider.style.transform = `translateX(-${index * 100}%)`;
  }

  document.getElementById("next").addEventListener("click", () => {
    index = (index + 1) % total;
    move();
  });

  document.getElementById("prev").addEventListener("click", () => {
    index = (index - 1 + total) % total;
    move();
  });

  setInterval(() => {
    index = (index + 1) % total;
    move();
  }, 5000);
});

const gallery = document.getElementById("gallerySlider");
  if (gallery) {
    const slides = gallery.children;
    let index = 0;

    const update = () => {
      const width = slides[0].offsetWidth + 24;
      gallery.style.transform = `translateX(-${index * width}px)`;
    };

    document.getElementById("galleryNext").onclick = () => {
      if (index < slides.length - 1) {
        index++;
        update();
      }
    };

    document.getElementById("galleryPrev").onclick = () => {
      if (index > 0) {
        index--;
        update();
      }
    };

  window.addEventListener("resize", update);
}