

function gpstrack(gpslink)
{
   let url = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
   
   fetch(url)
    .then(response =>
    {
        window.open(gpslink, '_blank');
    })
    .catch(error => 
    {
        alert ('To access this content, Please disable the Ad Block');
    }); 

   window.open(gpslink, '_blank');

}


