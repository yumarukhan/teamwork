const comments = document.querySelector('.comments');
const previousBttn = document.getElementById('previous');
const nextBttn = document.getElementById('next');
let currentInd = 0;

function moveComments() {
    const commentWidth = document.querySelector('.comment').offsetWidth;
    const numComments = document.querySelectorAll('.comment').length;

    if (currentInd < 0) {
        currentInd = numComments - 1;
    }

    if (currentInd >= numComments) {
        currentInd = 0;
    }

    const newPosition = -currentInd * commentWidth;
    comments.style.transform = `translateX(${newPosition}px)`;
}

previousBttn.addEventListener('click', () => {
    currentInd--;
    moveComments();
});

nextBttn.addEventListener('click', () => {
    currentInd++;
    moveComments();
});

// Initial move to ensure the first comment is shown
moveComments();