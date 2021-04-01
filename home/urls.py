from django.urls import path
from django.views.generic import TemplateView
from ragister.views import signup
from login.views import signin
from . import views


urlpatterns = [
    path('', TemplateView.as_view(template_name="index1.html"), name='index'),

    path('signup', signup, name='signup'),
    
    path('signin', signin, name='signin'),
    path('contactus', views.contactus, name='contactus'),

    path('new', views.newuser, name='newuser'),
    
    path('section/new', views.newsection, name='newsection'),
    path('section/new1', views.newsection1, name='newsection1'),

    path('section/<int:id>/details', views.details, name='details'),
    path('section/edit', views.editsection, name='editsection'),
    
    path('section/article/new', views.newarticle, name='newarticle'),
    path('section/article/article_writer', views.article_writer, name='article_writer'),
    
    path('section/article/published_article/<int:id>', views.published_article, name='published_article'),
    path('section/article/section_describe/<int:id>', views.section_describe, name='section_describe'),
    
    path('app/article/<int:id>', views.view_article, name='view_article'),
    
    path('app', views.app, name='app'),
    path('app1', views.app1, name='app1'),
    path('app/customization', views.customization, name='customization'),
    path('app/customization/general', views.general, name='general'),
    
    
    path('app/account/billing', views.billing, name='billing'),
    path('app/account/billing/config', views.config, name='billing_config'),
    path('create-checkout-session', views.create_checkout_session, name = "create_checkout_session"), # new


    path('app/members', views.members, name='members'),
    path('app/members/new', views.newmember, name='newmember'),


    path('success/', views.SuccessView.as_view()), # new
    path('cancelled/', views.CancelledView.as_view()), # new


     path('webhook/', views.stripe_webhook), # new
]

