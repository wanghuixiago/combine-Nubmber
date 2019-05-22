const combine = (ary) =>{
    for(var i=0;i<ary.length-1;i++){
        for(var j=i+1;j<ary.length;j++){
            var number1=parseInt(ary[i].toString()+ary[j].toString());
            var number2=parseInt(ary[j].toString()+ary[i].toString());
            if(number2>number1){
                var temp=ary[j];
                ary[j]=ary[i];
                ary[i]=temp;
            }
        }
    }
    return ary.toString().replace(/,/g,"")
}

module.exports = combine