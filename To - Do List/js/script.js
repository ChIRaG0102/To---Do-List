// Ganpati Bappa Morya

const Gsap = () => {
    var tl = gsap.timeline();

    tl.from(".box h1", {
        y: 120,
        opacity: 0,
        delay: 0.3,
        duration: 1.3,
        stagger: 0.2
    });
}

Gsap();

const bottom = document.querySelector(".bottom");
let input = document.querySelector("#text");
const add = document.querySelector(".add");
let arr = [];
let task;

add.addEventListener("click", () => {
    // console.log("click");
    task = input.value;

    if (task == "") {
        alert("Enter the Task First")
    }
    else {
        arr.push({ task });
        renderList();
    }
});

const renderList = () => {
    let clutter = "";

    arr.forEach((elem, id) => {
        clutter += `<div class="list">
                        <div class="one">
                            <label class="custom-checkbox">
                                <input type="checkbox">
                                <span></span>
                            </label>                           
                        </div>
                        <div class="two">
                            <h2>
                                ${id + 1} : ${elem.task}
                            </h2>
                        </div>
                        <div class="three">
                            <button class="delete" id="${id}">DELETE</button>
                        </div>
                    </div>`
    });

    bottom.innerHTML = clutter;
    input.value = "";

    const del = document.querySelectorAll(".delete");
    del.forEach(button => {
        button.addEventListener("click", (elem) => {
            // console.log(elem.target.id);
            let delId = elem.target.id;
            deleteTask(delId);
        })
    });
}

const deleteTask = (delValue) => {
    arr.splice(delValue, 1);
    renderList();
}

