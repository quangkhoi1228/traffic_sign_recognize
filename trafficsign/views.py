from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.views.generic import TemplateView
from django.core.files.storage import FileSystemStorage

from . import util


# Create your views here.


def index(request):
    context = {}
    if request.method == 'POST':
        context = util.detectTrafficSign(request)
    return render(request, 'index.html', context=context)


def trafficinfomation(request):
    context = {}
    return render(request, 'trafficinfomation.html', context=context)

def contact(request):
    context = {}
    return render(request, 'contact.html', context=context)

def guide(request):
    context = {}
    return render(request, 'guide.html', context=context)


def upload(request):
    context = util.uploadFile(request)
    return render(request, 'upload.html', context)
