# trafficsignrecognize
Đồ án nhận diện biển báo cấm đơn trong ảnh môi trường có sử dụng deep learning.<br>

<h4>Yêu cầu:</h4><br>
<b>Python:</b><br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;python 3.6.9<br>
<br>
<b>Packages:</b><br>
<i>*Nên sử dụng Anaconda 3 để cài tất cả package</i><br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;django 2.2.5<br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cv2 (opencv) 3.4.2<br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;numpy 1.17.2<br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;matplotlib 3.1.1<br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;skimage (scikit-image) 0.15.0<br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;random<br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tensorflow 2.0.0<br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;keras 2.2.4<br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PIL (Image)<br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;os<br>
<hr>
<b>Run project:</b><br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>cd ospath/django   #goto django root dir</code> <br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>source bin/activate</code><br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>cd trafficsignrecognize </code><br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>python manage.py runserver</code><br>


<hr>
<b>Hỗ trợ các biển báo:</b> (Theo bộ biển báo chuẩn Việt Nam)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;101: Đường cấm<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;102: Cấm đi ngược chiều<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;122: Dừng lại<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;127: Tốc độ tối đa cho phép<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;133: Hết cấm vượt<br>
