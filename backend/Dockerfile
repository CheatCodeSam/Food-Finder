FROM python:3.10.1-slim-buster

WORKDIR /usr/app

ENV DJ_DEBUG 0
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apt-get update \
  && apt-get -y install gcc \
  && apt-get clean

RUN pip install --upgrade pip
RUN pip install poetry
COPY poetry.lock .
COPY pyproject.toml .
RUN poetry config virtualenvs.create false
RUN poetry install --no-dev  

RUN adduser --disabled-password --gecos "" appuser

COPY . .
RUN python manage.py collectstatic --noinput
RUN chown -R appuser:appuser /usr/app
RUN chmod 755 /usr/app
USER appuser
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "foodfinder.wsgi"]