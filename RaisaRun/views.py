from django.shortcuts import render
from django.http import HttpResponseRedirect

from .forms import NameForm
 
def index(request):
    data = {}
    return render(request, "index.html", context=data)

def photos(request):
	data = {}
	return render(request, "photos.html", context=data)

def signup(request):
	data = {}
	return render(request, "index.html", context=data)

def images(request):
	if request.method == "POST":
		form = NameForm(request.POST)
		if form.is_valid():
			return HttpResponseRedirect('/thanks/')
	else:
		form = NameForm()

	return render(request, "index.html", {'form': form})
