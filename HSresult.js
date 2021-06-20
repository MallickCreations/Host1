function Subject()
{
	var Subject= "Your Given Subject";
	var Subject = document.getElementById("Subject").value ;

    /// Subject Selection//

	var xiigp= document.getElementById("given12").value;
	var xiigw= 100-parseFloat(xiigp)
	var xiio= document.getElementById("optain12").value;
	
	document.getElementById("from12").innerHTML ="You Get"+" : "+xiio +" From XII Practical/Project For "+ Subject ;
	//Calculation for class xii END//
	
	var xi= document.getElementById("SubjectMarks").value;
	var xi1=parseFloat(xi)*0.6*parseFloat(xiigw);
	let xio= parseFloat(xi1)/parseFloat(xiigw);
	document.getElementById("from11").innerHTML ="You Get"+" : "+xio +" From XI For "+ Subject ;

	//Calculation for class xi END//
	
	var x1 = document.getElementById("Best1").value ;
	var x2 = document.getElementById("Best2").value ;
	var x3 = document.getElementById("Best3").value ;
	var x4 = document.getElementById("Best4").value ;
	let x5= parseFloat(x1)+parseFloat(x2)+parseFloat(x3)+ parseFloat(x4) ;
	var xo= x5*0.4 * parseFloat(xiigw)/400;

	document.getElementById("from10").innerHTML ="You Get"+" : "+xo +" From Madhyamik For "+ Subject ;
	// average madhyamik END//

	
	
	
	var result = parseFloat(xo)+parseFloat(xio)+parseFloat(xiio);
	
	var final=Math.round(result);
	console.log(result);
	
	document.getElementById("mainResult").innerHTML ="You Get"+" : "+final +"  From H.S. Examination For "+ Subject ;
    
	// All calculation END//
	
	document.getElementById("share").innerHTML ="Consider Sharing To Your Friends & School "
	document.getElementById("issue").innerHTML ="For Any Issue Please Inform Us in Contact"


}
