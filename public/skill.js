
$(document).ready(function(){    
    $('#callData').click(function(){
 
        var url = 'https://spreadsheets.google.com/feeds/list/1CpCT5pY70fSEoGZwGI-dcJ-N1QitzTfLbdHCaicNMDg/od6/public/values?alt=json'     
        $.getJSON(url,function(data){
            
            
                //console.log(data.feed.entry);

                var html = ''

                $.each(data.feed.entry,function(key,val){
                    console.log(val.gsx$studentid.$t)
                    console.log(val.gsx$logo.$t)
                    console.log(val.gsx$percent.$t)
                    console.log(val.gsx$skills.$t)
                    

                html += '<article>'+ 

                '<h6>'+ val.gsx$percent.$t + '</h6>'+
                '<img class="skillImg" src="'+ val.gsx$logo.$t +'" width="50" height="50"/><br/>' +
                '<b>' + val.gsx$skills.$t + ' </b></article>'  
                
                })
                $('#output').html(html); 
                $('#output').fadeToggle(0); 
        })
        
    });     
});