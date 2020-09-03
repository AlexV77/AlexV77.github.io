$(() => {
  // counter variable
  let currentImgIndex = 0;
  // length variable
  const numOfImages = $('.russianriver-images').children().length - 1;

  // NEXT BUTTON
  // when we click on the next button
  $('.next').on('click', () => {
    // hide the current image
    $('.russianriver-images').children().eq(currentImgIndex).hide();
    // if the current image index is less than the number of images we have
    if (currentImgIndex < numOfImages) {
      // increment the image index
      currentImgIndex++;
    } else {
      // otherwise, set the image index back to 0
      currentImgIndex = 0
    }
    // show the next image
    $('.russianriver-images').children().eq(currentImgIndex).show();
  })

  // PREVIOUS BUTTON
  $('.previous').on('click', () => {
    // hide the current image
    $('.russianriver-images').children().eq(currentImgIndex).hide();
    // if the image index is greater than 0
    if (currentImgIndex > 0) {
      // decrement index
      currentImgIndex--;
    } else {
      // otherwise set currentImgIndex equal to the last image index
      currentImgIndex = numOfImages;
    }
    // show the previous image
    $('.russianriver-images').children().eq(currentImgIndex).show();
  })
})
$(() => {
// console.log('Dank Beer Project connected to app.js!');
// console.log('russianriver connected to app.js!');

      $('.minus-btn').on('click', function(e) {
    		e.preventDefault();
    		var $this = $(this);
    		var $input = $this.closest('div').find('input');
    		var value = parseInt($input.val());

    		if (value > 1) {
    			value = value - 1;
    		} else {
    			value = 0;
    		}

        $input.val(value);

    	});

    	$('.plus-btn').on('click', function(e) {
    		e.preventDefault();
    		var $this = $(this);
    		var $input = $this.closest('div').find('input');
    		var value = parseInt($input.val());

    		if (value < 100) {
      		value = value + 1;
    		} else {
    			value =100;
    		}

    		$input.val(value);
    	});

      $('.like-btn').on('click', function() {
        $(this).toggleClass('is-active');
      });
( document ).ready( () => {
                $( '.home-banner' ).click( {
                    autoplay: true,
                    autoplaySpeed: 3000,
                    nextArrow: '<i class="fa fa-chevron-right"></i>',
                    prevArrow: '<i class="fa fa-chevron-left"></i>'
                } );
            });
            const list = []

            $(() => {
              $('#submit-btn').on('click',
                // console.log('clicked')
                const inputValue = $('#input-box').val()
                // console.log(inputValue)
              })
              form
              $('form').on('submit', event => {
                event.preventDefault()
                const inputValue = $('#todo').val()
                console.log(inputValue)
                list.push(inputValue)
                console.log(list)
                $(event.currentTarget).trigger('reset')
                render()
              })

              const render = () => {
                const lastIndexOfList = list.length - 1
                const $newLi = $('<li>').text(list[lastIndexOfList])
                $newLi.on('click', event => {
                  $(event.currentTarget).css('text-decoration', 'line-through')
                })
                $('ul').append($newLi)
              }
            })


    $('form').on('submit', (event)=>{

        event.preventDefault();
 const userInput = $('input[type="text"]').val();
 $('form').trigger('reset');
 $.ajax(
     {
             url:'https://data.opendatasoft.com/api/records/1.0/search/?dataset=open-beer-database%40public-us&q=russian+river&facet=style_name&facet=name_breweries',
             type: "GET",
             data: {
               "$limit": 10,

             }
         }
       ).then(
             (data)=>{ //success callback
                 $('#style_name').html(data.Beer_Style);
                 $('#cat_name').html(data.Beer_Category);
                 $('#name').html(data.Name);
                 $('#descript').html(data.Description);
                 $('#abv').html(data.ABV);

             },
             (error)=>{ // fail callback
                 console.log(error);
             }
         );
     })
