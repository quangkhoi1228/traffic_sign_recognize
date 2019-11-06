from django.contrib import admin
from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.index, name='index'),
    path('trafficinfomation/', views.trafficinfomation, name='trafficinfomation'),
    path('upload/', views.upload, name='upload'),
    path('testapi/', views.detectTrafficSign, name='detecttrafficsign'),
    path('admin/', admin.site.urls),
    path('my-ajax-test/', views.testcall),

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
