var e = ['echauffement/forward-leg-swings.jpg', 'echauffement/heels-to-buttocks.jpg', 'echauffement/high-knee-run.jpg', 'echauffement/lateral-leg-swings.jpg', 'echauffement/pogo-jump-single.jpg', 'echauffement/pogo-jump.jpg', 'echauffement/running.jpg', 'echauffement/walking-lunge.jpg'];
var a = ['abdos/alternative-legs-arms-raises.jpg', 'abdos/criss-cross-crunch.jpg', 'abdos/crunch-oblique.jpg', 'abdos/crunch.jpg', 'abdos/double-legs-circles.jpg', 'abdos/flutter-kicks.jpg', 'abdos/high-plank.jpg', 'abdos/leg-pull-in-knee-up.jpg', 'abdos/lying-leg-raise.jpg', 'abdos/plank-downward-dog.jpg', 'abdos/plank-side-knee-tuck.jpg', 'abdos/plank-side.jpg', 'abdos/plank.jpg', 'abdos/russian-twists-obliques.jpg', 'abdos/side-plank-hip-abduction.jpg', 'abdos/superman.jpg', 'abdos/swimmer-swimming.jpg'];
var b_c = ['bras_cardio/burpees.jpg', 'bras_cardio/dips-bench.jpg', 'bras_cardio/heels-to-buttocks.jpg', 'bras_cardio/high-knee-run.jpg', 'bras_cardio/mountain-climbers-taps.jpg', 'bras_cardio/mountain-climbers.jpg', 'bras_cardio/pushup.jpg', 'bras_cardio/running.jpg', 'bras_cardio/speed-walkout.jpg', 'bras_cardio/sprawls.jpg', 'bras_cardio/supine-reverse-plank.jpg', 'bras_cardio/wide-pushups.jpg'];
var j = ['jambes/air-squat.jpg', 'jambes/calves-step-bar.jpg', 'jambes/chair-iso-squat.jpg', 'jambes/frog-squats.jpg', 'jambes/glutes-leg-kickback.jpg', 'jambes/jump-squat.jpg', 'jambes/jumping-lunges.jpg', 'jambes/lunge.jpg', 'jambes/pogo-jump-single.jpg', 'jambes/pogo-jump.jpg', 'jambes/walking-lunge.jpg'];

var n = 0;
const img = document.getElementById('img');
var entrainement = 'normal\r\n\r\n';
var l = ['a','j','b_c'];
var pre = 'j';

function nouveau_a(){
    a = ['abdos/alternative-legs-arms-raises.jpg', 'abdos/criss-cross-crunch.jpg', 'abdos/crunch-oblique.jpg', 'abdos/crunch.jpg', 'abdos/double-legs-circles.jpg', 'abdos/flutter-kicks.jpg', 'abdos/high-plank.jpg', 'abdos/leg-pull-in-knee-up.jpg', 'abdos/lying-leg-raise.jpg', 'abdos/plank-downward-dog.jpg', 'abdos/plank-side-knee-tuck.jpg', 'abdos/plank-side.jpg', 'abdos/plank.jpg', 'abdos/russian-twists-obliques.jpg', 'abdos/side-plank-hip-abduction.jpg', 'abdos/superman.jpg', 'abdos/swimmer-swimming.jpg'];
}

function nouveau_b_c(){
    b_c = ['bras_cardio/burpees.jpg', 'bras_cardio/dips-bench.jpg', 'bras_cardio/heels-to-buttocks.jpg', 'bras_cardio/high-knee-run.jpg', 'bras_cardio/mountain-climbers-taps.jpg', 'bras_cardio/mountain-climbers.jpg', 'bras_cardio/pushup.jpg', 'bras_cardio/running.jpg', 'bras_cardio/speed-walkout.jpg', 'bras_cardio/sprawls.jpg', 'bras_cardio/supine-reverse-plank.jpg', 'bras_cardio/wide-pushups.jpg'];
}

function nouveau_j(){
    j = ['jambes/air-squat.jpg', 'jambes/calves-step-bar.jpg', 'jambes/chair-iso-squat.jpg', 'jambes/frog-squats.jpg', 'jambes/glutes-leg-kickback.jpg', 'jambes/jump-squat.jpg', 'jambes/jumping-lunges.jpg', 'jambes/lunge.jpg', 'jambes/pogo-jump-single.jpg', 'jambes/pogo-jump.jpg', 'jambes/walking-lunge.jpg'];
}
    

function nouveau(){
    n+=1;
    if (n<=4){
        Exercice=e[Math.floor(Math.random()*e.length)];
        img.src='images/'+Exercice;
        e.splice(e.indexOf(Exercice),1);
        entrainement+='e'+'\t'+Exercice.substring(Exercice.search('/')+1,Exercice.length-4)+'\r\n'
    }
    else{
        l.splice(l.indexOf(pre),1);
        ch=l[Math.floor(Math.random()*l.length)];
        c=eval(ch);
        if (c.length==0){
            eval('nouveau_'+ch+'()');
            c=eval(ch);
        };
        Exercice=c[Math.floor(Math.random()*c.length)];
        img.src='images/'+Exercice;
        c.splice(c.indexOf(Exercice),1);
        pre=(ch);
        l=['a','j','b_c'];
        entrainement+=ch+'\t'+Exercice.substring(Exercice.search('/')+1,Exercice.length-4)+'\r\n'
    };
};

function enregistrer(){
    var today = new Date();
    var a = document.createElement("a");
    a.href = window.URL.createObjectURL(new Blob([entrainement], {type: "text/plain"}));
    a.download = today.getFullYear()+"_"+('0000'+(today.getMonth()+1)).slice(-2)+"_"+('0000'+today.getDate()).slice(-2)+".txt";
    a.click();
}
