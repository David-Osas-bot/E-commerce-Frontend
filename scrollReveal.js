function revealOnScroll()
{
    // get the name of the class
    const reveals = document.querySelectorAll('.reveal');

    // loop through it
    for(let i = 0; i < reveals.length; i++)
    {
        const windowHeight = window.innerHeight;

        const elementTop = reveals[i].getBoundingClientRect().top;

        const elementVisible = 100;

        if(elementTop < windowHeight - elementVisible)
        {
            reveals[i].classList.add('active');
        }
        else
        {
            reveals[i].classList.remove('active');
        }

    }
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();