from flask import render_template, request, send_from_directory
from boilerplate import app, db
from boilerplate.models import Question, Suggestion

@app.route('/')
def index():
	context = {}
	return render_template('index.html', **context)