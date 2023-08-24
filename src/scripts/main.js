document.addEventListener('DOMContentLoaded', function(){
  const titleLogo = document.querySelector('.title');
  const titleHeigth = titleLogo.clientHeight;

  let position = window.scrollY;

  window.addEventListener('scroll',function(){
    const currentPosition = window.scrollY;
    const quadribol = document.querySelector('.quadribol');

    if(currentPosition < titleHeigth){
      hiddenQuadribol();
    } else{
      showQuadribol();
    }

    if(currentPosition > position){
      quadribol.style.transform = 'rotate(90deg)';
    }else{
      quadribol.style.transform = 'rotate(180deg)';
    }
  })

  window.addEventListener('load', function () {
    const titleImage = document.querySelector('.logo-title')
    setTimeout(function () {
      titleImage.style.opacity = 1
      titleImage.style.transform = 'scale(1.05)'

    }, 500)
})
})

function hiddenQuadribol(){
  const quadribol = document.querySelector('.quadribol');
  quadribol.classList.add('hidden');
}

function showQuadribol(){
  const quadribol = document.querySelector('.quadribol');
  quadribol.classList.remove('hidden');
}