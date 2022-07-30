document.getElementById("random").onclick= () =>{
    const vaLueRandom =(Math.random())*4;
    const isCheckAttendance =Math.round(vaLueRandom);
   
    if(isCheckAttendance===0){
        document.getElementById('01').innerHTML='Xin mời bạn Anh Thư lên trình bày';}
    else if (isCheckAttendance===1){ 
        document.getElementById('01').innerHTML='Xin mời bạn Như Uyên lên trình bày';}
    else if (isCheckAttendance===2){
        document.getElementById('01').innerHTML='Xin mời bạn Phương Nguyên lên trình bày';}
    else{
        document.getElementById('01').innerHTML='Xin mời bạn Kiều Linh  lên trình bày';}
};