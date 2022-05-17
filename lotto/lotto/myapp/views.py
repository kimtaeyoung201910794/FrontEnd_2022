from django.shortcuts import render
from result import views

def home(request):
    return render(request, 'lotto.html')

def get_post(request):
   if request.method == 'GET':
      count = request.GET['count']
      data = {
         'data': count,
      }
      return render(request, 'result.html', data)