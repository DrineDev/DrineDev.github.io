document.addEventListener('DOMContentLoaded', function() {

    document.addEventListener("mousemove", (e) => {
        document.documentElement.style.setProperty("--x", `${e.clientX}px`);
        document.documentElement.style.setProperty("--y", `${e.clientY}px`);
    });

    // MAIN PAGE
    const mainNextBtn: HTMLElement | null = document.querySelector('#next');
    const mainPrevBtn: HTMLElement | null = document.querySelector('#prev');
    const mainSections = document.querySelectorAll('.section') as NodeListOf<HTMLElement>;
    let pageCount = 0;

    // early access for instant setting.
    const upBtn: HTMLElement | null = document.getElementById("scrollUp");
    const downBtn: HTMLElement | null = document.getElementById("scrollDown");

    const mainContent: HTMLElement | null = document.querySelector('.mainContent')

    // resize functions
    let isResizing = false;
    let resizeTimer: number;
    window.addEventListener('resize', function() {
        isResizing = true;
        this.clearTimeout(resizeTimer);

        if (mainContent) {
            mainContent.style.scrollBehavior = 'auto';
        }

        if (pageCount >= 0 && pageCount <= mainSections.length) {
            mainSections[pageCount].scrollIntoView({ behavior: 'auto' });
        }

        resizeTimer = setTimeout(() => {
            isResizing = false;
            if (mainContent) {
                mainContent.style.scrollBehavior = 'smooth';
            }
        }, 100);
    });

    setTimeout(() => {
        pageCount = 0;
        flipMainPage(pageCount);
    }, 0);

    mainNextBtn?.addEventListener('click', function(e) {
        pageCount++;
        flipMainPage(pageCount);
    })

    mainPrevBtn?.addEventListener('click', function(e) {
        pageCount--;
        flipMainPage(pageCount);
    })

    function flipMainPage(pageCount) {
        if (pageCount < 0 || pageCount > mainSections.length - 1) {
            return;
        }

        swapColors(pageCount % 2 === 0);

        if (mainPrevBtn) mainPrevBtn.style.display = pageCount === 0 ? "none" : "block";
        if (mainNextBtn) mainNextBtn.style.display = pageCount === mainSections.length - 1 ? "none" : "block";

        mainSections.forEach(section => {
            section.classList.remove('active');
        });

        if (pageCount >= 0 && pageCount < mainSections.length) {
            const section = mainSections[pageCount];

            section.classList.remove('active');

            void section.offsetWidth;

            section.classList.add('active');

            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        if (upBtn) upBtn.style.display = pageCount === 2 ? "block" : "none";
        if (downBtn) downBtn.style.display = pageCount === 2 ? "block" : "none";
    }

    // NAV BTN
    const home: HTMLElement | null = document.getElementById('homeBtn');
    const aboutMe: HTMLElement | null = document.getElementById('aboutMeBtn');
    const projects: HTMLElement | null = document.getElementById('projectsBtn');
    const media: HTMLElement | null = document.getElementById('mediaBtn');
    const downloadBtn: HTMLElement | null = document.querySelector('.sidenav .download-btn');

    home?.addEventListener('click', function(e) {
        pageCount = 0;
        flipMainPage(pageCount);
    })

    aboutMe?.addEventListener('click', function(e) {
        pageCount = 1;
        flipMainPage(pageCount);
    })

    projects?.addEventListener('click', function(e) {
        pageCount = 2;
        flipMainPage(pageCount);
    })

    media?.addEventListener('click', function(e) {
        pageCount = 3;
        flipMainPage(pageCount);
    })

    downloadBtn?.addEventListener('click', function(e) {
        downloadResume();
    })

    function downloadResume() {
        alert('Download Resume Clicked');
    }

    // ABOUT ME PAGE
    const dropDownButtons = document.querySelectorAll('.dropDownButton') as NodeListOf<HTMLElement>;

    dropDownButtons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling as HTMLElement;

            content.classList.toggle("active");

            if (button.getAttribute('name') === 'specialDDB') {
                if (content.classList.contains("active")) {
                    button.style.borderBottomRightRadius = '0px';
                    button.style.borderBottomLeftRadius = '0px';
                    content.style.borderBottomRightRadius = '10px';
                    content.style.borderBottomLeftRadius = '10px';
                } else {
                    button.style.borderBottomRightRadius = '10px';
                    button.style.borderBottomLeftRadius = '10px';
                    content.style.borderBottomRightRadius = '10px';
                    content.style.borderBottomLeftRadius = '10px';
                }
            }

            if (content.classList.contains("active")) {
                content.style.height = `${content.scrollHeight}px`;
            } else {
                content.style.height = `${content.scrollHeight}px`;
                setTimeout(() => {
                    content.style.height = "0";
                }, 10);
            }
        });
    });


    // PROJECTS PAGE
    // const upBtn: HTMLElement | null = document.getElementById("scrollUp");
    // const downBtn: HTMLElement | null = document.getElementById("scrollDown");
    const projectItems = document.querySelectorAll(".projectItem") as NodeListOf<HTMLElement>;
    let projectCount: number = 1;

    function updateCarousel(index: number) {
        projectItems.forEach((item, i) => {
            item.classList.remove('previous', 'active', 'next');

            if (i === index) {
                item.classList.add('active');
            } else if (i === (index - 1 + projectItems.length) % projectItems.length) {
                item.classList.add('previous');
            } else if (i === (index + 1) % projectItems.length) {
                item.classList.add('next');
            }

            // item.style.transform = isMobile ? `scale(${i === index ? 1 : 0.9})` : '';
        });
    }

    updateCarousel(projectCount);

    upBtn?.addEventListener('click', function() {
        projectCount = (projectCount - 1 + projectItems.length) % projectItems.length;
        updateCarousel(projectCount);
    });

    downBtn?.addEventListener('click', function() {
        projectCount = (projectCount + 1) % projectItems.length;
        updateCarousel(projectCount);
    });

    // ARROW KEY HANDLER
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowUp') {
            projectCount = (projectCount - 1 + projectItems.length) % projectItems.length;
            updateCarousel(projectCount);
        } else if (e.key === 'ArrowDown') {
            projectCount = (projectCount + 1) % projectItems.length;
            updateCarousel(projectCount);
        } else if (e.key === 'ArrowLeft') {
            pageCount = Math.max(pageCount - 1, 0);
            flipMainPage(pageCount);
        } else if (e.key === 'ArrowRight') {
            pageCount = Math.min(pageCount + 1, 3);
            flipMainPage(pageCount);
        }
    });

    // SWIPE HANDLER 
    let touchStartX: number = 0;
    let touchEndX: number = 0;
    let touchStartY: number = 0;
    let touchEndY: number = 0;
    let lastSwipeTime = 0;
    const swipeCooldown = 300;

    document.addEventListener('touchstart', function(e) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    });

    document.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].clientX;
        touchEndY = e.changedTouches[0].clientY;
        handleSwipe(touchEndX - touchStartX, touchEndY - touchStartY);
    });

    document.addEventListener('wheel', function(e) {
        handleSwipe(e.deltaX, e.deltaY);
    });

    function handleSwipe(deltaX: number, deltaY: number) {
        const now = Date.now();
        if (now - lastSwipeTime < swipeCooldown) return;
        lastSwipeTime = now;

        const swipeThreshold = 10;

        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > swipeThreshold) {
            if (deltaX > 0 && pageCount > 0) {
                pageCount--;
                flipMainPage(pageCount);
            } else if (deltaX < 0 && pageCount < mainSections.length - 1) {
                pageCount++;
                flipMainPage(pageCount);
            }
        } else if (Math.abs(deltaY) > swipeThreshold) {
            if (deltaY > 0) {
                projectCount = (projectCount + 1) % projectItems.length;
            } else {
                projectCount = (projectCount - 1 + projectItems.length) % projectItems.length;
            }
            updateCarousel(projectCount);
        }
    }

    // COLOR SWAP
    function swapColors(isEvenPage: boolean) {
        const root = document.documentElement;
        if (!isEvenPage) {
            const originalText = getComputedStyle(root).getPropertyValue('--text-color');
            const originalBg = getComputedStyle(root).getPropertyValue('--bg-color');

            const reverseText = getComputedStyle(root).getPropertyValue('--revtext-color');
            const reverseBg = getComputedStyle(root).getPropertyValue('--revbg-color');

            root.style.setProperty('--text-color', reverseText);
            root.style.setProperty('--bg-color', reverseBg);
            root.style.setProperty('--revtext-color', originalText);
            root.style.setProperty('--revbg-color', originalBg);
        } else {
            root.style.setProperty('--text-color', '#111');
            root.style.setProperty('--bg-color', '#F8F8F8');
            root.style.setProperty('--revtext-color', '#F8F8F8');
            root.style.setProperty('--revbg-color', '#111');
        }
    }

    // Window management
    // const isMobile = window.innerWidth <= 768;
    //
    // function handleMobileScroll() {
    //     let touchStartX = 0;
    //     let touchStartY = 0;
    //     let initialScroll = 0;
    //     let scrollTimeout: number;
    //
    //     document.addEventListener('touchstart', (e) => {
    //         touchStartX = e.touches[0].clientX;
    //         touchStartY = e.touches[0].clientY;
    //         initialScroll = window.scrollY;
    //
    //         clearTimeout(scrollTimeout);
    //     }, { passive: true });
    //
    //     document.addEventListener('touchmove', (e) => {
    //         // e.preventDefault();
    //     }, { passive: false });
    //
    //     document.addEventListener('touchend', (e) => {
    //         const touchEndX = e.changedTouches[0].clientX;
    //         const touchEndY = e.changedTouches[0].clientY;
    //
    //         const deltaX = touchEndX - touchStartX;
    //         const deltaY = touchEndY - touchStartY;
    //
    //         // Determine if horizontal or vertical swipe
    //         if (Math.abs(deltaX) > Math.abs(deltaY)) {
    //             // Horizontal swipe
    //             if (Math.abs(deltaX) > 50) { // Minimum swipe distance
    //                 if (deltaX > 0 && pageCount > 0) {
    //                     pageCount--;
    //                     flipMainPage(pageCount);
    //                 } else if (deltaX < 0 && pageCount < mainSections.length - 1) {
    //                     pageCount++;
    //                     flipMainPage(pageCount);
    //                 }
    //             }
    //         } else {
    //             if (pageCount === 2 && Math.abs(deltaY) > 50) {
    //                 if (deltaY > 0) {
    //                     projectCount = (projectCount - 1 + projectItems.length) % projectItems.length;
    //                 } else {
    //                     projectCount = (projectCount + 1) % projectItems.length;
    //                 }
    //                 updateCarousel(projectCount);
    //             }
    //         }
    //     });
    // }
    //
    // if (isMobile) {
    //     handleMobileScroll();
    // }

    window.addEventListener('orientationchange', function() {
        setTimeout(() => {
            mainSections[pageCount].scrollIntoView({ behavior: 'auto' });
        }, 200);
    });

    // SIDE NAV FOR MOBILE
    const sidenav = document.querySelector('.sidenav') as HTMLElement;
    const menuToggle = document.querySelector('.menu-toggle') as HTMLElement;

    menuToggle.addEventListener('click', function() {
        sidenav.classList.toggle('open');
    });

    // Close menu when clicking a nav button (optional)
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                sidenav.classList.remove('open');
            }
        });
    });
});
