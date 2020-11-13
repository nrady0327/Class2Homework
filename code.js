$(document).ready(function ()
{
   //create rules
    var myrules =
        {
            height:
                {
                    required: true,
                    min: 59,
                    max: 79,
                    digits: true
                },
            weight:
                {
                    required: true,
                    mix: 88,
                    max: 353,
                    digits: true
                }

        };
    //create error messages
    var myMessages=
        {
            height:
                {
                    required: "Need to enter a value",
                    min: "Too small",
                    max: "Too big",
                    digits: "You're bad at this form!"
                },
            weight:
                {
                    required: "Need to enter a value",
                    min: "Too small",
                    max: "Too big",
                    digits: "You're bad at this form!"
                }
        };

$("#calcButton").click(calculate);
function calculate()
{
    //grab the height
    var totalHeight = $("#height").val();

    //grab the weight
    var totalWeight = $("#weight").val();

    //calculations
    var totalBMI =(totalWeight/totalHeight)*100;

    if(totalBMI<=100)
    {
        $("#underWeightOutput").text(totalBMI.toFixed(2));
    }
    else if(totalBMI>100 && totalBMI<150)
    {
        $("#healthyOutput").text(totalBMI.toFixed(2));
    }
    else if(totalBMI>=150 && totalBMI <175)
    {
        $("#overWeightOutput").text(totalBMI.toFixed(2));
    }
    else
        {
            $("#obeseOutput").text(totalBMI.toFixed(2));
        }



}
//validate function
    $("form").validate(
        {
            submitHandler: calculate,
            rules: myRules,
            messages: myMessages

        })



});