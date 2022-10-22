from PIL import Image
import pytesseract
import numpy as np
import inflect 
import re

def process(allergyString, filename):
    allergyArr = allergyString.split(",")
    engine = inflect.engine()

    for i in range(len(allergyArr)):
        allergyArr[i] = allergyArr[i].lower()
        if (engine.singular_noun(allergyArr[i]) != False):
            allergyArr[i] = engine.singular_noun(allergyArr[i])

    image = Image.open(filename)
    width = image.width
    height = image.height
    image = image.crop((0,height * 0.65, width, height))

    height_percent = (height / float(image.size[1]))
    width_size = int((float(image.size[0]) * float(height_percent)))
    image = image.resize((2 * width_size,height))
    image1 = np.array(image)

    text = pytesseract.image_to_string(image1)
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
        return ""
