from PIL import Image
import pytesseract
import numpy as np
import inflect 
import re
pytesseract.pytesseract.tesseract_cmd = "C:\\Program Files\\Tesseract-OCR\\tesseract.exe"

def process(allergyString, filename):
    allergyArr = allergyString.split(",")
    engine = inflect.engine()

    for i in range(len(allergyArr)):
        allergyArr[i] = allergyArr[i].lower()
        if (engine.singular_noun(allergyArr[i]) != False):
            allergyArr[i] = engine.singular_noun(allergyArr[i])

    image = Image.open(filename)

    text = pytesseract.image_to_string(image)
    text = text.replace('\n', ' ')
    text = text.replace('(', '')
    text = text.replace(')', '')

    text = text.lower()
    text = text[text.index(":") + 2:]
    regex = r'[^,\s][^\,]*[^,\s]*'

    matches =  re.finditer(regex, text, re.MULTILINE | re.IGNORECASE) 
    ingredientsArr = []
    for m in matches:
        ingredientsArr.append(m.group())

    for i in range(len(ingredientsArr)):
        ingredientsArr[i] = ingredientsArr[i].strip()

    returnArr = []

    for allergy in allergyArr:
        for ingredient in ingredientsArr:
            if (allergy in ingredient):
                returnArr.append(ingredient)

    if (len(returnArr) == 0):
        return "Congratulations! You can eat this food!"
    else:
        returnString = "You are allergic to the following things: "
        for i in range(len(returnArr)):
            returnString += returnArr[i]
            if (i < len(returnArr) - 1):
                returnString += ", "
            else:
                returnString += "."
        return returnString

