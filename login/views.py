from django.shortcuts import render
from .forms import LoginForm
from django.shortcuts import redirect
from django.contrib import auth, messages
from django.contrib.auth.hashers import check_password
from django.contrib.auth.models import User

# Create your views here. 
def signin(request):
 
    if request.method == 'POST':

        form = LoginForm(request.POST)
        
        if form.is_valid():
            form = LoginForm()
            userdata = auth.authenticate(username=request.POST.get('user_name'), password=request.POST.get('password'))
            
            if userdata is not None:
                auth.login(request, userdata)
                username1 = str(request.POST.get('user_name'))
                # print(userdata.groups.all[0])
                return redirect('app')
            else:
                messages.error(request, "Incorrect username or password")
                return redirect('signin')
    return render(request, 'users/sign_in.html')

def logoutfun(request):
    auth.logout(request)
    return redirect('signin')
