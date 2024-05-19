# Use the official Python image from the Docker Hub
FROM --platform=linux/amd64 python:3.9-slim

# Set environment variables
ENV PYTHONUNBUFFERED 1  # Ensures immediate output of logs and print statements

# Install Tesseract and other dependencies
RUN apt-get update && \
    apt-get install -y tesseract-ocr libtesseract-dev libleptonica-dev && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Create a working directory
WORKDIR /app

# Copy the application code to the working directory
COPY ./backend /app

# Install the application dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Define the entry point for the container
ENTRYPOINT ["python"]

# Define the command to run the application
CMD ["main.py"]