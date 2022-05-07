from celery import shared_task
from celery.utils.log import get_task_logger

from .util import attempt_to_scrape_rec

logger = get_task_logger(__name__)


@shared_task(name="attempt_to_scrape_rec_task")
def attempt_to_scrape_rec_task(business):
    return attempt_to_scrape_rec(business)
