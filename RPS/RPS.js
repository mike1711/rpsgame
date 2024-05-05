let score = JSON.parse(localStorage.getItem('score'));

if(score === null){
      score = {
            Win: 0,
            Lose: 0,
            Tie: 0
      };
}
skorelemen()

function Players(Playerpick){
      const hasil = BotMove()
      let result = '';

      if(Playerpick === 'Rock'){
             if(hasil === 'Rock'){
                  result = 'Tie'
            } else if (hasil === 'Paper'){
                  result = 'You Lose'
            } else if(hasil === 'Scissors'){
                  result = 'You Win'
            }
      }

      else if(Playerpick === 'Paper'){
            if(hasil === 'Rock'){
                  result = 'You Win'
            }
            else if(hasil === 'Paper'){
                  result = 'Tie'
            }
            else if(hasil === 'Scissors'){
                  result = 'You Lose'
            }
      }
     
      else if(Playerpick === 'Scissors'){
            if(hasil === 'Rock'){
                  result = 'You Lose'
            } else if(hasil === 'Paper'){
                  result = 'You Win'
            } else if (hasil === 'Scissors'){
                  result = 'Tie'
            }
      }

      if(result === 'You Win'){
            score.Win += 1;
      }else if (result === 'You Lose'){
            score.Lose += 1;
      } else if(result === 'Tie'){
            score.Tie += 1;
      }
      skorelemen();
      localStorage.setItem('score', JSON.stringify(score));
      
      document.querySelector('.output-info').innerHTML = `${result}`
      document.querySelector('.pick-output').innerHTML = `  You:  <img class="gambar-output" src="image rps/${Playerpick}-emoji.png">
      <img class="gambar-output" src="image rps/${hasil}-emoji.png">
      Computer`
}

function BotMove(){
      const randomresult = Math.random();
      let hasil = '';

      if(randomresult >= 0 && randomresult <= 1 / 3){
            hasil = 'Rock'
      } else if(randomresult >= 1 / 3 && randomresult <= 2 / 3){
            hasil = 'Paper'
      } else if (randomresult >= 2 / 3 && randomresult <= 1){
            hasil = 'Scissors'
      } 
      return hasil;
} 

function skorelemen(){
      document.querySelector('.output-score')
      .innerHTML = `Win: ${score.Win}  Lose: ${score.Lose}  Tie: ${score.Tie}`
}