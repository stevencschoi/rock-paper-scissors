$(function() {
  // declare counter variables
  let wins = 0;
  let losses = 0;
  let ties = 0;
  
  // game options
  const options = [ 'rock', 'paper', 'scissors'];
  
  // declare results array based on possible outcomes of rock paper scissors
  // user win = u, cpu win = c, tie = t

  // user picks:     | rock | paper | scissors
  // cpu picks: rock |   t  |   c   |  u
  //            paper|   u  |   t   |  c
  //         scissors|   c  |   u   |  t

  const results = [ 
    ['t', 'c', 'u'], 
    ['u', 't', 'c'], 
    ['c', 'u', 't']
  ];

  // commentary based on results object:
  const resultsCommentary = {
    't': `It's a tie!'`,
    'u': 'You won!',
    'c': 'You lost -________-'
  };

  $('.rock-paper-scissors').on('submit', function(event){
    // user choice
    event.preventDefault();
    // take user choice and convert into index from options array
    let userChoice = $('input[name="game"]:checked').val();
    let userIndex = options.indexOf(userChoice);
    $('.result-user').text(`You chose ${userChoice}!`);

    // calculate cpu choice as an index of the array [random integer (0 < x < 1 * 3 options)]
    const randomNum = Math.floor(Math.random() * 3);
    const cpuChoice = options[randomNum];
    $('.result-cpu').text(`The computer chose ${cpuChoice}!`);

    console.log(`You selected ${userChoice}. The CPU selected ${cpuChoice}.`);

    const gameResult = results[userIndex][randomNum];

    if (gameResult === 'u') {
      wins++;
      console.log(wins);
      $('.wins').text(wins);
      $('.commentary').text("You won!! Are you a professional?");
    } else if (gameResult === 'c') {
      losses++;
      console.log(losses);
      $('.losses').text(losses);
      $('.commentary').text("Damn, you lost! Be better.");
    } else {
      ties++;
      console.log(ties);
      $('.ties').text(ties);
      $('.commentary').text("It's a tie!");
    }

    return resultsCommentary[gameResult];
  })
});





