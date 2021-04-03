from django.urls import path
from django.views.generic import TemplateView
from . import views
 

urlpatterns = [
    path('home', views.home, name='article_home'),
    path('article_blog', views.article_blog, name='article_blog'),
]