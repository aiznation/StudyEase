from django.shortcuts import render

# Home page view
def home_view(request):
    return render(request, "home.html", {})

# Sign-in page view
def signin_view(request):
    return render(request, "signin.html", {})

# Sign-up page view
def signup_view(request):
    return render(request, "signup.html", {})
