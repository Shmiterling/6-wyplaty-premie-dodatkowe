$(document).ready(function(){
  
  //Wyplaty i premia

  $('#oblicz').click(function(){
    let pracownicy = $('[id^=pracownik]');
    let czas = $('.czas');
    let stawki = $('.stawka')
    let wyplaty = $('.wyplata')

    for (i = 0; i < pracownicy.length; i++){
      
      let wyplata = 0;
      let premia = 0;
      let godziny = 0;
      
      if (czas[i].value > 160){
        godziny = 160;
        premia = (czas[i].value - 160) * stawki[i].value * 2;
      } else {
        godziny = czas[i].value;
        premia = 0;
      }

      if (godziny < 100){
        $(pracownicy[i]).css('background-color','red')
      }

      wyplata = stawki[i].value * godziny + premia;
      wyplaty[i].innerText = wyplata;
    }

    //Lepsi pracownicy

    let arrayPracownicy = [];

    for (i = 0; i < pracownicy.length; i++){
      person = {
        imie: $('.pracownik')[i].innerText,
        godziny: czas[i].value
      }
      arrayPracownicy.push(person);
    }

    
      function quickSort(array){
        if (array.length <= 1){
          return array;
        }
        let pivot = array[0];
        let pivotNum = Number(array[0].godziny);
        let left = [];
        let right = [];
        for (i = 1; i < array.length; i++){
          if (pivotNum < Number(array[i].godziny)){
            left.push(array[i])
          } else {
            right.push(array[i])
          } 
        }
        return quickSort(left).concat(pivot, quickSort(right));
      };


    let lepsi = quickSort(arrayPracownicy)
    $('#najlepsi-pracownicy')[0].innerHTML = '<p>' + lepsi[0].imie + '. Iłość godzin: ' + lepsi[0].godziny + '.</p>' + 
    '<p>' + lepsi[1].imie + '. Iłość godzin: ' + lepsi[1].godziny + '.</p>' + 
    '<p>' + lepsi[2].imie + '. Iłość godzin: ' + lepsi[2].godziny + '.</p>';
  });
});