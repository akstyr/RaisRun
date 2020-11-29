import json
import os
import base64
from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.contrib.auth.forms import UserCreationForm
from django.views.generic.edit import CreateView
from django.http import HttpResponse
from django.http import JsonResponse
from django.contrib.auth.models import User
 
def index(request):
    data = {}
    return render(request, "index.html", context=data)

def photos(request):
	data = {}
	return render(request, "photos.html", context=data)

def registrate_user(request):
	username = request.GET.get('username', None)
	
	data = {
		'is_taken': username
	}
	return JsonResponse(data)

def get_count(reques):
	file_count = 0
	with os.scandir("static/img/photos/") as dirList:
		for entry in dirList:
			if entry.is_file():
				file_count = file_count + 1
		return JsonResponse({'count': str(file_count)})


def get_photo(request):
	fileNum = request.GET.get('fileNum', None)
	print("photo_" + fileNum + ".jpg")
	image = open("static/img/photos/photo_"+ fileNum + ".jpg", "rb")
	image_base64 = base64.b64encode(image.read())
	return HttpResponse(image_base64)
