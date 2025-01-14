const room = new WebsimSocket();

function App() {
  const [videos, setVideos] = React.useState([]);
  const [showUploadModal, setShowUploadModal] = React.useState(false);
  const [selectedVideo, setSelectedVideo] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState(null);
  
  React.useEffect(() => {
    const getUser = async () => {
      const user = await window.websim.getCreatedBy();
      setCurrentUser(user);
    };
    getUser();

    // Subscribe to video posts
    room.collection('video').subscribe((videoList) => {
      setVideos(videoList.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)));
    });
  }, []);

  const handleUpload = async (event, title) => {
    event.preventDefault();
    const fileInput = event.target.elements.video;
    const file = fileInput.files[0];
    
    try {
      const url = await websim.upload(file);
      await room.collection('video').create({
        title,
        url,
        timestamp: new Date().toISOString(),
      });
      setShowUploadModal(false);
    } catch (error) {
      console.error('Error uploading video:', error);
      alert('Failed to upload video');
    }
  };

  return (
    <div>
      <header className="header">
        <a href="#" className="logo">Safe<span>Tube</span></a>
        {currentUser?.username === 'Crzy' && (
          <button 
            className="upload-button"
            onClick={() => setShowUploadModal(true)}
          >
            Upload Video
          </button>
        )}
      </header>

      <main className="main-content">
        <div className="video-grid">
          {videos.map((video) => (
            <div 
              key={video.id} 
              className="video-card"
              onClick={() => setSelectedVideo(video)}
            >
              <video className="video-thumbnail" src={video.url} />
              <div className="video-info">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-meta">
                  Uploaded by Crzy • {new Date(video.timestamp).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {showUploadModal && (
        <UploadModal 
          onClose={() => setShowUploadModal(false)}
          onUpload={handleUpload}
        />
      )}

      {selectedVideo && (
        <VideoPlayer 
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  );
}

function UploadModal({ onClose, onUpload }) {
  const [title, setTitle] = React.useState('');

  return (
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal">
        <h2 className="modal-title">Upload Video</h2>
        <form onSubmit={(e) => onUpload(e, title)}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="video">Video File</label>
            <input
              type="file"
              id="video"
              accept="video/*"
              required
            />
          </div>
          <div className="modal-buttons">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="upload-button">
              Upload
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

function VideoPlayer({ video, onClose }) {
  return (
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div className="video-player-container">
        <button className="close-button" onClick={onClose}>×</button>
        <video 
          className="video-player" 
          src={video.url} 
          controls 
          autoPlay
        />
        <h2 className="player-title">{video.title}</h2>
        <p className="player-meta">
          Uploaded by Crzy • {new Date(video.timestamp).toLocaleDateString()}
        </p>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
