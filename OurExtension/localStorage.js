$('#add').click( function() {
    var theSite = $('#site').val();

    // If the field is not empty, run this:
    if($("site").val() != '') {
        // Add value to whitelist/blacklist
        $('item').prepend("<li>" + Site + "</li>");
        // Delete value in the text field
        $('#form')[0].reset();
        var item = $('#item').html();
        localStorage.setItem('item', item);
        return false; 
    }
})