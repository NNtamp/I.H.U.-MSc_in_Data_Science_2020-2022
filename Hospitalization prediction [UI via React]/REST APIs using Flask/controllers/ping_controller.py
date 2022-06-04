from flask import Blueprint

api = Blueprint(
    name="ping_controller",
    import_name="ping_controller",
    url_prefix="/emp/api/v1.0/ping",
)


@api.route("/")
def ping():
    return "Pong"