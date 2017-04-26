$(function(){
	setInterval(function(){
		chrome.storage.sync.get('total', function(blur){
		$('#total').text(blur.total);
		})
	},500);
	
	$('#blurAmount').click(function(){
		setInterval(function(){
			chrome.storage.sync.get('total', function(blur){	//blur object
				var newTotal = 1;
				if (blur.total){
					newTotal += parseInt(blur.total);
				}
				
				
				chrome.tabs.query({ "active": true, "lastFocusedWindow": true}, function (tabs) {
					if(tabs[0].url == "https://www.facebook.com/"){
						window.alert(newTotal);
						chrome.storage.sync.set({'total': newTotal+10});
						$('#total').text(newTotal);						
					}
					else{
						window.alert("not FB")
					}
				});
				//chrome.storage.sync.set({'total': newTotal});
				//$('#total').text(newTotal);
			}); 
		}, 5000);
	});
});