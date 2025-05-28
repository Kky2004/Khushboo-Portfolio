import { useEffect } from "react";
export default function Footer() {
  useEffect(() => {
    // Smooth scrolling
    const anchors = document.querySelectorAll('a[href^="#"]');
    const mobileMenu = document.getElementById("mobile-menu");

    anchors.forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          });

          // Close mobile menu
          if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
            mobileMenu.classList.add("hidden");
          }
        }
      });
    });
});

 

  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
                KK
              </div>
              <h2 className="ml-3 text-xl font-semibold">Khushboo Kumari</h2>
            </div>
            <p className="mt-2 text-gray-400">Full Stack Developer</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="text-gray-400 mb-2">
              © 2025 Khushboo. All rights reserved.
            </p>
            <p className="text-gray-400">Designed and built with ❤️</p>
          </div>
        </div>
      </div>

      
    </footer>
  );
}
