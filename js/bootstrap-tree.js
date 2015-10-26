$(window).load(function() {
    //check if checkboxes are checked and highlight on window load
    $("input[type='checkbox']:checked").each(function(i, val){
        if( $(val).parent().hasClass("parent_li") ){       
           $(val).parent('.parent_li').children('span').addClass("highlight");
        } else {
            $(val).parent('li').addClass("highlight");
        }
    });
});


$(document).ready(function() {
//reset button clears all the selections
$('.reset a').on('click', function(){
    $("input[type='checkbox']").prop('checked', false);
    $('li').removeClass('highlight');
    $('span').removeClass('highlight');
    $('b').empty();
});

//checkbox functionality
$(function checkbox() {

    $("input[type='checkbox']").change(function () {

        if ($(this).siblings('ul').length > 0) {
            var children = $(this).siblings('ul').find("input[type='checkbox']:not([disabled])");
            children.prop('checked', this.checked).change();
            // $(this).parent('li').children('span').toggleClass('highlight');
        }
        else {
            var item = $(this).parent('li');
            this.checked ? item.addClass('highlight') : item.removeClass('highlight');
            //console.log( $(this).parent().parent().find('> li' ).find('input:checked').length);

            //this chunk checks the parent when all children are checked, and uncheck parent when all children are unchecked
             var counter =  $(this).parent().parent().find("input[type='checkbox']:checked:not([disabled])").length;

            if( counter == 0){
                $(this).parent('li').parent('ul').parent('.parent_li').children('span').removeClass("highlight");
                $(this).parent('li').parent('ul').parent('.parent_li').children('input').prop('checked', false);
            }

            if(counter == $(this).parent().parent().find("input[type='checkbox']:not([disabled])").length){
                $(this).parent('li').parent('ul').parent('.parent_li').children('span').addClass("highlight");
                $(this).parent('li').parent('ul').parent('.parent_li').children('input').prop('checked', true);
            }

            //count how many children are selected

            var parentSpan = $(this).parent('li').parent('ul').parent('.parent_li').children('span').children('b');
            parentSpan.text( " (" + counter + ")" );
           
        }
    });
});

//collapse and expand functionality
$('.tree > ul').attr('role', 'tree').find('ul').attr('role', 'group');
$('.tree').find('li:has(ul)').children("span").children("i").addClass('icon-plus-sign');
$('.tree').find('li:not(:has(ul))').children("span").children("i").addClass('icon-blank');

    $('.tree').find('li:has(ul)').addClass('parent_li').attr('role', 'treeitem').find(' > span').attr('title', 'Collapse this branch').on('click', function (e) {
        var children = $(this).parent('li.parent_li').find(' > ul > li');

        if (children.is(':visible')) {
    		children.hide('fast');
    		$(this).attr('title', 'Expand this branch');
            $(this).find(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
        } 
        else {
    		children.show('fast');
    		$(this).attr('title', 'Collapse this branch');
            $(this).find(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
        }
        e.stopPropagation();

    });

//disable children and parent functionality
$(".parent_li").each(function(i, val){
    var totalChildren = $(val).children('ul').children('li').children("input[type='checkbox']").length;
    var disabledChidren = $(val).children('ul').children('li').children("input[type='checkbox']:disabled").length;
    console.log(totalChildren);
    console.log(disabledChidren);

    if(totalChildren == disabledChidren){
        $(val).children("input[type='checkbox']").attr("disabled", true);
        $(val).children('span').addClass('unavailable');

    }
});

});


