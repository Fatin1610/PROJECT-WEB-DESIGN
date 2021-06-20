function onsubmitform(){
    name = document.getElementById("name").value;
    phone = document.getElementById("phone").value;
    address = document.getElementById("address").value;
    item1 = document.getElementById("itemname1").value;
    item2 = document.getElementById("itemname2").value;
    
    var num1 = parseFloat(document.getElementById("price1").value);
    var num2 = parseInt(document.getElementById("quantity1").value);
    var num3 = document.getElementById("price2").value;
    var num4 = document.getElementById("quantity2").value;
    
    unitprice1 = document.getElementById("price1").value;
    quantity1 = document.getElementById("quantity1").value;
    unitprice2 = document.getElementById("price2").value;
    quantity2 = document.getElementById("quantity2").value;
    
    document.getElementById("names2").innerHTML = name;
    document.getElementById("noPhone").innerHTML = phone;
    document.getElementById("address2").innerHTML = address;
    document.getElementById("opname1").innerHTML = item1;
    document.getElementById("opname2").innerHTML = item2;
    document.getElementById("opprice1").innerHTML = unitprice1;
    document.getElementById("opquantity1").innerHTML = quantity1;
    document.getElementById("opprice2").innerHTML = unitprice2;
    document.getElementById("opquantity2").innerHTML = quantity2;
    
    
    
    if(num1&&num2&&num3&&num4)
    {	
        
        var totalprice1=Math.round(num1*num2);
        document.getElementById("total1").innerHTML = totalprice1;
        
    
        var totalprice2=Math.round(num3*num4);
        document.getElementById("total2").innerHTML = totalprice2;	
        
        
        var grandtotal=Math.round(totalprice1+totalprice2);
        document.getElementById("grandtotal").innerHTML = grandtotal;	

            
        alert("Calculation success, Press Ok to see result");	
    }
    else{
        
        alert("Please complete your form");
        
    }
    return false;	
}	
        
        
        
            
    



