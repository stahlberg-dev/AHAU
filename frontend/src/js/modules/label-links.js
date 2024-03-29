export class labelLinksMaker {

    constructor(config) {
        this.linkAttributeName = config.linkAttributeName;
        this.activeLinkClassName = config.activeLinkClassName;
        this.labelAttributeName = config.labelAttributeName;
        this.activeLabelClassName = config.activeLabelClassName;
        this.onMouseLeaveHide = config.onMouseLeaveHide;
        this.onlyClick = config.onlyClick;
        this.missClick = config.missClick;
        this.showHideTime = config.showHideTime;
        this.visibleLabelNames = config.visibleLabelNames;
    }

    onLoad({
        linkAttributeName,
        activeLinkClassName,
        labelAttributeName,
        activeLabelClassName,
        visibleLabelNames,
    }) {

        const labels = document.querySelectorAll(`[${labelAttributeName}]`);

        labels.forEach(label => {
            label.style.visibility = 'hidden';
        });

        visibleLabelNames?.forEach(visibleLabelName => {

            const visibleLinks = document.querySelectorAll(`[${linkAttributeName}="${visibleLabelName}"]`);
            const visibleLabels = document.querySelectorAll(`[${labelAttributeName}="${visibleLabelName}"]`);

            visibleLinks.forEach(visibleLink => {
                visibleLink.classList.add( activeLinkClassName.slice(1) );
            });

            visibleLabels.forEach(visibleLabel => {

                visibleLabel.classList.add( activeLabelClassName.slice(1) );
                visibleLabel.style.visibility = 'visible';

            });

        });

    }

    onHover({
        linkAttributeName,
        activeLinkClassName,
        labelAttributeName,
        activeLabelClassName,
        onMouseLeaveHide,
        onlyClick,
        showHideTime,
    }) {

        if (onlyClick) return;

        const mediaQueryHover = window.matchMedia('(any-hover: hover)');
        if (!mediaQueryHover.matches) return;

        const links = document.querySelectorAll(`[${linkAttributeName}]`);

        links.forEach(link => {

            link.addEventListener("mouseenter", event => {

                const activeLinks = document.querySelectorAll(activeLinkClassName);
                const activeLabels = document.querySelectorAll(activeLabelClassName);
                const isActive = link.classList.contains( activeLinkClassName.slice(1) );

                if (!isActive) {

                    activeLinks.forEach(activeLink => {

                        activeLink.classList.remove( activeLinkClassName.slice(1) );
                        activeLink.style.pointerEvents = 'none';

                        setTimeout(() => {
                            activeLink.style.pointerEvents = 'auto';
                        }, showHideTime);

                    });
        
                    activeLabels.forEach(activeLabel => {
        
                        activeLabel.classList.remove( activeLabelClassName.slice(1) );
        
                        setTimeout(() => {
                            activeLabel.style.visibility = 'hidden';
                        }, showHideTime);
        
                    });
    
                    link.classList.add( activeLinkClassName.slice(1) );
    
                    const linkName = link.getAttribute(linkAttributeName);
                    const currentLabels = document.querySelectorAll(`[${labelAttributeName}="${linkName}"]`);
    
                    currentLabels.forEach(currentLabel => {

                        currentLabel.classList.add( activeLabelClassName.slice(1) );
                        currentLabel.style.visibility = 'visible';

                    });
    
                }

            });

        });

        if (!onMouseLeaveHide) return;

        links.forEach(link => {

            link.addEventListener("mouseleave", event => {

                const isActive = link.classList.contains( activeLinkClassName.slice(1) );

                if (isActive) {

                    link.classList.remove( activeLinkClassName.slice(1) );
                    link.style.pointerEvents = 'none';

                    setTimeout(() => {
                        link.style.pointerEvents = 'auto';
                    }, showHideTime);

                    const linkName = link.getAttribute(linkAttributeName);
                    const currentLabels = document.querySelectorAll(`[${labelAttributeName}="${linkName}"]`);

                    currentLabels.forEach(currentLabel => {
        
                        currentLabel.classList.remove( activeLabelClassName.slice(1) );
        
                        setTimeout(() => {
                            currentLabel.style.visibility = 'hidden';
                        }, showHideTime);
        
                    });
    
                }

            });

        });

    }

    onClick({
        linkAttributeName,
        activeLinkClassName,
        labelAttributeName,
        activeLabelClassName,
        onlyClick,
        missClick,
        showHideTime,
    }) {

        if (!onlyClick) {
            const mediaQueryHover = window.matchMedia('(any-hover: none)');
            if (!mediaQueryHover.matches) return;
        }

        document.addEventListener("click", event => {

            const activeLinks = document.querySelectorAll(activeLinkClassName);
            const activeLabels = document.querySelectorAll(activeLabelClassName);
            const closestLink = event.target.closest(`[${linkAttributeName}]`);
            const isActive = closestLink?.classList.contains( activeLinkClassName.slice(1) );

            if (missClick || closestLink && !isActive) {

                activeLinks.forEach(activeLink => {
                    activeLink.classList.remove( activeLinkClassName.slice(1) );
                });
    
                activeLabels.forEach(activeLabel => {
    
                    activeLabel.classList.remove( activeLabelClassName.slice(1) );
    
                    setTimeout(() => {
                        activeLabel.style.visibility = 'hidden';
                    }, showHideTime);
    
                });
                
            }

            if (closestLink && !isActive) {

                closestLink.classList.add( activeLinkClassName.slice(1) );

                const closestLinkName = closestLink.getAttribute(linkAttributeName);
                const currentLabels = document.querySelectorAll(`[${labelAttributeName}="${closestLinkName}"]`);

                currentLabels.forEach(currentLabel => {

                    currentLabel.classList.add( activeLabelClassName.slice(1) );
                    currentLabel.style.visibility = 'visible';

                });

            } 

        });

    }

    init() {

        this.onLoad(this);
        this.onHover(this);
        this.onClick(this);

    }
}
