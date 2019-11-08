from django.contrib import admin
from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.index, name='home'),
    path('index/', views.index, name='index'),
    path('trafficinfomation/', views.trafficinfomation, name='trafficinfomation'),
    path('contact/', views.contact, name='contact'),
    path('guide/', views.guide, name='guide'),
    path('upload/', views.upload, name='upload'),
    path('admin/', admin.site.urls),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
