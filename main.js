let counter
let counterparagraph
let keydown = false

$(document).ready(() => {
  counter = 0

counterparagraph = document.getElementById("c")
})

$(document).keydown(function(e) {
    if (e.which == 32) {
        return false;
    }
});

function increment(){
    counter = counter + 1
    counterparagraph.textContent = counter
  if ($('#c').text() == '69') {
    $('#c').css('color', 'red')
    $('#c').css('font-size', '55px')
  } else {
    $('#c').css('color', 'white')
    $('#c').css('font-size', '50px')
  }
}

$(document).keydown(async (key) => {
  if (keydown === false) {
    if (key.key === ' ') {
      increment()
      keydown = true
    }
  } else {
    return
  }
})

$(document).keyup(async (key) => {
  if (keydown === true) {
    keydown = false
  } else {
    return
  }
})