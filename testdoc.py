import cv2
import os
import time
import uuid

IMAGES_PATH = 'Tensorflow/workspace/images/collectedimages'

labels = ['hello', 'thanks', 'yes', 'no', 'iloveyou']
number_imgs = 15

for label in labels:
    os.mkdir('Tensorflow\workspace\images\collectedimages\\' + label)
    cap = cv2.VideoCapture(0)
    print('Collecting images for {}'.format(label))
    time.sleep(5)
    print("get ready")
    time.sleep(5)
    for imgnum in range(number_imgs):
        x = 1
        if cap.isOpened():
            ret, frame = cap.read()
            if ret:
                imagename = os.path.join(IMAGES_PATH, label, label + '.' + '{}.jpg'.format(str(uuid.uuid1())))
                cv2.imwrite(imagename, frame)
                cv2.imshow('frame', frame)
                print(f"we did it {x}")
                time.sleep(2)

        else:
            print(f"Failed {x}")
        x += 1

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
    cap.release()
