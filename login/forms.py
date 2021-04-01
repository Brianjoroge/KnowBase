from django import forms
from django.contrib import auth
 

class LoginForm(forms.Form):
    
    user_name = forms.CharField(label='User Name', max_length=100, widget=forms.TextInput(attrs={'class': "form-control", 'placeholder': 'User Name'}))

    password = forms.CharField(label='Password', widget = forms.PasswordInput(attrs={'class': "form-control", 'placeholder': 'Password'}))            