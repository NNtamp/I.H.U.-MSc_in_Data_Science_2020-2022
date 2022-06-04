from flask import Blueprint, jsonify
from services import stats_service

api = Blueprint(
    name="stats_controller",
    import_name="stats_controller",
    url_prefix="/stats",
)


@api.route("/")
def stats():
    return stats_service.main()
    return jsonify(stats.to_json()), 200
