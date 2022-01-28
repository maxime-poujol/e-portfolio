//header
if(document.getElementById('navbar')){
    const header = document.getElementById('navbar');

//padding-top body
    if(document.getElementById('homepage') === null){
        document.body.style.marginTop = header.offsetHeight + "px";
    }

    window.onscroll = function() {
        const top = window.scrollY;
        if(top <= (header.offsetHeight * 2)) {
            const val = top/(header.offsetHeight*2);
            header.style.backgroundColor = 'rgba(255, 255, 255,'+ val +' )';
            header.style.borderBottom = (val) * 3 + 'px solid';
            header.style.borderImage = 'var(--border-btm-color) 50';
            if(header.classList.contains('border-bottom')){
                header.classList.remove('border-bottom', 'border-3', 'border-bottom-color');
            }
        }else if(!header.classList.contains('border-bottom')){
            header.classList.add('border-bottom', 'border-3', 'border-bottom-color');
        }
    }
}