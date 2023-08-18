import tkinter as tk
from tkinter import ttk
import os
import webview

# Create a tkinter window
root = tk.Tk()
root.title("Python Web Browser")

# Create a webview
webview.create_window("My Browser", url=os.path.abspath("index.html"), width=800, height=600)

# Create a function to open new tabs
def open_new_tab():
    webview.evaluate_js("addNewTab()")

# Create a button to open new tabs
new_tab_button = ttk.Button(root, text="New Tab", command=open_new_tab)
new_tab_button.pack()

# Run the tkinter main loop
root.mainloop()
