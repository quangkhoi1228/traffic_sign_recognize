# trafficsignrecognize
Đồ án nhận diện biển báo cấm đơn trong ảnh môi trường có sử dụng deep learning.<br>

<b>Yêu cầu:</b><br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;django2<br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cv2<br> 
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;numpy<br> 
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;matplotlib<br> 
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;skimage<br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;random<br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tensorflow<br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PIL<br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;os<br>
<hr>
<b>Run project:</b><br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>cd ospath/django   #goto django root dir</code> <br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>source bin/activate</code><br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>cd trafficsignrecognize </code><br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>python manage.py runserver</code><br>

  
<hr>
<b>Hỗ trợ các biển báo:<b><br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    101: Đường cấm<br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    102: Cấm đi ngược chiều<br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    122: Dừng lại<br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    127: Tốc độ tối đa cho phép<br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    133: Hết cấm vượt<br> 
