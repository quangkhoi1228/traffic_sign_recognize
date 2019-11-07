# trafficsignrecognize
Đồ án nhận diện biển báo cấm đơn trong ảnh môi trường có sử dụng deep learning.<br>

<h2>Yêu cầu:</h2>
<b>Python:</b><br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;python 3.6.9<br>
<br>
<b>Packages:</b><br>
<i>*Khuyến khích sử dụng Anaconda 3 để cài tất cả packages</i><br>
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

<h2>Run project:</h2>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>source ospath/anaconda3/anaconda3/bin/activate</code> 
 <i>#Thư mục chứa Anaconda 3</i><br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>conda activate opencv</code> 
  <i>#Kích hoạt môi trường chứa các packages</i><br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>cd parentProjectPath/trafficsignrecognize </code><br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>python manage.py runserver</code><br>
<hr>
<b>Hỗ trợ các biển báo:</b> (Theo bộ biển báo chuẩn Việt Nam)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;101: Đường cấm<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;102: Cấm đi ngược chiều<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;122: Dừng lại<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;127: Tốc độ tối đa cho phép<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;133: Hết cấm vượt<br>

<br>
<br>
<h2>Chức năng chính</h2>
<b>Trang chủ</b><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nhận diện biển báo từ ảnh môi trường<br>

<img src="https://github.com/quangkhoiuit98/trafficsignrecognize/blob/master/static/image/index1.png"><br>
<img src="https://github.com/quangkhoiuit98/trafficsignrecognize/blob/master/static/image/index2.png"><br>

<b>Trang tra cứu biển báo</b><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tra cứu biển báo từ dữ liệu của ứng dụng<br>

<img src="https://github.com/quangkhoiuit98/trafficsignrecognize/blob/master/static/image/trafficinfomation.png"><br>