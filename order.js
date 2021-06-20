/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
}
function kira(){
		customername = document.getElementById("name").value;
		item1 = document.getElementById("item1").value;
		item2 = document.getElementById("item2").value;
		number = document.getElementById("number").value;
		address =  document.getElementById("address").value;
		description1 = document.getElementById("description1").value;
		description2 = document.getElementById("description2").value;
		
	    var num1 = parseFloat(document.getElementById("unitprice").value);
		var num2 = parseInt(document.getElementById("Quantity").value);
		var num3 = document.getElementById("unitprice2").value;
        var num4 = document.getElementById("Quantity2").value;
		unit1 = document.getElementById("unitprice").value;
		unit2 = document.getElementById("Quantity").value;
		unit3 = document.getElementById("unitprice2").value;
        unit4 = document.getElementById("Quantity2").value;
		
		document.getElementById("number2").innerHTML = number;
		document.getElementById("address2").innerHTML = address;
		document.getElementById("name2").innerHTML = customername;
		document.getElementById("items1").innerHTML = item1;
		document.getElementById("items2").innerHTML = item2;
		document.getElementById("description3").innerHTML = description1;
		document.getElementById("description4").innerHTML = description2;
		document.getElementById("unitprice3").innerHTML = unit1;
		document.getElementById("Quantity3").innerHTML = unit2;
		document.getElementById("unitprice4").innerHTML = unit3;
		document.getElementById("Quantity4").innerHTML = unit4;
		
		
		
		if(num1&&num2&&num3&&num4)
		{	
			
			var totalprice1=Math.round(num1*num2);
			document.getElementById("result").innerHTML = totalprice1;
			
		
			var totalprice2=Math.round(num3*num4);
			document.getElementById("result2").innerHTML = totalprice2;	
			
			
			var grandtotal=Math.round(totalprice1+totalprice2);
			document.getElementById("gdtotal").innerHTML = grandtotal;	

			
			
			alert("Your order has been made. Kindly press OK to see the details.");	
		}
		else{
			alert("Complete your order!");
		}
		return false;

		
}