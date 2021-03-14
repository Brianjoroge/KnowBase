from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from django.core import validators


class UserRegForm(forms.Form):

    username = forms.CharField(label='EMAIL *',
                               widget=forms.TextInput(attrs={'placeholder': 'EMAIL', 'class': "form-control"}))

    password = forms.CharField(label='Password *', validators=[validate_password],
                               widget=forms.PasswordInput(attrs={'placeholder': 'Password', 'class': "form-control"}))

    confirm_password = forms.CharField(label='Confirm Password *', widget=forms.PasswordInput(
        attrs={'placeholder': 'Confirm Password', 'class': "form-control"}))

    # def clean(self):
    #     cleaned_data = super(UserRegForm, self).clean()
    #     password = cleaned_data.get("password")
    #     confirm_password = cleaned_data.get("confirm_password")

    #     if password != confirm_password:
    #         self.add_error('confirm_password', "Password does not match")

    #     if User.objects.filter(username=cleaned_data.get('username')).exists():
    #         self.add_error('username', "This User Name already exists.")
