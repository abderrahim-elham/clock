     var text=document.querySelector('.clock');
     var aiguille=document.querySelectorAll('.aiguille');
     var clock_min=document.querySelector('.clock-min');
     var mus=document.querySelector('#mus');

     function update()
     {
     var time=new Date();
     var h=time.getUTCHours();
     var m=time.getUTCMinutes();
     var s=time.getUTCSeconds();
     aiguille[0].style.transform=`rotate(`+s*6+`deg)`;
     aiguille[1].style.transform=`rotate(`+m*6+`deg)`;
     aiguille[2].style.transform=`rotate(`+h*30+`deg)`;
     
     clock_min.innerHTML=h+':'+m+':'+s+'<br><span style="color:cyan;">'+time.getDate()+'/'+(time.getMonth()+1)+'/'+time.getFullYear()+'</span>';
     }

    onload=update();
    
    setInterval(update,500);
