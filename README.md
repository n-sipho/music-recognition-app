# Music Recognition App

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
3.	**Create a .env file:**

    Copy the .env.example file to .env and update the environment variables with your own values.:
      ```bash
      cp .env.example .env
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
