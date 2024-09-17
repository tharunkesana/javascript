window.addEventListener("load", () => {
    console.log("Page loaded!");

    const fills = document.querySelectorAll(".fill");
    const empties = document.querySelectorAll(".empty");

    fills.forEach(fill => {
        fill.addEventListener("dragstart", dragStart);
        fill.addEventListener("dragend", dragEnd);
    });

    empties.forEach(empty => {
        empty.addEventListener("dragover", dragOver);
        empty.addEventListener("dragenter", dragEnter);
        empty.addEventListener("dragleave", dragLeave);
        empty.addEventListener("drop", drop);
    });

    function dragStart() {
        this.classList.add("hold");
        setTimeout(() => this.classList.add("invisible"), 0);
    }

    function dragEnd() {
        this.classList.remove("hold", "invisible");
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dragEnter(e) {
        e.preventDefault();
        this.classList.add("hovered");
    }

    function dragLeave() {
        this.classList.remove("hovered");
    }

    function drop() {
        this.classList.remove("hovered");
        this.append(document.querySelector(".hold"));
    }
});
