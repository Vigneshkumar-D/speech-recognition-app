---

# Speech Recognition App Frontend

## Introduction

The Speech Recognition App frontend is built using React, a JavaScript library for building user interfaces. It allows users to transcribe speech into text and save the transcripts to an Excel file.

## Features

- **Speech Recognition:** Users can initiate speech recognition to transcribe spoken text in real-time.
- **Transcription Display:** The app displays the transcribed text in real-time as speech recognition progresses.
- **Submit Transcription:** Users can submit the transcription data to the backend for processing.
- **Download Transcripts:** Transcripts can be downloaded as an Excel file for offline use.

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **Ant Design:** UI library for React components.
- **Bootstrap:** CSS framework for styling the user interface.

## Getting Started  Frontend

To run the Speech Recognition App frontend locally, follow these steps:

1. **Clone the Repository:**
   ```
   git clone <repository-url>
   ```

2. **Navigate to the Project Directory:**
   ```
   cd speech-recognition-app/frontend
   ```

3. **Install Dependencies:**
   ```
   npm install
   ```

4. **Start the Development Server:**
   ```
   npm start
   ```
## Setting Up the Backend
1. **Clone the Repository:**
   ```
   Clone the backend repository of the Data Search Application from the version control system (e.g., GitHub) to your local machine using Git:
   git clone <repository_url>
   ```
2. **Navigate to the Backend Directory:**
   ```
   Open a terminal and change the directory to the backend folder of the cloned repository:
   cd searchApp
   ```
3. **Install Dependencies:**
```
Install the required dependencies for the backend using Maven:
mvn install
```
4. **Configure Database:**
   ```
   Set up a PostgreSQL or any other compatible database instance.
   Create a new database for the application and configure the database connection properties in the application.properties file located in the src/main/resources directory.
   ```
5. **Run the Application:**
```
   Start the backend application by running the main class or using Maven:
   mvn spring-boot:run
```
The backend application will start and listen for incoming requests on the configured port 4000 (default port 8080 by default).


## Usage

1. **Starting Speech Recognition:** Click the "Start" button to initiate speech recognition. The app will start transcribing speech into text in real-time.

2. **Stopping Speech Recognition:** Click the "Stop" button to halt speech recognition. The app will cease transcribing speech and display the final transcription.

3. **Submitting Transcription:** After speech recognition is stopped, click the "Submit" button to send the transcription data to the backend for processing.

4. **Downloading Transcripts:** Click the "Download" button to download the transcripts as an Excel file.

## Support

For any issues or questions, please contact [maintainer-name] at [maintainer-email].

## Acknowledgements

We would like to acknowledge the contributions of all developers involved in this project. Thank you for your dedication and hard work!

---

Feel free to customize the content to fit your project's specific details! If you have any further questions or need additional assistance, feel free to ask.
