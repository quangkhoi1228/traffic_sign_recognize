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
        context = util.uploadFile(request)
        util.detectTrafficSign(context)
    return render(request, 'index.html', context=context)


def trafficinfomation(request):
    context = {}
    return render(request, 'trafficinfomation.html', context=context)


def detectTrafficSign(request):
    return JsonResponse({'data': 'hihi'})


def testcall(request):
    # Get the variable text
    text = request.POST['text']
    # Do whatever with the input variable text
    response = text + ":)"
    # Send the response

    return HttpResponse(response)


def upload(request):
    # if request.method == 'POST':
    #     uploaded_file = request.FILES['document']
    #     print(uploaded_file.name)
    #     print(uploaded_file.size)

    #     fs = FileSystemStorage()
    #     name = fs.save(uploaded_file.name, uploaded_file)
    #     context['url'] = fs.url(name)

    context = util.uploadFile(request)

    return render(request, 'upload.html', context)
