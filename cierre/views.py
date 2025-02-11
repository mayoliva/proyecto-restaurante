from django.shortcuts import render

# Create your views here.

def cierre(request):
    return render(request, 'cierre/cierre.html')