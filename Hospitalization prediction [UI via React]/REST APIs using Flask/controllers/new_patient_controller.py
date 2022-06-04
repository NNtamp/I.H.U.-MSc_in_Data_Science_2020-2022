from flask import Blueprint, request, jsonify, abort
from services import new_patient_service

api = Blueprint(
    name="new_patient_controller",
    import_name="new_patient_controller",
    url_prefix="/models"
)


@api.route("/", methods=["POST"], strict_slashes=False)
def save_patient():
    new_patient = request.get_json()

    result = new_patient_service.save(new_patient)
    if not result:
        abort(400)

    return jsonify(result), 201