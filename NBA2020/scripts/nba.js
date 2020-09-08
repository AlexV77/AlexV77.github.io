$(() => {
  $('form').on('submit', addToTeam)
})

// addToTeam function
const addToTeam = () => {
  event.preventDefault()
  const $inputBox = $('#input-box')
  const toTeam = $inputBox.val()
  const $div = $('<div>')
    .addClass('to-team-item')
    .html('<h3>' + toTeam + '</h3>')

  $('.to-team-list').append($div)

  const $button = $('<button>')
    .text('Choose 12 Players for each Team!!')
    .on('click', addToTeam)
    .appendTo($div)
}

//moveToTeam function
const moveToTeam = () => {
  const $toDoDiv = $(event.currentTarget).parent()
  // console.log($toDoDiv)
  $toDoDiv
    .tradeClass('to-TEAM-item')
    .addClass('squadB-item')
    .appendTo($('.squadB'))
    .children()
    .eq(1)
    .text('TRADE')
    .on('click', tradesquadB)
}

// removesquadB function
const tradesquadB = () => {
  $(event.currentTarget)
    .parent()
    .trade()
}
        $.ajax(
            {
							// url: "https://api.sportsdata.io/v3/nba/stats/json/BoxScores=" +  '2015-JUL-31',
              url: "https://api.sportsdata.io/v3/nba/stats/json/Allstars/2020?key=92fb2e21d64942daad78fc40152e335d",
              type: "GET",
              data: {
                 "$limit" : 12,
"Ocp-Apim-Subscription-Key": "92fb2e21d64942daad78fc40152e335d"

}
})
         .then(
           (data) => { //success callback
        //         // $('#season').html(data.Season);
                $('#team').html(data.Team);
        //         // $('#score').html(data.Score);
        //         // ('#opponent').html(data.Opponent);
               $('#name').html(data.Name);
            $('#teamID').html(data.TeamID);
                // $('#plusminus').html(data.PlusMinus);
                // $('#usageratepercentage').html(data.UsageRatePercentage);
                // console.log(data)

            (error) => { //fail callback
                console.log(error);
}
})
