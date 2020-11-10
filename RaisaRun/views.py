from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.contrib.auth.forms import UserCreationForm
from django.views.generic.edit import CreateView
 
def index(request):
    data = {}
    return render(request, "index.html", context=data)

def photos(request):
	data = {}
	return render(request, "photos.html", context=data)

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
