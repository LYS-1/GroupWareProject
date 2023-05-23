
// DepartmentList
const nameKey = "name";
const childrenKey = "departmentVOs";
let treeHtml;
$.ajax({
    type: "GET",
    dataType: "json",
    url: "/department/tree",
    success: function (response) {
        treeHtml=generateTreeHTML(response);
        // document.getElementById('tree-container').innerHTML = treeHtml;
        $("#tree-container").html(treeHtml);
    }
    ,
    error: function () {
        console.log("error")
    }

})



//재귀함수
function generateTreeHTML(data) {
    let html = '<ul class="tree">'; 
  
    for (const item of data) {
      html += '<li>';
  
      // Display the name or key of the current node
      html += '<span><a href="/department/detail?id='+item.id+'">'+ item.name + '</a></span>';
  
      // Check if the current node has children
      if (item.departmentVOs && item.departmentVOs.length > 0) {//child item이 있으면 재귀함수로 한번 더 실행.
        html += generateTreeHTML(item.departmentVOs);
      }
  
      html += '</li>';
    }
  
    html += '</ul>';
    return html;
  }


  $.fn.extend({
    treed: function (o) {
      
      var openedClass = 'glyphicon-minus-sign';
      var closedClass = 'glyphicon-plus-sign';
      
      if (typeof o != 'undefined'){
        if (typeof o.openedClass != 'undefined'){
        openedClass = o.openedClass;
        }
        if (typeof o.closedClass != 'undefined'){
        closedClass = o.closedClass;
        }
      };
      
        //initialize each of the top levels
        var tree = $(this);
        tree.addClass("tree");
        tree.find('li').has("ul").each(function () {
            var branch = $(this); //li with children ul
            branch.prepend("<i class='indicator glyphicon " + closedClass + "'></i>");
            branch.addClass('branch');
            branch.on('click', function (e) {
                if (this == e.target) {
                    var icon = $(this).children('i:first');
                    icon.toggleClass(openedClass + " " + closedClass);
                    $(this).children().children().toggle();
                }
            })
            branch.children().children().toggle();
        });
        //fire event from the dynamically added icon
      tree.find('.branch .indicator').each(function(){
        $(this).on('click', function () {
            $(this).closest('li').click();
        });
      });
        //fire event to open branch if the li contains an anchor instead of text
        tree.find('.branch>a').each(function () {
            $(this).on('click', function (e) {
                $(this).closest('li').click();
                e.preventDefault();
            });
        });
        //fire event to open branch if the li contains a button instead of text
        tree.find('.branch>button').each(function () {
            $(this).on('click', function (e) {
                $(this).closest('li').click();
                e.preventDefault();
            });
        });
    }
});

//Initialization of treeviews

$('#tree1').treed();

$('#tree2').treed({openedClass:'glyphicon-folder-open', closedClass:'glyphicon-folder-close'});

$('#tree3').treed({openedClass:'glyphicon-chevron-right', closedClass:'glyphicon-chevron-down'});