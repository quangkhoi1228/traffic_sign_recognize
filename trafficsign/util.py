import base64

def saveBase64Image(imgstring):
    imgdata = base64.b64decode(imgstring)
    filename = 'some_image.jpg'  # I assume you have a way of picking unique filenames
    with open(filename, 'wb') as f:
        f.write(imgdata)