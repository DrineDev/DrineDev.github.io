document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener("mousemove", function (e) {
        document.documentElement.style.setProperty("--x", "".concat(e.clientX, "px"));
        document.documentElement.style.setProperty("--y", "".concat(e.clientY, "px"));
    });
    // MAIN PAGE
    var mainNextBtn = document.querySelector('#next');
    var mainPrevBtn = document.querySelector('#prev');
    var mainSections = document.querySelectorAll('.section');
    var pageCount = 0;
    // early access for instant setting.
    var upBtn = document.getElementById("scrollUp");
    var downBtn = document.getElementById("scrollDown");
    var mainContent = document.querySelector('.mainContent');
    // resize functions
    var isResizing = false;
    var resizeTimer;
    window.addEventListener('resize', function () {
        isResizing = true;
        this.clearTimeout(resizeTimer);
        if (mainContent) {
            mainContent.style.scrollBehavior = 'auto';
        }
        if (pageCount >= 0 && pageCount <= mainSections.length) {
            mainSections[pageCount].scrollIntoView({ behavior: 'auto' });
        }
        resizeTimer = setTimeout(function () {
            isResizing = false;
            if (mainContent) {
                mainContent.style.scrollBehavior = 'smooth';
            }
        }, 100);
    });
    setTimeout(function () {
        pageCount = 0;
        flipMainPage(pageCount);
    }, 0);
    mainNextBtn === null || mainNextBtn === void 0 ? void 0 : mainNextBtn.addEventListener('click', function (e) {
        pageCount++;
        flipMainPage(pageCount);
    });
    mainPrevBtn === null || mainPrevBtn === void 0 ? void 0 : mainPrevBtn.addEventListener('click', function (e) {
        pageCount--;
        flipMainPage(pageCount);
    });
    function flipMainPage(pageCount) {
        if (mainPrevBtn)
            mainPrevBtn.style.display = pageCount === 0 ? "none" : "block";
        if (mainNextBtn)
            mainNextBtn.style.display = pageCount === mainSections.length - 1 ? "none" : "block";
        mainSections.forEach(function (section) {
            section.classList.remove('active');
        });
        if (pageCount >= 0 && pageCount < mainSections.length) {
            var section = mainSections[pageCount];
            section.classList.remove('active');
            void section.offsetWidth;
            section.classList.add('active');
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        if (upBtn)
            upBtn.style.display = pageCount === 2 ? "block" : "none";
        if (downBtn)
            downBtn.style.display = pageCount === 2 ? "block" : "none";
        if (pageCount < 0 || pageCount > mainSections.length - 1) {
            return;
        }
    }
    // NAV BTN
    var home = document.getElementById('homeBtn');
    var aboutMe = document.getElementById('aboutMeBtn');
    var projects = document.getElementById('projectsBtn');
    var media = document.getElementById('mediaBtn');
    var downloadBtn = document.querySelector('.sidenav .download-btn');
    home === null || home === void 0 ? void 0 : home.addEventListener('click', function (e) {
        pageCount = 0;
        flipMainPage(pageCount);
    });
    aboutMe === null || aboutMe === void 0 ? void 0 : aboutMe.addEventListener('click', function (e) {
        pageCount = 1;
        flipMainPage(pageCount);
    });
    projects === null || projects === void 0 ? void 0 : projects.addEventListener('click', function (e) {
        pageCount = 2;
        flipMainPage(pageCount);
    });
    media === null || media === void 0 ? void 0 : media.addEventListener('click', function (e) {
        pageCount = 3;
        flipMainPage(pageCount);
    });
    downloadBtn === null || downloadBtn === void 0 ? void 0 : downloadBtn.addEventListener('click', function (e) {
        downloadResume();
    });
    function downloadResume() {
        var link = document.createElement('a');
        link.href = 'resume.pdf';
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    // ABOUT ME PAGE
    var dropDownButtons = document.querySelectorAll('.dropDownButton');
    dropDownButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var content = this.nextElementSibling;
            content.classList.toggle("active");
            if (button.getAttribute('name') === 'specialDDB') {
                if (content.classList.contains("active")) {
                    button.style.borderBottomRightRadius = '0px';
                    button.style.borderBottomLeftRadius = '0px';
                    content.style.borderBottomRightRadius = '10px';
                    content.style.borderBottomLeftRadius = '10px';
                }
                else {
                    button.style.borderBottomRightRadius = '10px';
                    button.style.borderBottomLeftRadius = '10px';
                    content.style.borderBottomRightRadius = '10px';
                    content.style.borderBottomLeftRadius = '10px';
                }
            }
            if (content.classList.contains("active")) {
                content.style.height = "".concat(content.scrollHeight, "px");
            }
            else {
                content.style.height = "".concat(content.scrollHeight, "px");
                setTimeout(function () {
                    content.style.height = "0";
                }, 10);
            }
        });
    });
    // PROJECTS PAGE
    // const upBtn: HTMLElement | null = document.getElementById("scrollUp");
    // const downBtn: HTMLElement | null = document.getElementById("scrollDown");
    var projectItems = document.querySelectorAll(".projectItem");
    var projectCount = 1;
    function updateCarousel(index) {
        projectItems.forEach(function (item, i) {
            item.classList.remove('previous', 'active', 'next');
            if (i === index) {
                item.classList.add('active');
            }
            else if (i === (index - 1 + projectItems.length) % projectItems.length) {
                item.classList.add('previous');
            }
            else if (i === (index + 1) % projectItems.length) {
                item.classList.add('next');
            }
            item.style.transform = '';
        });
    }
    updateCarousel(projectCount);
    upBtn === null || upBtn === void 0 ? void 0 : upBtn.addEventListener('click', function () {
        projectCount = (projectCount - 1 + projectItems.length) % projectItems.length;
        updateCarousel(projectCount);
    });
    downBtn === null || downBtn === void 0 ? void 0 : downBtn.addEventListener('click', function () {
        projectCount = (projectCount + 1) % projectItems.length;
        updateCarousel(projectCount);
    });
    // ARROW KEY HANDLER
    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowUp') {
            projectCount = (projectCount - 1 + projectItems.length) % projectItems.length;
            updateCarousel(projectCount);
        }
        else if (e.key === 'ArrowDown') {
            projectCount = (projectCount + 1) % projectItems.length;
            updateCarousel(projectCount);
        }
        else if (e.key === 'ArrowLeft') {
            pageCount = Math.max(pageCount - 1, 0);
            flipMainPage(pageCount);
        }
        else if (e.key === 'ArrowRight') {
            pageCount = Math.min(pageCount + 1, 3);
            flipMainPage(pageCount);
        }
    });
    // SWIPE HANDLER 
    var touchStartX = 0;
    var touchEndX = 0;
    var touchStartY = 0;
    var touchEndY = 0;
    var lastSwipeTime = 0;
    var swipeCooldown = 300;
    document.addEventListener('touchstart', function (e) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    });
    document.addEventListener('touchend', function (e) {
        touchEndX = e.changedTouches[0].clientX;
        touchEndY = e.changedTouches[0].clientY;
        handleSwipe(touchEndX - touchStartX, touchEndY - touchStartY);
    });
    document.addEventListener('wheel', function (e) {
        handleSwipe(e.deltaX, e.deltaY);
    });
    function handleSwipe(deltaX, deltaY) {
        var now = Date.now();
        if (now - lastSwipeTime < swipeCooldown)
            return;
        lastSwipeTime = now;
        var swipeThreshold = 10;
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > swipeThreshold) {
            if (deltaX > 0 && pageCount > 0) {
                pageCount--;
                flipMainPage(pageCount);
            }
            else if (deltaX < 0 && pageCount < mainSections.length - 1) {
                pageCount++;
                flipMainPage(pageCount);
            }
        }
        else if (Math.abs(deltaY) > swipeThreshold) {
            if (deltaY > 0) {
                projectCount = (projectCount + 1) % projectItems.length;
            }
            else {
                projectCount = (projectCount - 1 + projectItems.length) % projectItems.length;
            }
            updateCarousel(projectCount);
        }
    }
    // Window management
    var isMobile = window.innerWidth <= 950;
    window.addEventListener('orientationchange', function () {
        setTimeout(function () {
            mainSections[pageCount].scrollIntoView({ behavior: 'auto' });
        }, 200);
    });
    // SIDE NAV FOR MOBILE
    var sidenav = document.querySelector('.sidenav');
    var menuToggle = document.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', function () {
        sidenav.classList.toggle('open');
    });
    var navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            if (window.innerWidth <= 950) {
                sidenav.classList.remove('open');
            }
        });
    });
    // THEME SELECT
    var themeToggle = document.querySelector('.themeToggle');
    if (localStorage.getItem('theme') === 'dark') {
        swapColors(false);
        document.body.classList.add('darkMode');
    }
    else {
        swapColors(true);
    }
    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            document.body.classList.toggle('darkMode');
            var isDarkMode = document.body.classList.contains('darkMode');
            swapColors(!isDarkMode);
            if (isDarkMode) {
                localStorage.setItem('theme', 'dark');
            }
            else {
                localStorage.setItem('theme', 'light');
            }
        });
    }
    function swapColors(isDarkMode) {
        var root = document.documentElement;
        if (!isDarkMode) {
            var originalText = getComputedStyle(root).getPropertyValue('--text-color').trim();
            var originalBg = getComputedStyle(root).getPropertyValue('--bg-color').trim();
            var reverseText = getComputedStyle(root).getPropertyValue('--revtext-color').trim();
            var reverseBg = getComputedStyle(root).getPropertyValue('--revbg-color').trim();
            root.style.setProperty('--text-color', reverseText);
            root.style.setProperty('--bg-color', reverseBg);
            root.style.setProperty('--revtext-color', originalText);
            root.style.setProperty('--revbg-color', originalBg);
        }
        else {
            root.style.setProperty('--text-color', '#111');
            root.style.setProperty('--bg-color', '#F8F8F8');
            root.style.setProperty('--revtext-color', '#F8F8F8');
            root.style.setProperty('--revbg-color', '#111');
        }
    }
});
