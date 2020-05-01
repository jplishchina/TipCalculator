jQuery(document).ready(function($){
    $('#tip-form').on('submit', function(event){
        event.preventDefault();
        var bill = parseFloat($('#bill-amount').val());
        var tip = parseFloat($('#tip-amount').val());
        var message='You are a bad tipper!'
        if(tip >= 0.2){
            message='You are a good tipper!'
        }

        var totalBill = (bill * (1 + tip)).toFixed(2);
        console.log(totalBill);
        var total='Your bill comes to $' + totalBill;
        $('#total').html(total);
        $('#message').html(message);
        
    });
});