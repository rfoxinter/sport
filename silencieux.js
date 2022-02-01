var e = ['echauffement/forward-leg-swings.jpg', 'echauffement/heels-to-buttocks.jpg', 'echauffement/high-knee-run.jpg', 'echauffement/lateral-leg-swings.jpg', 'echauffement/running.jpg', 'echauffement/walking-lunge.jpg'];
var a = ['abdos/alternative-legs-arms-raises.jpg', 'abdos/criss-cross-crunch.jpg', 'abdos/crunch-oblique.jpg', 'abdos/crunch.jpg', 'abdos/double-legs-circles.jpg', 'abdos/flutter-kicks.jpg', 'abdos/high-plank.jpg', 'abdos/leg-pull-in-knee-up.jpg', 'abdos/lying-leg-raise.jpg', 'abdos/plank-downward-dog.jpg', 'abdos/plank-side-knee-tuck.jpg', 'abdos/plank-side.jpg', 'abdos/plank.jpg', 'abdos/russian-twists-obliques.jpg', 'abdos/side-plank-hip-abduction.jpg', 'abdos/superman.jpg', 'abdos/swimmer-swimming.jpg'];
var b_c = ['bras_cardio/dips-bench.jpg', 'bras_cardio/heels-to-buttocks.jpg', 'bras_cardio/high-knee-run.jpg', 'bras_cardio/pushup.jpg', 'bras_cardio/running.jpg', 'bras_cardio/supine-reverse-plank.jpg', 'bras_cardio/wide-pushups.jpg'];
var j = ['jambes/air-squat.jpg', 'jambes/calves-step-bar.jpg', 'jambes/chair-iso-squat.jpg', 'jambes/frog-squats.jpg', 'jambes/glutes-leg-kickback.jpg', 'jambes/lunge.jpg', 'jambes/walking-lunge.jpg'];

var n = 0;
const img = document.getElementById('img');
var entrainement = 'silencieux\r\n\r\n';
var l = ['a','j','b_c'];
var pre = 'j';

var a_tf = true;
var b_tf = true;
var j_tf = true;
function myFunction() {
    document.getElementById("dropdown").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
function a_cl() {
    a_tf = !a_tf;
    if (a_tf) {
        document.getElementById("abd_tf").style.display = "unset";
    } else {
        document.getElementById("abd_tf").style.display = "none";
    }
}
function b_cl() {
    b_tf = !b_tf;
    if (b_tf) {
        document.getElementById("bras_tf").style.display = "unset";
    } else {
        document.getElementById("bras_tf").style.display = "none";
    }
}
function j_cl() {
    j_tf = !j_tf;
    if (j_tf) {
        document.getElementById("jam_tf").style.display = "unset";
    } else {
        document.getElementById("jam_tf").style.display = "none";
    }
}

function nouveau_a(){
    a = ['abdos/alternative-legs-arms-raises.jpg', 'abdos/criss-cross-crunch.jpg', 'abdos/crunch-oblique.jpg', 'abdos/crunch.jpg', 'abdos/double-legs-circles.jpg', 'abdos/flutter-kicks.jpg', 'abdos/high-plank.jpg', 'abdos/leg-pull-in-knee-up.jpg', 'abdos/lying-leg-raise.jpg', 'abdos/plank-downward-dog.jpg', 'abdos/plank-side-knee-tuck.jpg', 'abdos/plank-side.jpg', 'abdos/plank.jpg', 'abdos/russian-twists-obliques.jpg', 'abdos/side-plank-hip-abduction.jpg', 'abdos/superman.jpg', 'abdos/swimmer-swimming.jpg'];
}

function nouveau_b_c(){
    b_c = ['bras_cardio/dips-bench.jpg', 'bras_cardio/heels-to-buttocks.jpg', 'bras_cardio/high-knee-run.jpg', 'bras_cardio/pushup.jpg', 'bras_cardio/running.jpg', 'bras_cardio/supine-reverse-plank.jpg', 'bras_cardio/wide-pushups.jpg'];
}

function nouveau_j(){
    j = ['jambes/air-squat.jpg', 'jambes/calves-step-bar.jpg', 'jambes/chair-iso-squat.jpg', 'jambes/frog-squats.jpg', 'jambes/glutes-leg-kickback.jpg', 'jambes/lunge.jpg', 'jambes/walking-lunge.jpg'];
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
        if (!a_tf) {
            l.splice(l.indexOf('a'),1)
        }
        if (!b_tf) {
            l.splice(l.indexOf('b_c'),1)
        }
        if (!j_tf) {
            l.splice(l.indexOf('j'),1)
        }
        if (l.length>1 && l.includes(pre)) {
            l.splice(l.indexOf(pre),1);
        } else if (l.length==0) {
            l=['a','j','b_c']
        }
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
