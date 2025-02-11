from django.shortcuts import render

# Create your views here.

def caja(request):
    return render(request, 'caja/caja.html')