@echo off
cd /d "F:\Programming\Django Projects\StudyEase"
call Scripts\activate
cd src
python manage.py runserver
cmd /k
