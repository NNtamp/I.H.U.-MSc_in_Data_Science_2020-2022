import logging
import datetime

 


log_file = "logs" + str(datetime.datetime.today().date()) + ".log"
logging.basicConfig(
    format="%(asctime)s - %(message)s",
    level=logging.INFO,
    handlers=[logging.StreamHandler(), logging.FileHandler(log_file)],
)
