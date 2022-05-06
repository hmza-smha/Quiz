let q1 = {
    q : 'ماذا تفعل اذا حصلت على وجبة لا تروقك في المطعم؟',
    a1 : 'اقوم برميها على النادل واقلب الطاولة.',
    a2 : 'اطلب استدعاء المدير واقوم بتوبيخه.',
    a3 : 'اطلب بأدب من النادل ان يقوم بتبديلها.',
    a4 : 'اتناولها, فهي بالتأكيد ليست إلى هذا الحدّ من السوء.'
};
let q2 = {
    q : 'ذهبت الى حفلة زفاف لا تود أن تكون فيها حقا, فكيف تتصرف؟',
    a1 : 'اجلس جانبا وأغضب, ولا اتحدث مع أي شخص.',
    a2 : 'اغضب وأعدّ الدقائق حتى اخرج من الحفلة.',
    a3 : 'اقضي الوقت بتناول الطعام والشراب.',
    a4 : 'احاول التعرف على اشخاص لطيفين لقضاء الوقت.'
};
let q3 = {
    q: 'اثناء قيادتك السيارة, قام احدهم بصدم سيارتك من الخلف. ماذا تفعل؟',
    a1: 'اضربه بقوة واشتم اباه وامه.',
    a2: 'اشتم امه فقط',
    a3: 'اشتم اباه فقط',
    a4: 'بفتح كروكة بثم ساكت'
}
let q4 = {
    q: 'وصلت الى العمل, واخبروك بأنك ستبقى اليوم في العمل حتى الساعة العاشرة مساء, ماذا سوف تفعل؟',
    a1: 'اقتل المدير',
    a2: 'احرق الشركة',
    a3: 'احرق نفسي',
    a4: 'بضل احرث للساعة العاشرة'
}
let q5 = {
    q: 'ماذا تفعل عندما يتوقف حاسوبك عن العمل في منتصف عمل مهم؟',
    a1: 'اقوم بضرب شاشة الحاسوب حتى النزف!',
    a2: 'اضرب بيدي على الطاولة بقوة.',
    a3: 'اشتري حاسوب جديد',
    a4: 'لا اغضب, فهكذا هي الحواسيب.'
}

const num_of_qustion = document.getElementById('num_of_qustion'),
        qustion = document.getElementById('qustion'),
        answer1 = document.getElementById('answer1'),
        answer2 = document.getElementById('answer2'),
        answer3 = document.getElementById('answer3'),
        answer4 = document.getElementById('answer4');

var page = 2;

const nextBtn = document.getElementById('next_btn');
const prevBtn = document.getElementById('prev_btn');
const finish = document.getElementById('content');

var flag = false;

num_of_qustion.innerHTML = "السـؤال الأول";
qustion.innerHTML = q1.q;
answer1.innerHTML = q1.a1;
answer2.innerHTML = q1.a2;
answer3.innerHTML = q1.a3;
answer4.innerHTML = q1.a4;

function result(){
    var results = [
        'شخصيتك زي شخصية الكلب',
        'انت ما عندك شخصية يا عم .. روح ادفن حالك',
        'انت فين و الكوكب فييييين',
        'انت زلمة محترم',
        'بدك فت خبز',
        'انت مش من هون .. انت من عبدون',
        '!@#$%^&*)('
    ];

    finish.innerHTML = "<br><br>"+"النتيجــة النهائيــة" + "......<br><br>"
    + results[ Math.floor(1 + (Math.random() * 4)) ];

}
function nextClicked(){
    var myflag = false;
    for(var i = 1; i <= 4; i = i+1){
        if(document.getElementById('r'+i).checked){
            myflag = true;
            break;
        }
    }
    if(!myflag){
        alert('اختار اجابة يا محترم');
        return;
    }
    for(var i = 1; i <= 4; i = i+1){
        document.getElementById('r'+i).checked = false;
    }
    if(flag){
        result();
        nextBtn.style.display = 'none';
        return;
    }
    if (page == 5){
        nextBtn.innerHTML =  "....."+ "الـنـتـيـجــــة";
        flag = true;
    }
    switch(page){
        case 2:
            num_of_qustion.innerHTML = "السـؤال الثاني";
            qustion.innerHTML = q2.q;
            answer1.innerHTML = q2.a1;
            answer2.innerHTML = q2.a2;
            answer3.innerHTML = q2.a3;
            answer4.innerHTML = q2.a4;
            break;
        case 3:
            num_of_qustion.innerHTML = "السـؤال الثالث";
            qustion.innerHTML = q3.q;
            answer1.innerHTML = q3.a1;
            answer2.innerHTML = q3.a2;
            answer3.innerHTML = q3.a3;
            answer4.innerHTML = q3.a4;
            break;
        case 4:
            num_of_qustion.innerHTML = "السـؤال الرابع";
            qustion.innerHTML = q4.q;
            answer1.innerHTML = q4.a1;
            answer2.innerHTML = q4.a2;
            answer3.innerHTML = q4.a3;
            answer4.innerHTML = q4.a4;
            break;
        case 5:
            num_of_qustion.innerHTML = "السـؤال الخامس";
            qustion.innerHTML = q5.q;
            answer1.innerHTML = q5.a1;
            answer2.innerHTML = q5.a2;
            answer3.innerHTML = q5.a3;
            answer4.innerHTML = q5.a4;
            break;
    }
    
    page = page + 1;
}