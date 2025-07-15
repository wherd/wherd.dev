!function () {
    let keyComboTimer = null;
    let previousKey = null;
    let isHelpOpen = false;

    function handleKeyDown(e) {
        if ('Escape' === e.key) {
            closeAllModals();
            return;
        }

        if ('?' === e.key && !this.isHelpOpen) {
            e.preventDefault();
            openHelp();
            return;
        }

        switch (e.key) {
            case 'ArrowLeft':
            case 'h':
                e.preventDefault();
                window.history.back();
                break;

            case 'ArrowRight':
            case 'l':
                e.preventDefault();
                window.history.forward();
                break;

            case 'ArrowDown':
            case 'j':
                e.preventDefault();
                scroll('down');
                break;

            case 'ArrowUp':
            case 'k':
                e.preventDefault();
                scroll('up');
                break;

            case 'g':
                e.preventDefault();
                handleGKey();
                break;

            case 'G':
                e.preventDefault();
                jumpTo('bottom');
                break;
        }
    }

    function handleGKey() {
        // Handle 'gg' key combo
        if ('g' === previousKey) {
            clearTimeout(keyComboTimer);
            previousKey = null;
            jumpTo('top');
            return;
        } else {
            previousKey = 'g';
            clearTimeout(keyComboTimer);
            keyComboTimer = setTimeout(() => { previousKey = null; }, 200);
        }
    }

    function jumpTo(to) {
        window.scrollTo({ top: 'top' === to ? 0 : document.body.scrollHeight, behavior: 'smooth' });
    }

    function scroll(to) {
        if (isHelpOpen) {
            window['helpContent'].scrollTop += 'up' === to ? -50 : 50;
        } else {
            window.scrollBy({ top: 'up' === to ? -150 : 150, behavior: 'smooth' });
        }
    }

    function openHelp() {
        isHelpOpen = true;
        window['helpOverlay'].showModal();
        window['helpContent'].focus();

    }

    function closeAllModals() {
        isHelpOpen = false;
        window['helpOverlay'].close();
    }

    function openSelectedLink(target) {
        if ('A' === target.tagName) {
            window.location.href = target.href;
            return;
        }
    }

    document.addEventListener('keydown', handleKeyDown);

    window['helpToggle'].addEventListener('click', function (e) {
        e.preventDefault();
        openHelp();
    });

    window['helpClose'].addEventListener('click', function (e) {
        e.preventDefault();
        closeAllModals();
    });
}();