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

})

function hiddenQuadribol(){
  const quadribol = document.querySelector('.quadribol');
  quadribol.classList.add('hidden');
}

function showQuadribol(){
  const quadribol = document.querySelector('.quadribol');
  quadribol.classList.remove('hidden');
}