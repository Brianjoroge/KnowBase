from django.shortcuts import render
from .forms import UserRegForm
from django.shortcuts import redirect
from django.contrib.auth.hashers import make_password
# from rolepermissions.roles import assign_role
from django.contrib.auth.models import User
from django.contrib import  messages

# Create your views here.

def signup(request):
    if request.method == 'POST':

        form = UserRegForm(request.POST)

        if form.is_valid():
            

            if request.POST.get('password') != request.POST.get('confirm_password'):
                messages.error(request, "Password does not match")                
                return redirect('signup')
            elif User.objects.filter(username=request.POST.get('username')).exists():
                messages.error(request, "This User Name already exists.")
                return redirect('signup')
            else:

                form = UserRegForm()

                userdata = User()
                userdata.username = request.POST.get('username')
                userdata.password = make_password(request.POST.get('password'))
                userdata.save()

                # unidata = University()
                # unidata.name = request.POST.get('name')
                # unidata.user_id = userdata.id
                # unidata.save()

                # assign_role(userdata, 'university')

                return redirect('signin')
        

    return render(request, 'users/sign_up.html')