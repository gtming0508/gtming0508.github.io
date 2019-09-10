(function(){
  var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|16[6]|19[89]|17[01345678]|18[0-9]|14[579])[0-9]{8}$/

  $('.code_btn').on('click',function(){
    let name = $('#enterpriseName').val()
    console.log(name);
  })

  $('.close').on('click', function() {
    $('#enterpriseName').val('')
  })

  $('input').on('blur',function(){
    var type = $(this).attr('id')
    switch (type) {
      case 'enterpriseName':
          console.log(/^[\d|a-zA-z|[/u4e00-/u9fa5]]{4,50}$/.$(this).val());
        break;
    
      default:
        break;
    }
  })
  $('#phoneNumber').on('input',function(){
    
    if (reg.test($(this).val())){
      $('.code_btn').removeClass('disabled')
    } else {
      $('.code_btn').addClass('disabled')
    }
  })
  window.onload = function(){
    if (reg.test($('#phoneNumber').val())){
      $('.code_btn').removeClass('disabled')
    } else {
      $('.code_btn').addClass('disabled')
    }
  }
}())