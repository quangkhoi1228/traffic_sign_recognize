from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse


# Create your views here.


def index(request):
    context = {}
    return render(request, 'index.html', context=context)

def trafficinfomation(request):
    context = {}
    return render(request, 'trafficinfomation.html', context=context)

def detectTrafficSign(request):
    return JsonResponse({'data':'hihi'})

def testcall(request):
   #Get the variable text
   text = request.POST['text']
   #Do whatever with the input variable text
   response = text + ":)"
   #Send the response 

   return HttpResponse(response)