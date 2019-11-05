from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
    path('', views.index, name='index'),
    path('trafficinfomation/', views.trafficinfomation, name='trafficinfomation'),
    path('testapi/', views.detectTrafficSign, name='detecttrafficsign'),
    path('admin/', admin.site.urls),
    path('my-ajax-test/', views.testcall),

]
