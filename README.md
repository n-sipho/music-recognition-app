This repository contains a README file sample for Daytona Samples and the MIT License.

It can be used as a template to create sample repositories that can be added into [Daytona](https://github.com/daytonaio/daytona).

Once you finish your sample and it gets merged, you can open a PR in the Daytona repo and submit the sample into the [index file](https://github.com/daytonaio/daytona/blob/main/hack/samples/index.json).

## 🎤 **Overview**

This a music recognition app built with ACRCloud. Identify songs playing around you, save them to playlists, and discover new favorites.

---

## ✨ **Features**

- ✅ **Music Recognition**: Identify music.
- 🚧 **Save Identified Songs**: Save identified songs to users db store
- ❌ **Real-time Audio Processing**: Identify songs in real-time.
- ❌ **Spotify Playlist Generation**: Generate Spotify playlist based on identified songs.
- ❌ **Spotify Integration**: Add identified songs to your Spotify playlists.
- ❌ **Discover New Music**: Discover new music based on your identified songs.
- ❌ **User Authentication**: Secure your account with user authentication.



---

## 🚀 Getting Started

Follow these instructions to get the app up and running on your local machine.

### Open Using Daytona

1.  **Install Daytona**: Follow the [Daytona installation guide](https://www.daytona.io/docs/installation/installation/).
2.  **Create the Workspace**:
    ```bash
    daytona create https://github.com/n-sipho/music-recognition-app
    ```
        3.	Create a .env file:
    Configure the following variables in your .env file:
      ```bash
      use the .env.example file as a template
      ```

4. **Start the Application**:
   ```bash
   fastapi dev main.py
   ```

---

## 🛠️ **Tech Stack**

-	Frontend: React Native
- **Backend**: Python, FastAPI
- **Database**: PostgreSQL (with SQLAlchemy ORM)
- **SDKs**: ACRCloud SDK (for music recognition)

---

**Special thanks to**:

- ACRCloud Developers

---

## ✨ Features

List of sample features (e.g. realtime chat app, standardized development environment with devcontainers)
