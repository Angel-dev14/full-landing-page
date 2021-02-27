$(document).ready(function ()
{
    $(".single-topic").click(function (){
        let topic_title = $(this).get(0).getElementsByClassName("topic-title")[0].innerText;

        localStorage.setItem("TOPIC-TITLE",topic_title)

        location.href = "quiz-topic.html"

    })

    $(".start-btn").click(function ()
    {
        location.href = "quiz-main.html"
    })

    /* MOBILE MENU */


    $("input[type=checkbox]").click(function ()
    {
        if($(this).is(":checked")){
            console.log("ccked")
            $("nav").addClass("drop-down").removeClass("go-up");
        }
        else{
            $("nav").addClass("go-up").removeClass("drop-down");
        }
    })
})