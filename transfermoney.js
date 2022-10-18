function Transfer()
{
  alert("Found!!");
  var accName1=document.getElementById('AccName1').value;
  var accName2=document.getElementById("AccName2").value;
  var entered_Ammount=parseInt(document.getElementById('Ammount').value);
  var accName1_entered_emailId=document.getElementById('EmailId1').value;
  var accName2_entered_emailId=document.getElementById('EmailId2').value;

  var findsenderBankAcc =accName1+"BankBalance";
  var accName1_BankBalance=parseInt(document.getElementById(findsenderBankAcc).innerHTML);

  var accName1_True_emailId=accName1+"@gmail.com";
  var accName2_True_emailId=accName2+"@gmail.com";

  if(accName1_entered_emailId!=accName1_True_emailId && accName2_entered_emailId!=accName2_True_emailId )
    {
    alert("Entered Email ID didn't match!!");
    }
  else
    {
    if (entered_Ammount > accName1_BankBalance )
    {
      alert("Insufficient Balance.");
    }
    else
    {
      var findreceiverBankAcc =accName2+"BankBalance";
      var accName2_BankBalance=parseInt(document.getElementById(findreceiverBankAcc).innerHTML);

      var accName2_NewBalance=entered_Ammount + accName2_BankBalance;
      var accName1_NewBalance=accName1_BankBalance - entered_Ammount;

      document.getElementById(findsenderBankAcc).innerHTML= accName1_NewBalance;
      document.getElementById(findreceiverBankAcc).innerHTML=accName2_NewBalance;

      alert("Transaction Successful!! "+"\nRs."+ entered_Ammount+ " is sent to "+accName2+" on time "+ new Date());

      var a=document.getElementById('history').innerText;
      var b=  accName1 + " has Successfully transefferd Rs." + entered_Ammount +" to the "+accName2".";
      var c=a+"\n"+b;
      document.getElementById('history').innerText=c;
     }

  }


  }
