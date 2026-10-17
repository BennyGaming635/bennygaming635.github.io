# Music

The Music tab displays the public Last.fm activity for **Bennyboy635**, which receives Spotify listening activity through the user's Last.fm connection.

- The browser checks every 20 seconds while the page is visible.
- A track is labelled **Listening now** only when Last.fm's `nowplaying` field is true. Otherwise it is labelled **Last played**.
- If the feed fails, the previous track is labelled **Last known track**, rather than being presented as live.
- **Find on Spotify** searches Spotify for the title and artist. **Last.fm** opens the track page.
- No autoplay or playback controls are included.

The static website uses the public, CORS-enabled [lastfm-last-played](https://github.com/biancarosa/lastfm-last-played) bridge at `https://lastfm-last-played.biancarosa.com.br/Bennyboy635/latest-song`. The feed's availability and update timing depend on Last.fm and that bridge. No account tokens or API keys are stored in the website.
