function barlistener(){
    $(".bars").click(function(e){
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
    })  

}



function changeRoute(){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    // console.log(hashTag + " " + pageID);

    if(pageID !== "") {

        $.get(`pages/${pageID}/${pageID}.html`, function(data){
            console.log("data " + data);
            $("#app").html(data); 
        })

    } else {
        $.get(`pages/browse/browse.html`, function(data){
            console.log("data " + data);
            $("#app").html(data); 
        })
    }
}

function initURLlisteners(){
    $(window).on("hashchange", changeRoute); 
    changeRoute();
}


function buttonlistener(){
    $(document).on('click', '.image', function(e){
      console.log("View");
    });
  }

  function editlistener(){
    $(document).on('click', '.edit', function(e){
      console.log("edit");
    });
  }

  function deletelistener(){
    $(document).on('click', '.delete', function(e){
      console.log("delete");
    });
  }


$(document).ready(function(){
    initURLlisteners();
    barlistener();
    buttonlistener();
    editlistener();
    deletelistener();
});
