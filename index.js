function count_80(a){
a++;
$("#count-80").text(a)
if(a<80)
{
    // this section for count
    setTimeout(count_80.bind(this,a),140)
}
else{
    return 0;
}
}
function count_200(a){
a++;
$("#count-200").text(a)
if(a<200)
{
    setTimeout(count_200.bind(this,a),50)
}
else{
    return 0;
}
}
function count_99(a){
    a++;
    $("#count-99").text(a)
    if(a<99)
    {
        setTimeout(count_99.bind(this,a),50)
    }
    else{
        return 0;
    }
    }
count_80(60)
count_200(150)
count_99(50)
// end of count 