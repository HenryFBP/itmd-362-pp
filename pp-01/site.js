log = function(it) {console.log(it);}

function scontains(haystack, needle)
{
  log("Seeing if '"+haystack+"' has '"+needle+"' in it.")
  return (haystack.toString().indexOf(needle) !== -1);
}


$('document').ready(function() {
  log("Doc is ready!");
  
  
})

function checkEmail(email)
{
  if(scontains(email,"@"))
  {
    return true;
  }
  return false;
}

$('#sign-up').on("submit", function(e) {
  e.preventDefault();
  
  if(checkEmail($('#email').val()) === true)
  {
    log("Email OK!");
  }
  else
  {
    alert("EMAIL NO GOOD AAAA WHER IS UR @ SYMBOL???")
    return;
  }
  
  
  alert('Thank you, ' + $('#email').val() + ".")
  
  $('html').append("SUBMITTED?!?!")
})
