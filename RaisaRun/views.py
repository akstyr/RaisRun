from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.contrib.auth.forms import UserCreationForm
from django.views.generic.edit import CreateView
from django.http import JsonResponse
from django.contrib.auth.models import User
 
def index(request):
    data = {}
    return render(request, "index.html", context=data)

def photos(request):
	data = {}
	return render(request, "photos.html", context=data)

def validate_username(request):
	username = request.GET.get('username', None)
	print(username)
	data = {
		'is_taken': User.objects.filter(username__iexact=username).exists()
	}
	print(data)
	return JsonResponse(data)

class SignUpView(CreateView):
	template_name = "signup.html"
	form_class = UserCreationForm

def images(request):
	if request.method == "POST":
		form = NameForm(request.POST)
		if form.is_valid():
			return HttpResponseRedirect('/thanks/')
	else:
		form = NameForm()

	return render(request, "index.html", {'form': form})
