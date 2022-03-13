from tkinter import Tk,Label,Button,Menu,BooleanVar
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

def nouveau(event=None):
    global root,a,a_tf,j,j_tf,b_c,b_c_tf,e,l,pre,Image,img,BoutonEx,n,entrainement
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
        if not a_tf.get():
            l.pop(l.index('a'))
        if not b_c_tf.get():
            l.pop(l.index('b_c'))
        if not j_tf.get():
            l.pop(l.index('j'))
        if len(l)>1 and pre in l:
            l.pop(l.index(pre))
        elif len(l)==0:
            l=['a','j','b_c']
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
    f=open(d.today().strftime('entrainements/%Y_%m_%d.txt'),'w',encoding='utf-8')
    f.writelines(entrainement)

global root,a,a_tf,j,j_tf,b_c,b_c_tf,e,l,pre,Image,img,BoutonEx,n,entrainement
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

a_tf=BooleanVar(root)
a_tf.set(True)
b_c_tf=BooleanVar(root)
b_c_tf.set(True)
j_tf=BooleanVar(root)
j_tf.set(True)

menuBar=Menu(root)
menu=Menu(menuBar,tearoff=0)
menu.add_checkbutton(label='Abdos',variable=a_tf)
menu.add_checkbutton(label='Bras',variable=b_c_tf)
menu.add_checkbutton(label='Jambes',variable=j_tf)
menuBar.add_cascade(label='Options',menu=menu)
root.config(menu=menuBar)

root.geometry('600x650')
if name=='nt':
    import ctypes
    ctypes.windll.shell32.SetCurrentProcessExplicitAppUserModelID('sport')
img=PhotoImage(file='sport.ico')
root.tk.call('wm','iconphoto',root._w,img)
root.resizable(width=False,height=False)
root.mainloop()
