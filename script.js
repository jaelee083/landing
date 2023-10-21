
let grid = document.querySelectorAll('.item');

grid.forEach((item) => 
{
    item.addEventListener('mouseenter', () => 
    {
        item.querySelector('.n').style.opacity  = '0';
        item.querySelector('.r').style.opacity = '1';
    });

    item.addEventListener('mouseleave', () => 
    {
        item.querySelector('.n').style.opacity  = '1';
        item.querySelector('.r').style.opacity = '0';
    });
});