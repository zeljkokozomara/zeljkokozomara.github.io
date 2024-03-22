

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
        alert ('Please disable Ad Block to View Google Map or Download GPS Track');
    });

}


