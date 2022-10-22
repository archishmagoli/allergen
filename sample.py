from PIL import Image
import pytesseract
import numpy as np
import inflect 
import re

pytesseract.pytesseract.tesseract_cmd = "C:\\Program Files\\Tesseract-OCR\\tesseract.exe"

arr = ['cereal', 'eggs', 'wheat']

engine = inflect.engine()

for i in range(len(arr)):
    arr[i] = arr[i].lower()
    if (engine.singular_noun(arr[i]) != False):
        arr[i] = engine.singular_noun(arr[i])

filename = 'peanut.png'
img1 = np.array(Image.open(filename))
text = pytesseract.image_to_string(img1)
text = text.lower()

ingredientsArr = []

for i in range(len(arr)):
    myString = arr[i]
    print(myString)
    inList = text.find(myString)
    if (inList != -1):
        test = re.findall(r'(?<=,:)[a-z](?=,)', text)
        print(test)

print(text)
