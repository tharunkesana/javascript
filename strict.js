const container = document.querySelector('.container');

if (container) {
    console.log("DOM content loaded!");

    const fills = container.querySelectorAll(".fill");
    const empties = container.querySelectorAll(".empty");

    fills.forEach(fill => {
        fill.addEventListener("dragstart", handleDragStart);
        fill.addEventListener("dragend", handleDragEnd);
    });

    empties.forEach(empty => {
        empty.addEventListener("dragover", handleDragOver);
        empty.addEventListener("dragenter", handleDragEnter);
        empty.addEventListener("dragleave", handleDragLeave);
        empty.addEventListener("drop", handleDrop);
    });

    function handleDragStart() {
        this.classList.add("hold", "invisible");
    }

    function handleDragEnd() {
        this.classList.remove("hold", "invisible");
    }

    function handleDragOver(e) {
        e.preventDefault();
    }

    function handleDragEnter(e) {
        e.preventDefault();
        this.classList.add("hovered");
    }

    function handleDragLeave() {
        this.classList.remove("hovered");
    }

    function handleDrop() {
        this.classList.remove("hovered");
        const draggedElement = container.querySelector(".hold");
        if (draggedElement) {
            this.append(draggedElement);
        }
    }
} else {
    console.error('Container element not found.');
}