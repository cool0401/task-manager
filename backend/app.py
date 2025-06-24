# app.py
from flask import Flask, request, jsonify, abort
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///tasks.db'
db = SQLAlchemy(app)

class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    description = db.Column(db.String(200))
    due_date = db.Column(db.DateTime)

@app.route('/tasks', methods=['POST'])
def add_task():
    data = request.json
    try:
        task = Task(
            title=data['title'],
            description=data['description'],
            due_date=datetime.strptime(data['due_date'], '%Y-%m-%dT%H:%M')
        )
        db.session.add(task)
        db.session.commit()
        return jsonify({'message': 'Task added'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/tasks', methods=['GET'])
def get_tasks():
    due = request.args.get('due')
    try:
        if due:
            due_date = datetime.strptime(due, '%Y-%m-%d')
            tasks = Task.query.filter(Task.due_date <= due_date).all()
        else:
            tasks = Task.query.all()
    except ValueError:
        return abort(400, description="Invalid date format. Use YYYY-MM-DD.")
    
    return jsonify([
        {
            'id': t.id,
            'title': t.title,
            'description': t.description,
            'due_date': t.due_date.isoformat() if t.due_date else None
        }
        for t in tasks
    ])

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
