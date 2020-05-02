(function scrolljs() {
    "use strict";

    const types = [
        'fade',
        'fade-up',
        'fade-down',
        'fade-left',
        'fade-right',
        'fade-down-left',
        'fade-down-right',
        'fade-up-left',
        'fade-up-right',
        'flip-left',
        'flip-right',
        'flip-up',
        'flip-down',
        'flip-up-left',
        'flip-up-right',
        'flip-down-left',
        'flip-down-right',
        'scale-up',
        'scale-down',
    ];

    class Element {

        constructor(node, type, duration, timing) {
            this.node = node;
            this.type = type;
            this.duration = duration;
            this.timing = timing;
        }

        static checkType(str) {
            if (!types.includes(str)) {
                return false;
            }
            return true;
        }

        static checkDuration(str) {
            let duration = +str;
            if (isNaN(duration)) {
                return duration;
            }
            return 600;
        }

        // createFromoptions create an Element
        // object from a string
        // Ex. fadeup|400|ease-in
        static createFromOptions(node, str) {
            let options = str.split("|");
            let element;



            if (options) {
                if (Element.checkType(options[0])) {
                    switch (options.length) {
                        case 1:
                            element = new Element(node, options[0], 600, "ease");
                            break;
                        case 2:
                            element = Element.checkDuration(options[1]) ?
                                new Element(node, options[0], options[1], "ease") :
                                new Element(node, options[0], 600, "ease");
                            break;
                        case 3:
                            element = new Element(
                                node,
                                options[0],
                                options[1],
                                options[2]
                            );
                            break;
                        default:
                            element = {};
                    }
                } else {
                    element = new Element(node);
                }
            }

            return element;
        }



    }

    let elements = document.querySelectorAll('[scrolljs]');
    elements.forEach(element => {
        let options = element.getAttribute("scrolljs");

        initElement(Element.createFromOptions(element, options));
    });

    function initElement(element) {

        element.node.style.transition = `transform ${element.duration}ms ${element.timing} .2s, opacity ${element.duration}ms ${element.timing} .2s`;

        createObserver(element);
    }

    function createObserver(element) {

        let observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                let el = entry.target;
                if (entry.isIntersecting) {

                    if (entry.intersectionRatio >= 0.25) {
                        switch(element.type) {
                            case 'fade': fade(el, false); break;
                            case 'fade-up': fadeUp(el, false); break;
                            case 'fade-down': fadeDown(el, false); break;
                            case 'fade-right': fadeRight(el, false); break;
                            case 'fade-left': fadeLeft(el, false); break;
                            case 'fade-up-right': fadeUpRight(el, false); break;
                            case 'fade-up-left': fadeUpLeft(el, false); break;
                            case 'fade-down-right': fadeDownRight(el, false); break;
                            case 'fade-down-left': fadeDownLeft(el, false); break;
                            case 'flip-left': flipLeft(el, false); break;
                            case 'flip-right': flipRight(el, false); break;
                            case 'flip-up': flipUp(el, false); break;
                            case 'flip-down': flipDown(el, false); break;
                            case 'scale-up': scaleUp(el, false); break;
                            case 'scale-down': scaleDown(el, false); break;
                            case 'flip-up-left': flipUpLeft(el, false); break;
                            case 'flip-up-right': flipUpRight(el, false); break;
                            case 'flip-down-left': flipDownLeft(el, false); break;
                            case 'flip-down-right': flipDownRight(el, false); break;

                        }
                    }
                } else {
                    switch(element.type) {
                        case 'fade': fade(el, true); break;
                        case 'fade-up': fadeUp(el, true); break;
                        case 'fade-down': fadeDown(el, true); break;
                        case 'fade-right': fadeRight(el, true); break;
                        case 'fade-left': fadeLeft(el, true); break;
                        case 'fade-up-right': fadeUpRight(el, true); break;
                        case 'fade-up-left': fadeUpLeft(el, true); break;
                        case 'fade-down-right': fadeDownRight(el, true); break;
                        case 'fade-down-left': fadeDownLeft(el, true); break;
                        case 'flip-left': flipLeft(el, true); break;
                        case 'flip-right': flipRight(el, true); break;
                        case 'flip-up': flipUp(el, true); break;
                        case 'flip-down': flipDown(el, true); break;
                        case 'scale-up': scaleUp(el, true); break;
                        case 'scale-down': scaleDown(el, true); break;
                        case 'flip-up-left': flipUpLeft(el, true); break;
                        case 'flip-up-left': flipUpLeft(el, true); break;
                        case 'flip-up-right': flipUpRight(el, true); break;
                        case 'flip-down-left': flipDownLeft(el, true); break;
                        case 'flip-down-right': flipDownRight(el, true); break;
                    }
                }
            });
        }, {threshold: [0, 0.2, 0.4, 0.6, 0.8, 1]});
        observer.observe(element.node);
    }

    function fade(element, init) {
        if(init) {
            element.style.opacity = 0;
        } else {
            element.style.opacity = 1;
        }
    }

    function fadeUp(element, init) {

        if(init) {
            element.style.transform = "translateY(75px)";
            element.style.opacity = 0;
        } else {
            element.style.transform = "translateY(0)";
            element.style.opacity = 1;
        }
    }

    function fadeDown(element, init) {
        if(init) {
            element.style.transform = "translateY(-75px)";
            element.style.opacity = 0;
        } else {
            element.style.transform = "translateY(0)";
            element.style.opacity = 1;
        }
    }

    function fadeLeft(element, init) {
        if(init) {
            element.style.transform = "translateX(-75px)";
            element.style.opacity = 0;
        } else {
            element.style.transform = "translateX(0)";
            element.style.opacity = 1;
        }
    }

    function fadeRight(element, init) {
        if(init) {
            element.style.transform = "translateX(75px)";
            element.style.opacity = 0;
        } else {
            element.style.transform = "translateX(0)";
            element.style.opacity = 1;
        }
    }

    function fadeDownRight(element, init) {
        if(init) {
            element.style.transform = "translate(75px, -75px)";
            element.style.opacity = 0;
        } else {
            element.style.transform = "translate(0, 0)";
            element.style.opacity = 1;
        }
    }

    function fadeUpRight(element, init) {
        if(init) {
            element.style.transform = "translate(75px, 75px)";
            element.style.opacity = 0;
        } else {
            element.style.transform = "translate(0, 0)";
            element.style.opacity = 1;
        }
    }

    function fadeDownLeft(element, init) {
        if(init) {
            element.style.transform = "translate(-75px, -75px)";
            element.style.opacity = 0;
        } else {
            element.style.transform = "translate(0, 0)";
            element.style.opacity = 1;
        }
    }

    function fadeUpLeft(element, init) {
        if(init) {
            element.style.transform = "translate(-75px, 75px)";
            element.style.opacity = 0;
        } else {
            element.style.transform = "translate(0, 0)";
            element.style.opacity = 1;
        }
    }

    function flipRight(element, init) {
        element.style.transformOrigin = "right";
        element.style.transformStyle ="preserve-3d";
        if(init) {
            element.style.transform = "perspective(700px) rotateY(-90deg)";
            element.style.opacity = 0;
        } else {
            element.style.transform = "perspective(700px) rotateY(0)";
            element.style.opacity = 1;
        }
    }

    function flipUp(element, init) {
        element.style.transformOrigin = "bottom";
        element.style.transformStyle ="preserve-3d";
        if(init) {
            element.style.transform = "perspective(700px) rotateX(90deg)";
            element.style.opacity = 0;
        } else {
            element.style.transform = "perspective(700px) rotateX(0)";
            element.style.opacity = 1;
        }
    }

    function flipDown(element, init) {
        element.style.transformOrigin = "top";
        element.style.transformStyle ="preserve-3d";
        if(init) {
            element.style.transform = "perspective(700px) rotateX(-90deg)";
            element.style.opacity = 0;
        } else {
            element.style.transform = "perspective(700px) rotateX(0)";
            element.style.opacity = 1;
        }
    }

    function flipLeft(element, init) {
        element.style.transformOrigin = "left";
        element.style.transformStyle ="preserve-3d";
        if(init) {
            element.style.transform = "perspective(700px) rotateY(90deg)";
            element.style.opacity = 0;
        } else {
            element.style.transform = "perspective(700px) rotateY(0)";
            element.style.opacity = 1;
        }
    }

    function flipUpLeft(element, init) {
        element.style.transformOrigin = "left bottom";
        element.style.transformStyle ="preserve-3d";
        if(init) {
            element.style.transform = "perspective(700px) rotate3d(1, 1, 0, 90deg)";
            element.style.opacity = 0;
        } else {
            element.style.transform = "perspective(700px) rotate3d(0, 0, 0, 90deg)";
            element.style.opacity = 1;
        }
    }

    function flipUpRight(element, init) {
        element.style.transformOrigin = "right bottom";
        element.style.transformStyle ="preserve-3d";
        if(init) {
            element.style.transform = "perspective(700px) rotate3d(1, -1, 0, 90deg)";
            element.style.opacity = 0;
        } else {
            element.style.transform = "perspective(700px) rotate3d(0, 0, 0, 90deg)";
            element.style.opacity = 1;
        }
    }

    function flipDownLeft(element, init) {
        element.style.transformOrigin = "left top";
        element.style.transformStyle ="preserve-3d";
        if(init) {
            element.style.transform = "perspective(700px) rotate3d(-1, 1, 0, 90deg)";
            element.style.opacity = 0;
        } else {
            element.style.transform = "perspective(700px) rotate3d(0, 0, 0, 90deg)";
            element.style.opacity = 1;
        }
    }

    function flipDownRight(element, init) {
        element.style.transformOrigin = "right top";
        element.style.transformStyle ="preserve-3d";
        if(init) {
            element.style.transform = "perspective(700px) rotate3d(-1, -1, 0, 90deg)";
            element.style.opacity = 0;
        } else {
            element.style.transform = "perspective(700px) rotate3d(0, 0, 0, 90deg)";
            element.style.opacity = 1;
        }
    }

    function scaleUp(element, init) {
        if(init) {
            element.style.transform = "scale(0)";
            element.style.opacity = 0;
        } else {
            element.style.transform = "scale(1)";
            element.style.opacity = 1;
        }
    }

    function scaleDown(element, init) {
        if(init) {
            element.style.transform = "scale(1.5)";
            element.style.opacity = 0;
        } else {
            element.style.transform = "scale(1)";
            element.style.opacity = 1;
        }
    }
})();
