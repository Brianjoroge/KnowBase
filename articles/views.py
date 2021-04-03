from django.shortcuts import render, redirect, get_object_or_404
from django.http.response import JsonResponse,HttpResponse
from django.db.models import Count
from django.conf import settings # new
from django.views.decorators.csrf import csrf_exempt 
from django.views.generic import TemplateView
from django.contrib import  messages
from home.models import Customization

def home(request):
    customize_settings = Customization.objects.get(user_id = 1)    
    return render(request, 'blog/home_page.html', {"customize_settings":customize_settings})


def article_blog(request):
    customize_settings = Customization.objects.get(user_id = 1)    
    return render(request, 'blog/post.html', {"customize_settings":customize_settings})

