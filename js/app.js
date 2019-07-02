document.addEventListener('DOMContentLoaded', function() {

    const prevArr = document.querySelector('.gallery1 .prev');
    const nextArr = document.querySelector('.gallery1 .next');
    const thumbs = document.querySelector('.gallery1 .thumbs');
    const thumb = document.querySelectorAll('.gallery1 .thumb');
    const photo = document.querySelector('.gallery1 .photo img');
    const name = document.querySelector('.gallery1 .name');
    const job = document.querySelector('.gallery1 .job');

    thumbs.addEventListener('scroll', () => {
        if(thumbs.scrollLeft < 1) {
            prevArr.classList.add('hide');
        } else {
            prevArr.classList.remove('hide');
        }

        if(thumbs.offsetWidth + thumbs.scrollLeft === thumbs.scrollWidth) {
            nextArr.classList.add('hide');
        } else {
            nextArr.classList.remove('hide');
        }
    });

    thumb.forEach(item => {
        if(item.classList.contains('active')) {
            item.lastElementChild.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        }

        item.addEventListener('click', () => {
            let id = item.id;
            thumb.forEach(item => {
               item.classList.remove('active');
               item.lastElementChild.style.backgroundColor = 'rgba(255, 255, 255, .25)';
            });
            item.classList.add('active');
            if(item.classList.contains('active')) {
                item.lastElementChild.style.backgroundColor = 'rgba(255, 255, 255, 0)';
            }
            photo.src = `./img/cat${id}.jpg`;
            name.innerHTML = item.dataset.name;
            job.innerHTML = item.dataset.job;
            photo.classList.add('fade');
            photo.addEventListener('animationend', () => {
                photo.classList.remove('fade');
            })
        });
    });

    nextArr.addEventListener('click', () => {
        scroll(thumbs, 'right');
    });

    prevArr.addEventListener('click', () => {
        scroll(thumbs, 'left');
    });

});

const scroll = (element, direction) => {
    let progress = 0;
    let timer = setInterval(() => {
        if(direction === 'left') {
            element.scrollLeft -= 1;
        } else {
            element.scrollLeft += 1;
        }
        progress += 1;
        if(progress >= 77) {
            clearInterval(timer);
        }
    }, 5);
};