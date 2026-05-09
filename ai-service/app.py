from flask import Flask, jsonify
from flask_cors import CORS
import matplotlib.pyplot as plt
import io
import base64

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Python AI Service Running 🚀"

@app.route("/graph")
def generate_graph():
    skills = ["JavaScript", "React", "Node.js", "Python"]
    values = [85, 80, 75, 70]

    plt.figure(figsize=(6,4))
    plt.bar(skills, values, color=["#3b82f6", "#8b5cf6", "#10b981", "#f59e0b"])
    plt.title("My Skills")
    plt.xlabel("Technology")
    plt.ylabel("Proficiency (%)")

    buffer = io.BytesIO()
    plt.savefig(buffer, format="png", bbox_inches="tight")
    buffer.seek(0)

    image_base64 = base64.b64encode(buffer.read()).decode("utf-8")
    buffer.close()
    plt.close()

    return jsonify({"image": image_base64})

if __name__ == "__main__":
    app.run(port=8000, debug=True)