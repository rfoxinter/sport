from tkinter import Tk,Label,Button
from os import name
from PIL.ImageTk import PhotoImage

def normal():
    global _type
    root.destroy()
    _type='normal'
def silencieux():
    global _type
    root.destroy()
    _type='silencieux'

global _type
root=Tk()
_type=''
BoutonN=Button(root,text='Normal',command=normal)
BoutonN.place(x=62.5,y=2.5,height=45,width=75)
BoutonS=Button(root,text='Silencieux',command=silencieux)
BoutonS.place(x=62.5,y=52.5,height=45,width=75)
root.title('Sport')
root.geometry('200x100')
if name=='nt':
    import ctypes
    ctypes.windll.shell32.SetCurrentProcessExplicitAppUserModelID('sport')
img=PhotoImage(file='sport.ico')
root.tk.call('wm','iconphoto',root._w,img)
root.resizable(width=False,height=False)
root.mainloop()

if _type=='normal':
    exec(open('normal.py').read())
elif _type=='silencieux':
    exec(open('silencieux.py').read())
