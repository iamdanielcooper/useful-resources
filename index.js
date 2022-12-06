const moreInfoTags = document.querySelectorAll('.more-info-trigger');

const toggleMoreInfo = e => {
    const moreInfoSection = e.target.parentElement.querySelector('.more-info');

    if (moreInfoSection.style.display != 'block') {
        moreInfoSection.style.display = 'block';
        moreInfoSection.style.height = 'auto';
    } else {
        moreInfoSection.style.display = 'none';
        moreInfoSection.style.height = '0';
    }
};

moreInfoTags.forEach(tag => {
    tag.addEventListener('click', e => toggleMoreInfo(e));
});

console.log('Hello (:');
