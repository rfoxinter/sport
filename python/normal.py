from tkinter import Tk,Label,Button
from random import choice
from os import listdir,name
from time import sleep
from PIL.ImageTk import PhotoImage

def nouveau_a():
    global a
    a=['abdos/'+i for i in listdir('images/abdos')]

def nouveau_b_c():
    global b_c
    b_c=['bras_cardio/'+i for i in listdir('images/bras_cardio')]

def nouveau_j():
    global j
    j=['jambes/'+i for i in listdir('images/jambes')]

def nouveau():
    global root,a,j,b_c,e,l,pre,Image,img,BoutonEx,n,entrainement
    n+=1
    if n<=4:
        Image.destroy()
        Exercice=choice(e)
        img=PhotoImage(file='images/'+Exercice)
        Image=Label(root,image=img)
        Image.place(x=(600-img.width())/2-2,y=(600-img.height())/2-2)
        e.remove(Exercice)
        entrainement+='e'+'\t'+Exercice[Exercice.find('/')+1:len(Exercice)-4]+'\n'
    else:
        l.pop(l.index(pre))
        ch=choice(l)
        c=eval(ch)
        if len(c)==0:
            eval('nouveau_'+ch+'()')
            c=eval(ch)
        Image.destroy()
        Exercice=choice(c)
        img=PhotoImage(file='images/'+Exercice)
        Image=Label(root,image=img)
        Image.place(x=(600-img.width())/2-2,y=(600-img.height())/2-2)
        c.remove(Exercice)
        pre=(ch)
        l=['a','j','b_c']
        entrainement+=ch+'\t'+Exercice[Exercice.find('/')+1:len(Exercice)-4]+'\n'

def enregistrer():
    global entrainement
    from datetime import date as d
    f=open(d.today().strftime('entrainements/%d_%m_%Y.txt'),'w',encoding='utf-8')
    f.writelines(entrainement)

global root,a,j,b_c,e,l,pre,Image,img,BoutonEx,n,entrainement
n=0
entrainement='normal\n\n'
root=Tk()
a=['abdos/'+i for i in listdir('images/abdos')]
j=['jambes/'+i for i in listdir('images/jambes')]
b_c=['bras_cardio/'+i for i in listdir('images/bras_cardio')]
e=['echauffement/'+i for i in listdir('images/echauffement')]
l=['a','j','b_c']
pre='j'
Image=Label(root)
BoutonEx=Button(root,text='Exercice',command=nouveau)
BoutonEx.place(x=150,y=602.5,height=45,width=75)
BoutonEx=Button(root,text='Enregistrer',command=enregistrer)
BoutonEx.place(x=375.5,y=602.5,height=45,width=75)
root.title('Sport')
root.bind('<Return>',nouveau)
root.geometry('600x650')
if name=='nt':
    import ctypes
    ctypes.windll.shell32.SetCurrentProcessExplicitAppUserModelID('sport')
img=PhotoImage(file='sport.ico')
root.tk.call('wm','iconphoto',root._w,img)
root.resizable(width=False,height=False)
root.mainloop()
