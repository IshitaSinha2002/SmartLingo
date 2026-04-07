from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

@app.route("/translate", methods=["POST"])
def translate():
    try:
        data = request.get_json()
        text = data.get("text", "")
        source_lang = data.get("source", "en")
        target_lang = data.get("target", "fr")

        url = f"https://api.mymemory.translated.net/get?q={text}&langpair={source_lang}|{target_lang}"

        response = requests.get(url)
        result = response.json()

        translated_text = result["responseData"]["translatedText"]

        return jsonify({
            "translated_text": translated_text
        })

    except Exception as e:
        print("ERROR:", e)
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)