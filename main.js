const rockEl = document.getElementById("rock")
const paperEl = document.getElementById("paper")
const scissorsEl = document.getElementById("scissors")
const resultEl = document.getElementById("result")
const computerScore = document.querySelector("p#computerscores")
const humanScore = document.querySelector("p#humanscores")
const commentEl = document.getElementById("comment")
const startGameButton = document.getElementById('startgame')
const startGameButton2 = document.getElementById('startgame2')
const gameNameEl = document.getElementById("gamename")
const stopGameButton = document.getElementById("exit")
const playersEl = document.getElementById("players")
const bannerEl = document.getElementById('banner1')
const banner1Content = document.getElementById('banner1-content')
const bannerEl2 = document.getElementById('banner2')
const humanImage = document.getElementById("humanplayer")
const computerImage = document.getElementById("computerplayer")
const vsEl = document.getElementById("vs")
let humanPoint = null
let computerPoint = null



gameSigns = [
  1, //rock
  2 ,//paper
  3 //scissors
  ]
  
  
startGameButton.addEventListener('click', function() {
  renderGame()
  rockEl.innerHTML = '<p style="font-size: 60px;">🤟🏾</p>'
  paperEl.innerHTML = `<p style="font-size: 60px;">🖐🏾</p>`
  scissorsEl.innerHTML = `<p style="font-size: 60px;">✌🏾</p>`
  startGameButton.innerHTML = `<style>
  #startgame {
    display: none;
  }
  #humanplayer {
    display: none;
  }
  #computerplayer {
    display: none;
  }
  #vs {
    display: none;
  }
  </style>`
  stopGameButton.innerHTML = `Stop Game <style>
  #exit {
    visibility: visible;
  }
  </style>`
  
})


stopGameButton.addEventListener('click', function() {
  stopGameButton.innerHTML = `<style>
  #startgame {
    display: none;
  }
  #players {
    display: block;
  }
  #paper {
    display: none;
  }
  #rock {
    display: none;
  }
  #scissors {
    display: none;
  }
  #comment {
    display: none;
  }
  #result {
    display: none;
  }
  #humanscores {
    display: none;
  }
  #computerscores {
    display: none;
  }
  #startgame2 {
    display: block;
  }
  </style>`
  
})


startGameButton2.addEventListener("click", function() {
  renderGame()
})

function renderGame() {


rockEl.addEventListener("click", function() {
  let rockChoice = gameSigns[0]
  let computerChoice = Math.floor( Math.random()*3 ) +1

  if (rockChoice === gameSigns[0] && computerChoice === 1) {
    resultEl.innerHTML = '<h1 style="font-size: 50px;">🤟🏽</h1>'
    commentEl.innerHTML = '<p>➿</p>'
    humanPoint += 0
    computerPoint += 0
    if (humanPoint === 10) {
      bannerEl.innerHTML = `<style>
      #banner1 {
        display: block;
      }
      #banner1-content {
        display: block;
      }
      </style>`
    }
    if (computerPoint === 10) {
      bannerEl.innerHTML = `<style>
      #banner1 {
      display: block;
      }
      #banner2 {
        display: block;
      }
      </style>`
    }
    humanScore.innerText = "👨🏽‍🦱  " + humanPoint
    computerScore.innerText = "💩 " + computerPoint
  } else if (rockChoice === gameSigns[0] && computerChoice === 2) {
    resultEl.innerHTML = '<h1 style="font-size: 50px;"> 🖐🏽 </h1>'
    commentEl.innerHTML = '<p>😭</p>'
    humanPoint += 0
    computerPoint += 1
    if (humanPoint === 10) {
      bannerEl.innerHTML = `<style>
          #banner1 {
            display: block;
          }
          #banner1-content {
            display: block;
          }
          </style>`
    }
    if (computerPoint === 10) {
      bannerEl.innerHTML = `<style>
          #banner1 {
          display: block;
          }
          #banner2 {
            display: block;
          }
          </style>`
    }
    humanScore.innerText = "👨🏽‍🦱  " + humanPoint
    computerScore.innerText = "💩 " + computerPoint
  }else {
    result.innerHTML = '<h1 style="font-size: 50px;"> ✌🏽</h1>'
    commentEl.innerHTML = '<p>🥳</p>'
    humanPoint += 1
    computerPoint += 0
    if (humanPoint === 10) {
      bannerEl.innerHTML = `<style>
          #banner1 {
            display: block;
          }
          #banner1-content {
            display: block;
          }
          </style>`
    }
    if (computerPoint === 10) {
      bannerEl.innerHTML = `<style>
          #banner1 {
          display: block;
          }
          #banner2 {
            display: block;
          }
          </style>`
    }
    humanScore.innerText = "👨🏽‍🦱  " + humanPoint
    computerScore.innerText = "💩 " + computerPoint
  }
})



paperEl.addEventListener("click", function() {
  let paperChoice = gameSigns[1]
  let computerChoice = Math.floor( Math.random()*3 ) +1

  if (paperChoice === gameSigns[1] && computerChoice === 1) {
    resultEl.innerHTML = '<h1 style="font-size: 50px;"> 🤟🏽 </h1>'
    commentEl.innerHTML = '<p>🥳</p>'
    humanPoint += 1
    computerPoint += 0
     if (humanPoint === 10) {
       bannerEl.innerHTML = `<style>
           #banner1 {
             display: block;
           }
           #banner1-content {
             display: block;
           }
           </style>`
     }
     if (computerPoint === 10) {
       bannerEl.innerHTML = `<style>
           #banner1 {
           display: block;
           }
           #banner2 {
             display: block;
           }
           </style>`
     }
    humanScore.innerText = "👨🏽‍🦱  " + humanPoint
    computerScore.innerText = "💩 " + computerPoint
  } else if (paperChoice === gameSigns[1] && computerChoice === 2) {
    resultEl.innerHTML = ' <h1 style="font-size: 50px;"> 🖐🏽 </h1>'
    commentEl.innerHTML = '<p>➿</p>'
    humanPoint += 0
    computerPoint += 0
     if (humanPoint === 10) {
       bannerEl.innerHTML = `<style>
           #banner1 {
             display: block;
           }
           #banner1-content {
             display: block;
           }
           </style>`
     }
     if (computerPoint === 10) {
       bannerEl.innerHTML = `<style>
           #banner1 {
           display: block;
           }
           #banner2 {
             display: block;
           }
           </style>`
     }
    humanScore.innerText = "👨🏽‍🦱  " + humanPoint
    computerScore.innerText = "💩 " + computerPoint
  } else {
    result.innerHTML = '<h1 style="font-size: 50px;"> ✌🏽</h1>'
    commentEl.innerHTML = '<p>😭</p>'
    humanPoint += 0
    computerPoint += 1
      if (humanPoint === 10) {
        bannerEl.innerHTML = `<style>
            #banner1 {
              display: block;
            }
            #banner1-content {
              display: block;
            }
            </style>`
      }
      if (computerPoint === 10) {
        bannerEl.innerHTML = `<style>
            #banner1 {
            display: block;
            }
            #banner2 {
              display: block;
            }
            </style>`
      }
    humanScore.innerText = "👨🏽‍🦱  " + humanPoint
    computerScore.innerText = "💩 " + computerPoint
  }
})






scissorsEl.addEventListener("click", function() {
  let rockChoice = gameSigns[2]
  let computerChoice = Math.floor( Math.random()*3 ) +1
  
  if (rockChoice === gameSigns[2] && computerChoice === 1) {
    resultEl.innerHTML = '<h1 style="font-size: 50px;"> 🤟🏽</h1>'
    commentEl.innerHTML = '<p>😭</p>'
    humanPoint += 0
    computerPoint += 1
     if (humanPoint === 10) {
       bannerEl.innerHTML = `<style>
           #banner1 {
             display: block;
           }
           #banner1-content {
             display: block;
           }
           </style>`
     }
     if (computerPoint === 10) {
       bannerEl.innerHTML = `<style>
           #banner1 {
           display: block;
           }
           #banner2 {
             display: block;
           }
           </style>`
     }
    humanScore.innerText = "👨🏽‍🦱  " + humanPoint
    computerScore.innerText = "💩 " + computerPoint
  } else if (rockChoice === gameSigns[2] && computerChoice === 2) {
    resultEl.innerHTML = '<h1 style="font-size: 50px;"> 🖐🏽 </h1>'
    commentEl.innerHTML = '<p>🥳</p>'
    humanPoint += 1
    computerPoint += 0
     if (humanPoint === 10) {
       bannerEl.innerHTML = `<style>
           #banner1 {
             display: block;
           }
           #banner1-content {
             display: block;
           }
           </style>`
     }
     if (computerPoint === 10) {
       bannerEl.innerHTML = `<style>
           #banner1 {
           display: block;
           }
           #banner2 {
             display: block;
           }
           </style>`
     }
    humanScore.innerText = "👨🏽‍🦱  " + humanPoint
    computerScore.innerText= "💩 " + computerPoint
  } else {
    result.innerHTML = '<h1 style="font-size: 50px;"> ✌🏽</h1>'
    commentEl.innerHTML = '<p>➿</p>'
    humanPoint += 0
    computerPoint += 0
    if (humanPoint === 10) {
      bannerEl.innerHTML = `<style>
          #banner1 {
            display: block;
          }
          #banner1-content {
            display: block;
          }
          </style>`
    }
    if (computerPoint === 10) {
      bannerEl.innerHTML = `<style>
          #banner1 {
          display: block;
          }
          #banner2 {
            display: block;
          }
          </style>`
    }
    humanScore.innerText = "👨🏽‍🦱  " + humanPoint
    computerScore.innerText = "💩 " + computerPoint
    
  }
})
}
