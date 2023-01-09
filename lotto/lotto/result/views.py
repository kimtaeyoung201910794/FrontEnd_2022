from django.shortcuts import render
from myapp import templates
import random


def result(request):
    return render(request, 'result.html')

def get_post(request):

  if request.method == 'GET':
      count = request.GET['count']
     
      lo=[]
      list=[]

      for i in range(int(count)):
         lo = random.sample(range(1,46),6)
         list.append(lo)

      data = {
         'data': count,
         'list': list
        }

    
      return render(request, 'result.html', data)

