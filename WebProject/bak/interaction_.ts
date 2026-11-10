export class Interaction {
    public Run() {
        const container = document.body;
        const parent = document.getElementById('imagemap');

        if (container == null) return;
        if (parent == null) return;

        // Core Configuration Parameters
        let zoom = 1.0;
        const baseFontSize = 10;
        const zoomSpeed = 0.1;
        const minZoom = 0.3;
        const maxZoom = 5.0;

        // MASTER COORDINATE SOURCE OF TRUTH (Prevents NaN Parsing Failures)
        let posX = 0;
        let posY = 0;

        let isInteracting = false;

        // Movement Reference Tracking
        let startX = 0;
        let startY = 0;

        // Mobile parameters
        let initialTouchDistance = 0;
        let initialZoom = 1.0;
        let lastTouchCenter = { x: 0, y: 0 };

        // Set initial position safely without waiting for CSS layout evaluations
        parent.style.left = `${posX}px`;
        parent.style.top = `${posY}px`;

        function getDistance(t1, t2) { return Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY); }
        function getCenter(t1, t2) { return { x: (t1.clientX + t2.clientX) / 2, y: (t1.clientY + t2.clientY) / 2 }; }

        // --- MOUSEWHEEL ZOOM (DESKTOP) ---
        window.addEventListener('wheel', (e) => {
            e.preventDefault();

            const mouseX = e.clientX;
            const mouseY = e.clientY;

            // Calculate relative coordinates off the isolated truth variables
            const relativeX = mouseX - posX;
            const relativeY = mouseY - posY;

            const delta = e.deltaY < 0 ? 1 : -1;
            const oldZoom = zoom;
            zoom += delta * zoomSpeed;
            zoom = Math.max(minZoom, Math.min(maxZoom, zoom));

            if (oldZoom === zoom) return;

            parent.style.fontSize = `${zoom * baseFontSize}px`;
            const zoomRatio = zoom / oldZoom;

            // Update the master variables directly
            posX = posX + relativeX * (1 - zoomRatio);
            posY = posY + relativeY * (1 - zoomRatio);

            parent.style.left = `${posX}px`;
            parent.style.top = `${posY}px`;

            // If dragging while scrolling, seamlessly shift the starting anchor
            if (isInteracting && !e.touches) {
                startX = mouseX - posX;
                startY = mouseY - posY;
            }
        }, { passive: false });


        // --- SYNC ENGINE START STATE ---
        function syncInteractionState(e) {
            if (e.touches && e.touches.length === 2) {
                initialTouchDistance = getDistance(e.touches, e.touches);
                initialZoom = zoom;
                lastTouchCenter = getCenter(e.touches, e.touches);
            } else {
                const clientX = e.touches ? e.touches.clientX : e.clientX;
                const clientY = e.touches ? e.touches.clientY : e.clientY;

                startX = clientX - posX;
                startY = clientY - posY;
            }
        }

        container.addEventListener('mousedown', (e) => {
            isInteracting = true;
            syncInteractionState(e);
        });

        container.addEventListener('touchstart', (e) => {
            e.preventDefault();
            isInteracting = true;
            syncInteractionState(e);
        }, { passive: false });


        // --- UNIFIED PROCESSOR MOVE ENGINE ---
        function handleMove(e) {
            if (!isInteracting) return;

            if (e.touches && e.touches.length === 2) {
                // --- MOBILE GESTURES ---
                const currentDistance = getDistance(e.touches, e.touches);
                const currentCenter = getCenter(e.touches, e.touches);

                if (initialTouchDistance === 0) {
                    initialTouchDistance = currentDistance;
                    initialZoom = zoom;
                    lastTouchCenter = currentCenter;
                    return;
                }

                const oldZoom = zoom;
                const scaleFactor = currentDistance / initialTouchDistance;
                zoom = initialZoom * scaleFactor;
                zoom = Math.max(minZoom, Math.min(maxZoom, zoom));

                parent.style.fontSize = `${zoom * baseFontSize}px`;

                const zoomRatio = zoom / oldZoom;
                const relativeX = currentCenter.x - posX;
                const relativeY = currentCenter.y - posY;

                const panX = currentCenter.x - lastTouchCenter.x;
                const panY = currentCenter.y - lastTouchCenter.y;

                posX = posX + relativeX * (1 - zoomRatio) + panX;
                posY = posY + relativeY * (1 - zoomRatio) + panY;

                lastTouchCenter = currentCenter;

            } else {
                // --- DESKTOP MOUSE / ONE-FINGER DRAG ---
                const clientX = e.touches ? e.touches.clientX : e.clientX;
                const clientY = e.touches ? e.touches.clientY : e.clientY;

                posX = clientX - startX;
                posY = clientY - startY;
            }

            parent.style.left = `${posX}px`;
            parent.style.top = `${posY}px`;
        }

        window.addEventListener('mousemove', handleMove);
        window.addEventListener('touchmove', (e) => {
            e.preventDefault();
            handleMove(e);
        }, { passive: false });


        // --- EXIT LOGIC ---
        function handleEnd(e) {
            if (e.touches && e.touches.length > 0) {
                syncInteractionState(e);
            } else {
                isInteracting = false;
                initialTouchDistance = 0;
            }
        }

        window.addEventListener('mouseup', handleEnd);
        window.addEventListener('mouseleave', handleEnd);
        window.addEventListener('touchend', handleEnd);
        window.addEventListener('touchcancel', handleEnd);
    }
}