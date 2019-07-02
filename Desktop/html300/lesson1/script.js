//JQuery short form- doc ready | strint.includes
$(function () {
  //data & variables
  const input = $('.letter');
  const submit = $('.submit1');
  const span = $('.true');
  //submit when clicked
  submit.on('click', function () {
    //retrieves value of input
    const string = input.val();
    //returns True or False depending on if input includes 'a'
    if (string.includes('a')) {
      span.text('TRUE');
    } else {
      span.text('FALSE')
    }
  });
});

//JQuery short form- doc ready | array.entries
$(function () {
  //data & variables
  const input = $(".item");
  const submit = $(".submit2");
  const span = $(".list");
  const list = [];
  //submit when clicked
  submit.on("click", function () {
    const iterator = list.entries();
    //pushes input to array
    list.push(input.val());
    //returns accumulated list calue with key #
    for (const val of iterator) {
      console.log(val);
      span.text(list);
    }
  });
});

//JQuery short form- doc ready
$(function () {
  //data & variables
  const input = $(".input3");
  const submit = $(".submit3");
  const echo = $(".repeated");

  //submit when clicked
  submit.on("click", function () {
    //adds an exclamation point and space between repeated input
    const val = input.val() + "! ";
    //repeats input 3 times
    echo.text(val.repeat(3));
  });
});

//JQuery short form- doc ready
$(function () {
  //data & variables
  const input = $(".input4");
  const submit = $(".submit4");
  const time = $(".military-time");
  const hour = ["12am", "1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"];
  //submit when clicked
  submit.on("click", function () {
    const val = input.val();
    //returns index # and :00 to replect military time
    time.text(hour.findIndex(x => x == val) + ":00");
  });
});


