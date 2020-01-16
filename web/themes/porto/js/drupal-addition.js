jQuery(document).ready(function(){

	jQuery(".lastchild").html(function(){
	  var text= jQuery(this).text().trim().split(" ");
	  var last = text.pop();
	  return text.join(" ") + (text.length > 0 ? " <strong>" + last + "</strong>" : last);
	});
	var elements = document.getElementsByClassName("nth-word");
	for (var i = 0, l = elements.length; i < l; i++) {
		elements[i].innerHTML = elements[i].innerHTML.replace('70% off', '<strong>70% off</strong>');
	}
	jQuery('#edit-submit-search-everything').attr('value', ""); //thay đổi giá trị của value trong input
	jQuery('#edit-subscribe--2').attr('value', "Submit");
	jQuery('#edit-subscribe').attr('value', "Go!");
	jQuery('#edit-search-api-fulltext').attr('placeholder', "Search...");//add placeholder vào input
	jQuery('.we-mega-menu-ul').append('<label>New</label>');//add thêm thẻ label vào class .we-mega-menu-ul
});
