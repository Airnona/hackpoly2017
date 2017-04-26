$(document).ready(function(){
    //window.alert("working");
	//var newTotal = 6;
	//window.alert(newTotal);
	//chrome.storage.sync.set({'total': newTotal});
	//$('#total').text(newTotal);		
	chrome.runtime.sendMessage('', (r)=> {
		console.log(r.tab.url);
		if(r.tab.url == "https://www.facebook.com/"){
			console.log("inside iff");
			setInterval(function(){
				chrome.storage.sync.get('total', function(blur){	//blur object
					var myTotal = 1;
					if (blur.total){
						myTotal += parseInt(blur.total);
					}
					chrome.storage.sync.set({'total': myTotal});
					$('#total').text(newTotal);	
				});
			}, 2000);			
		}
		else{
			console.log("in the elseesejawor");
		}
	});
	
	
	/*setInterval(function(){
			chrome.storage.sync.get('total', function(blur){	//blur object
				newTotal = 1;
				if (blur.total){
					newTotal += parseInt(blur.total);
				}
				
				chrome.runtime.onMessage.addListener
				
				//window.alert("not FB11ss22");
				//chrome.tabs.query({ "active": true, "lastFocusedWindow": true}, function (tabs) {
					
					//if(tabs[0].url == "https://www.facebook.com/"){
					//	window.alert(newTotal);
					//	chrome.storage.sync.set({'total': newTotal});
					//	$('#total').text(newTotal);						
					//}
					//else{
					//	window.alert("not FB");
					//}
				//});
				
				//chrome.storage.sync.set({'total': newTotal});
				//$('#total').text(newTotal);
			}); 
		}, 2000);*/
});