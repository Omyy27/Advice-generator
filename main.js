document.addEventListener('DOMContentLoaded', function () {
  function showQuote() {
    var idAdvice = document.querySelector('.number-quote');
    var textAdvice = document.querySelector('.quote');
    let arrTo = [];
    fetch('https://api.adviceslip.com/advice').then(response => (
        response.json()
      ))
      .then(json => { 
        var keys = Object.keys(json);
        keys.forEach(function(key){
          arrTo.push(json[key]);
        });
        arrTo.forEach(element => {
          // console.log(element)
          idAdvice.innerHTML = element.id 
          textAdvice.innerHTML = element.advice 
        });
      });
  }
  showQuote();
  var btnGenerate = document.querySelector('.btngen');
  btnGenerate.addEventListener('click', showQuote);
});
 


